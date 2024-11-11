import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';

// Defina o tipo de navegação para o Stack Navigator diretamente no arquivo
type RootStackParamList = {
  IniciateRide: undefined;
  Corrida: undefined; // Adicione outras rotas conforme necessário
};

// Defina o tipo de navegação para a tela
type NavigationProps = StackNavigationProp<RootStackParamList, 'IniciateRide'>;

const IniciateRide = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleStartRide = () => {
    navigation.navigate('Corrida'); // Navega para a rota "Corrida"
  };

  return (
    <View style={styles.container}>
      {/* Imagem */}
      <Image
        source={require('./bicicleta.png')} // Substitua pelo caminho da sua imagem local ou use uma URL
        style={styles.image}
      />

      {/* Texto de título */}
      <Text style={styles.title}>Aproveite sua pedalada!</Text>

      {/* Texto de subtítulo */}
      <Text style={styles.subtitle}>Sua bicicleta foi reservada com sucesso</Text>

      {/* Botão */}
      <TouchableOpacity style={styles.button} onPress={handleStartRide}>
        <Text style={styles.buttonText}>Iniciar pedalada</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IniciateRide;
