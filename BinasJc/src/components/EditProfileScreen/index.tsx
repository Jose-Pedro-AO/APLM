import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles'; // Importando o arquivo de estilos separado

const EditProfileScreen = () => {
  const [name, setName] = useState('João Silva');
  const [phone, setPhone] = useState('1234567890');
  const [email, setEmail] = useState('joaosilva@example.com');

  const handleUpdate = () => {
    console.log('Perfil atualizado:', { name, phone, email });
    // Lógica de atualização pode ser adicionada aqui
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Editar Perfil</Text>
      </View>

      {/* Imagem de perfil */}
      <View style={styles.profileImageContainer}>
        <Image source={require('./joao.png')} style={styles.profileImage} />
        <TouchableOpacity style={styles.cameraIcon}>
          <FontAwesome name="camera" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* Formulário de edição */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Nome</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Digite seu nome"
          placeholderTextColor="#A1A1A1"
        />

        <Text style={styles.inputLabel}>Número de telefone</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholder="Digite seu telefone"
          placeholderTextColor="#A1A1A1"
        />

        <Text style={styles.inputLabel}>Endereço de e-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Digite seu e-mail"
          placeholderTextColor="#A1A1A1"
        />
      </View>

      {/* Botão de atualização */}
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
        <Text style={styles.updateButtonText}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;
