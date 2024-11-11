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

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [currentLocation, setCurrentLocation] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredStations, setFilteredStations] = useState<Station[]>([]);

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

  const handleInputFocus = () => {
    navigation.navigate('Destino');
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const results = stations.filter(
      station =>
        station.id.toString().includes(text) ||
        station.availableBikes.toString().includes(text)
    );
    setFilteredStations(results);
  };

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
        <Text style={styles.greeting}>Olá, João Silva</Text>
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
            // onFocus={handleInputFocus}
            onFocus={() => setModalVisible(true)}
          />
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Estação {selectedStation?.id || 'Selecionar Estação'}
            </Text>

            <TextInput
              value={currentLocation}
              style={styles.input}
              editable={false}
            />

            <TextInput
              placeholder="Pesquisar estação"
              value={searchQuery}
              onChangeText={handleSearch}
              style={styles.input}
            />

            <FlatList
              data={filteredStations}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleStationPress(item)}>
                  <Text style={styles.searchResult}>
                    Estação {item.id} - Bicicletas: {item.availableBikes}
                  </Text>
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity
              style={styles.reserveButton}
              onPress={handleReservation}
            >
              <Text style={styles.reserveButtonText}>Reservar</Text>
            </TouchableOpacity>
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
