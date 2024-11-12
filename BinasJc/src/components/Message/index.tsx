import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles'; // Importação correta para exportação 'default'

type ChatMessageProps = {
  navigation: StackNavigationProp<any>;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Jonh Doe</Text>
        <TouchableOpacity>
          <Text style={styles.options}>⋮</Text>
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <ScrollView style={styles.chatArea}>
        {/* Example messages */}
        <View style={styles.messageContainer}>
          <Image source={require('./user.jpg')} style={styles.avatar} />
          <View style={styles.receivedMessage}>
            <Text>Lorem ipsum dolor sit amet ipsun</Text>
            <Text style={styles.timestamp}>10:30</Text>
          </View>
        </View>

        <View style={styles.messageContainerSent}>
          <View style={styles.sentMessage}>
            <Text>Lorem ipsum dolor sit amet ipsun</Text>
            <Text style={styles.timestamp}>10:32</Text>
          </View>
          <Image source={require('./user.jpg')} style={styles.avatar} />
        </View>

        <View style={styles.messageContainer}>
          <Image source={require('./user.jpg')} style={styles.avatar} />
          <View style={styles.receivedMessage}>
            <Text>Lorem ipsum dolor sit amet ipsun</Text>
            <Text style={styles.timestamp}>10:35</Text>
          </View>
        </View>

        <View style={styles.messageContainerSent}>
          <View style={styles.sentMessage}>
            <Text>Lorem ipsum dolor sit amet ipsun</Text>
            <Text style={styles.timestamp}>10:38</Text>
          </View>
          <Image source={require('./user.jpg')} style={styles.avatar} />
        </View>
      </ScrollView>

      {/* Message Input */}
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma mensagem..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatMessage;
