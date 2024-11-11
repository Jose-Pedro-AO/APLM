import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';

// Definindo o tipo de rotas para o Stack Navigator
type RootStackParamList = {
  EndRideScreen: undefined;
  Corrida: undefined; // Adicione outras rotas conforme necessário
  FimDeCorrida: undefined; // Adicionando a rota para "FimDeCorrida"
};

// Tipagem de navegação para a tela atual
type NavigationProps = StackNavigationProp<RootStackParamList, 'EndRideScreen'>;

const EndRideScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleGoBack = () => {
    navigation.navigate('Corrida'); // Navega para a rota "Corrida"
  };

  const handleConfirm = () => {
    navigation.navigate('FimDeCorrida'); // Navega para a rota "FimDeCorrida"
  };

  return (
    <View style={styles.container}>
      {/* Mapa */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 48.8566, // Coordenada para Paris
          longitude: 2.3522,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsUserLocation={true}
      >
        {/* Marcadores de exemplo */}
        <Marker
          coordinate={{ latitude: 48.8566, longitude: 2.3522 }}
          title="Ponto de chegada"
        />
      </MapView>

      {/* Informações da bicicleta e opções */}
      <View style={styles.infoContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Encerrar corrida</Text>
          <Text style={styles.subtitle}>Desça no ponto mais próximo</Text>
        </View>
        <View style={styles.bikeDetails}>
          <Image source={require('./bicicleta.png')} style={styles.bikeImage} />
          <View>
            <Text style={styles.address}>
              <FontAwesome name="map-marker" size={18} color="#007AFF" /> 6391
              Elgin St. Celina, Delaware 10299
            </Text>
            <Text style={styles.timeDistance}>15 min/2.5 km</Text>
            <Text style={styles.note}>
              *Certifique-se de estacionar na zona permitida.
            </Text>
          </View>
        </View>

        {/* Botões */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirm}
          >
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EndRideScreen;
