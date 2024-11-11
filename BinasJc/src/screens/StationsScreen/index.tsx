// src/screens/StationsScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

interface Station {
  id: string;
  name: string;
  location: string;
}

type StationScreenProps = {
  navigation: StackNavigationProp<any>;
};

const stations: Station[] = [
  { id: '1', name: 'Estação Central', location: 'Rua Principal' },
  { id: '2', name: 'Estação 1 de Maio', location: '1 de Maio' },
  { id: '3', name: 'Estação Ingombota', location: 'Ingombota' },
];

export default function StationsScreen({ navigation }: StationScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStations = stations.filter(station =>
    station.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderStationItem = ({ item }: { item: Station }) => (
    <View style={styles.stationItem}>
      <Text style={styles.stationName}>{item.name}</Text>
      <Text style={styles.stationLocation}>{item.location}</Text>
      <TouchableOpacity
        style={styles.mapButton}
        onPress={() => navigation.navigate('Map')}
      >
        <Text style={styles.mapButtonText}>Ver no Mapa</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Estações Disponíveis</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar Estações"
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredStations}
        renderItem={renderStationItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma estação encontrada.</Text>
        }
      />
    </View>
  );
}
