import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from './styles';

interface Ride {
  id: string;
  bikeModel: string;
  date: string;
  distance: string;
  duration: string;
  points: string;
  image: any; // Use require para imagens locais
}

const rides: Ride[] = [
  {
    id: '1',
    bikeModel: 'BinaJC BK2545',
    date: '5 ago 2022, 05:49 pm',
    distance: '3.5 km',
    duration: '10.36 min',
    points: '+5 pts',
    image: require('./bicicleta.png'),
  },
  {
    id: '2',
    bikeModel: 'BinaJC KG5689',
    date: '6 ago 2022, 04:49 pm',
    distance: '3.5 km',
    duration: '10.36 min',
    points: '+10 pts',
    image: require('./bicicleta.png'),
  },
  // Adicione mais itens conforme necessário
];

export default function RideHistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Histórico de Corridas</Text>
      <FlatList
        data={rides}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.rideCard}>
            <Image source={item.image} style={styles.bikeImage} />
            <View style={styles.rideInfo}>
              <Text style={styles.bikeModel}>{item.bikeModel}</Text>
              <Text style={styles.rideDate}>{item.date}</Text>
              <View style={styles.rideDetails}>
                <Text style={styles.rideDetailText}>{item.distance}</Text>
                <Text style={styles.rideDetailText}>{item.duration}</Text>
                <Text style={styles.rideDetailText}>{item.points}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
