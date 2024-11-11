// src/screens/CyclistsScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';

// Definindo o tipo para os ciclistas
interface Cyclist {
  id: string;
  name: string;
  score: number;
}

const cyclists: Cyclist[] = [
  { id: '1', name: 'Jose Pedro', score: 120 },
  { id: '2', name: 'Catarina', score: 95 },
  { id: '3', name: 'Holeg Antonio', score: 150 },
  { id: '4', name: 'Jonh Doe', score: 80 },
];

export default function CyclistsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCyclists = cyclists.filter(cyclist =>
    cyclist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderCyclistItem = ({ item }: { item: Cyclist }) => (
    <View style={styles.cyclistItem}>
      <Text style={styles.cyclistName}>{item.name}</Text>
      <Text style={styles.cyclistScore}>Pontuação: {item.score}</Text>
      <TouchableOpacity style={styles.messageButton}>
        <Text style={styles.messageButtonText}>Contactar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ciclistas Disponíveis</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar Ciclistas"
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredCyclists}
        renderItem={renderCyclistItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum ciclista encontrado.</Text>
        }
      />
    </View>
  );
}
