import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

interface Station {
  id: number;
  latitude: number;
  longitude: number;
  availableBikes: number;
}

interface Places {
  id: string;
  name: String;
  location: String;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [currentLocation, setCurrentLocation] =
    useState<string>('Minha localização');

  const places: Places[] = [
    { id: '1', name: 'Estação Central', location: 'Rua Principal' },
    { id: '2', name: 'Estação 1 de Maio', location: '1 de Maio' },
    { id: '3', name: 'Estação Ingombota', location: 'Ingombota' },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredStations = places.filter(places =>
    places.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stations: Station[] = [
    { id: 1, latitude: -8.815948, longitude: 13.230298, availableBikes: 5 },
    { id: 2, latitude: -8.815895, longitude: 13.230438, availableBikes: 3 },
    { id: 3, latitude: -8.81613, longitude: 13.230152, availableBikes: 2 },
    { id: 4, latitude: -8.815717, longitude: 13.229905, availableBikes: 4 },
    { id: 5, latitude: -8.815653, longitude: 13.230394, availableBikes: 1 },
  ];

  const handleStationPress = (station: Station) => {
    setSelectedStation(station);
    setModalVisible(true);
  };

  const handleReservation = () => {
    navigation.navigate('Destino');
    setModalVisible(false);
  };

  const renderStationItem = ({ item }: { item: Station }) => (
    <TouchableOpacity
      style={styles.searchResult}
      onPress={() => {
        setSelectedStation(item);
        setModalVisible(false);
      }}
    >
      <Text>
        Estação {item.id} - Bikes disponíveis: {item.availableBikes}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -8.815948,
          longitude: 13.230298,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {stations.map(station => (
          <Marker
            key={station.id}
            coordinate={{
              latitude: station.latitude,
              longitude: station.longitude,
            }}
            onPress={() => handleStationPress(station)}
          >
            <Image
              source={require('./bicicleta.png')}
              style={styles.stationIcon}
            />
          </Marker>
        ))}
      </MapView>

      <View style={styles.overlay}>
        <Text style={styles.greeting}>Olá, Jonh Doe</Text>
        <Text style={styles.question}>Escolher estação:</Text>
        <View style={styles.inputContainer}>
          <Ionicons
            name="search"
            size={20}
            color="#7AB2B2"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Digite o nome da estação"
            style={styles.input}
            onFocus={() => setModalVisible(true)}
          />
        </View>
      </View>

      {/* Modal para busca de estações */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Pesquisar estação de partida"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <TextInput
              style={styles.input}
              placeholder="Pesquisar estação de chegada"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />

            <FlatList
              data={filteredStations}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.searchResult}
                  onPress={() => {
                    setModalVisible(false);
                    console.log(`Estação selecionada: ${item.name}`);
                  }}
                >
                  <Text>{item.name}</Text>
                  <Text>{item.location}</Text>
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
