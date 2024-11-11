import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';

// Definindo o tipo de rotas para o Stack Navigator
type RootStackParamList = {
  RideScreen: undefined;
  Fim: undefined; // Defina outras rotas se necessário
};

// Tipagem de navegação para a tela atual
type NavigationProps = StackNavigationProp<RootStackParamList, 'RideScreen'>;

const RideScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleEndRide = () => {
    navigation.navigate('Fim'); // Navega para a rota "Fim"
  };

  return (
    <View style={styles.container}>
      {/* Mapa */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -8.9363, // Coordenada central aproximada entre Benfica e Talatona
          longitude: 13.2004,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsUserLocation={true}
      >
        {/* Marcadores para Benfica e Talatona */}
        <Marker coordinate={{ latitude: -8.9671, longitude: 13.2275 }} title="Benfica" />
        <Marker coordinate={{ latitude: -8.9286, longitude: 13.2096 }} title="Talatona" />

        {/* Linha representando a rota entre Benfica e Talatona */}
        <Polyline
          coordinates={[
            { latitude: -8.9671, longitude: 13.2275 }, // Benfica
            { latitude: -8.9286, longitude: 13.2096 }, // Talatona
          ]}
          strokeColor="#007AFF"
          strokeWidth={3}
        />
      </MapView>

      {/* Detalhes da bicicleta */}
      <View style={styles.infoContainer}>
        <View style={styles.bikeInfo}>
          <View>
            <Text style={styles.bikeTitle}>BinaJC BK2252</Text>
            <Text style={styles.bikeRange}>Autonomia</Text>
            <Text style={styles.bikeDetails}>30-35 km</Text>
          </View>
          <Image source={require('./bicicleta.png')} style={styles.bikeImage} />
        </View>
        
        {/* Linha divisória */}
        <View style={styles.divider} />

        {/* Informações adicionais */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <FontAwesome name="battery" size={24} color="#007AFF" />
            <Text style={styles.statLabel}>Nível da bateria</Text>
            <Text style={styles.statValue}>90%</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialIcons name="access-time" size={24} color="#007AFF" />
            <Text style={styles.statLabel}>Tempo de uso</Text>
            <Text style={styles.statValue}>02 : 15 min</Text>
          </View>
          <View style={styles.statItem}>
            <FontAwesome name="road" size={24} color="#007AFF" />
            <Text style={styles.statLabel}>Distância</Text>
            <Text style={styles.statValue}>3.5 km</Text>
          </View>
        </View>

        {/* Botões de ação */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.pauseButton}>
            <Text style={styles.buttonText}>Pausar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.endButton} onPress={handleEndRide}>
            <Text style={styles.buttonText}>Encerrar corrida</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RideScreen;
