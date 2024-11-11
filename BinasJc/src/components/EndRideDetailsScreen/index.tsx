// Importações necessárias
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';

// Definindo o tipo de rotas para o Stack Navigator
type RootStackParamList = {
  EndRideDetailsScreen: undefined;
  Main: undefined; // Adicione outras rotas conforme necessário
};

// Tipagem de navegação para a tela atual
type NavigationProps = StackNavigationProp<RootStackParamList, 'EndRideDetailsScreen'>;

const EndRideDetailsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const navigation = useNavigation<NavigationProps>();

  const handleStarPress = (star: number) => {
    setSelectedRating(star);
  };

  const handleSubmit = () => {
    setModalVisible(false);
    navigation.navigate('Main'); // Navega para a tela "Main"
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Corrida finalizada</Text>
      </View>

      {/* Detalhes da bicicleta */}
      <View style={styles.bikeInfoContainer}>
        <Text style={styles.bikeTitle}>BinaJC BK2252</Text>
        <Image source={require('./bicicleta.png')} style={styles.bikeImage} />
        <Text style={styles.calorieText}>Pontos ganhos: 50 💎</Text>
      </View>

      {/* Informações de resumo */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryItem}>
          <MaterialIcons name="access-time" size={24} color="#007AFF" />
          <Text style={styles.summaryLabel}>Tempo de corrida</Text>
          <Text style={styles.summaryValue}>09 : 12 min</Text>
        </View>
        <View style={styles.summaryItem}>
          <FontAwesome name="pause" size={24} color="#007AFF" />
          <Text style={styles.summaryLabel}>Tempo de pausa</Text>
          <Text style={styles.summaryValue}>01 : 15 min</Text>
        </View>
        <View style={styles.summaryItem}>
          <FontAwesome name="road" size={24} color="#007AFF" />
          <Text style={styles.summaryLabel}>Distância</Text>
          <Text style={styles.summaryValue}>3.5 km</Text>
        </View>
      </View>

      {/* Informações de localização */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationTitle}>Local de partida</Text>
        <Text style={styles.locationText}>
          <FontAwesome name="map-marker" size={18} color="#007AFF" /> Benfica Kifica
        </Text>
        <Text style={styles.timeText}>06 : 36 pm</Text>

        <Text style={styles.locationTitle}>Local de chegada</Text>
        <Text style={styles.locationText}>
          <FontAwesome name="map-marker" size={18} color="#007AFF" /> Talatona Mirantes
        </Text>
        <Text style={styles.timeText}>08 : 50 pm</Text>
      </View>

      {/* Pergunta sobre a experiência */}
      <View style={styles.experienceContainer}>
        <Text style={styles.experienceText}>Como foi sua corrida? Partilhe sua experiência conosco</Text>
      </View>

      {/* Botão para avaliar */}
      <TouchableOpacity style={styles.rateButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.rateButtonText}>Avaliar</Text>
      </TouchableOpacity>

      {/* Modal para avaliação */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Avaliar a corrida</Text>
            <Text style={styles.modalSubtitle}>Por favor, avalie e compartilhe sua experiência conosco</Text>

            {/* Renderização de estrelas */}
            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((star: number) => (
                <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
                  <FontAwesome
                    name="star"
                    size={30}
                    color={star <= (selectedRating || 0) ? '#FFD700' : '#D3D3D3'}
                  />
                </TouchableOpacity>
              ))}
            </View>

            {/* Botões do modal */}
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Enviar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EndRideDetailsScreen;
