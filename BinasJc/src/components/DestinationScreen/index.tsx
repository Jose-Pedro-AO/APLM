import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';

// Definindo o tipo de rotas
type RootStackParamList = {
  Home: undefined;
  Destino: undefined; // Adicione outras rotas conforme necessário
  Iniciar: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'Destino'>;

interface Station {
  name: string;
  isFavorite: boolean;
  city: string;
}

const locations: Station[] = [
  { name: 'Estação Boa Vista', isFavorite: true, city: 'Boa Vista' },
  { name: 'Estação Benfica', isFavorite: true, city: 'Benfica' },
  { name: 'Estação Talatona', isFavorite: false, city: 'Talatona' },
  { name: 'Estação Zango', isFavorite: false, city: 'Zango' },
];

const DestinationScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  const [selectedDeparture, setSelectedDeparture] = useState<string | null>(
    null
  );
  const [selectedArrival, setSelectedArrival] = useState<string | null>(null);

  const handleStationSelect = (
    station: string,
    type: 'departure' | 'arrival'
  ) => {
    if (type === 'departure') {
      setSelectedDeparture(station);
    } else {
      setSelectedArrival(station);
    }
  };

  const handleConfirmReservation = () => {
    if (selectedDeparture && selectedArrival) {
      Alert.alert(
        'Reserva Confirmada',
        `Partida: ${selectedDeparture}, Chegada: ${selectedArrival}`,
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Iniciar'), // Navega para a rota "Iniciar"
          },
        ]
      );
    } else {
      Alert.alert(
        'Erro',
        'Por favor, selecione a estação de partida e de chegada.'
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="close" size={28} color="#FF69B4" />
        </TouchableOpacity>
        <Text style={styles.headerText}>PARA ONDE VAIS?</Text>
      </View>

      <View style={styles.currentLocationContainer}>
        <FontAwesome name="dot-circle-o" size={26} color="#FF69B4" />
        <Text style={styles.locationText}>Selecionar estação de partida</Text>
        <ScrollView horizontal style={styles.stationSelector}>
          {locations.map((location, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.stationItem,
                selectedDeparture === location.name && styles.selectedStation,
              ]}
              onPress={() => handleStationSelect(location.name, 'departure')}
            >
              <Text style={styles.stationName}>{location.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.chooseDestinationContainer}>
        <FontAwesome name="circle-o" size={26} color="#6A0DAD" />
        <Text style={styles.destinationText}>
          Selecionar estação de chegada
        </Text>
        <ScrollView horizontal style={styles.stationSelector}>
          {locations.map((location, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.stationItem,
                selectedArrival === location.name && styles.selectedStation,
              ]}
              onPress={() => handleStationSelect(location.name, 'arrival')}
            >
              <Text style={styles.stationName}>{location.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.divider} />

      <TouchableOpacity
        style={[
          styles.confirmButton,
          !(selectedDeparture && selectedArrival) && styles.disabledButton,
        ]}
        onPress={handleConfirmReservation}
        disabled={!(selectedDeparture && selectedArrival)}
      >
        <Text style={styles.confirmButtonText}>Confirmar Reserva</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DestinationScreen;
