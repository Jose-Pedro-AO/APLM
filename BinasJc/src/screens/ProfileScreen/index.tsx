import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';

// Definindo o tipo de navegação
type RootStackParamList = {
  ProfileScreen: undefined;
  EditarP: undefined;
  Historico: undefined;
  Termos: undefined;
};

// Tipagem de navegação para a tela atual
type NavigationProps = StackNavigationProp<RootStackParamList, 'ProfileScreen'>;

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProps>();

  const handleLogout = () => {
    console.log('Usuário deslogado');
    // Lógica para deslogar o usuário
  };

  const handleEditProfile = () => {
    navigation.navigate('EditarP');
  };

  const handleRideHistory = () => {
    navigation.navigate('Historico');
  };

  const handleTermsAndConditions = () => {
    navigation.navigate('Termos');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho do perfil */}
      <View style={styles.profileHeader}>
        <Image source={require('./user.jpg')} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Jonh Doe</Text>
          <Text style={styles.profileEmail}>jonh.doe@gmail.com</Text>
        </View>
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <MaterialIcons name="edit" size={24} color="#7AB2B2" />
        </TouchableOpacity>
      </View>

      {/* Estatísticas */}
      <View style={styles.statsContainer}>
        <StatBox
          iconSource={require('./bike.png')}
          label="Viagens Feitas"
          value="40 Viagens"
        />
        <StatBox
          icon={<FontAwesome name="compass" size={40} color="#7AB2B2" />}
          label="Distância"
          value="90.45 km"
        />
        <StatBox
          iconSource={require('./diamond.png')}
          label="Pontos"
          value="50 Ptos"
        />
      </View>

      {/* Menu de opções */}
      <View style={styles.menuContainer}>
        <MenuItem
          title="Histórico de viagens"
          icon="history"
          onPress={handleRideHistory}
        />
      </View>
    </ScrollView>
  );
}

// Componente para as caixas de estatísticas
interface StatBoxProps {
  iconSource?: any;
  icon?: JSX.Element;
  label: string;
  value: string;
}

function StatBox({ iconSource, icon, label, value }: StatBoxProps) {
  return (
    <View style={styles.statBox}>
      {iconSource ? (
        <Image source={iconSource} style={styles.statIcon} />
      ) : (
        icon
      )}
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statText}>{value}</Text>
    </View>
  );
}

// Componente do item do menu
interface MenuItemProps {
  title: string;
  icon: string;
  isLogout?: boolean;
  onPress?: () => void;
}

function MenuItem({ title, icon, isLogout, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity
      style={[styles.menuItem, isLogout && styles.logoutItem]}
      onPress={onPress}
    >
      <FontAwesome name={icon} size={24} color={isLogout ? 'red' : '#7AB2B2'} />
      <Text style={[styles.menuText, isLogout && styles.logoutText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
