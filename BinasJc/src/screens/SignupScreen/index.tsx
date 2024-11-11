import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';

type SignupScreenProps = {
  navigation: StackNavigationProp<any>;
};

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não correspondem.');
      return;
    }

    // Lógica para registrar o usuário
    console.log('Usuário cadastrado com sucesso!');
    Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
    // navigation.navigate('Login'); // Se desejar redirecionar para a tela de login
  };

  const handleLoginNavigation = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua Conta</Text>
      <Text style={styles.subtitle}>Junte-se a nós</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Já tem uma conta?</Text>
        <TouchableOpacity onPress={handleLoginNavigation}>
          <Text style={styles.footerLink}>Faça login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;
