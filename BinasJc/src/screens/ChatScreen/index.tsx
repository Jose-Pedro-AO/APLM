import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

type ChatScreenProps = {
  navigation: StackNavigationProp<any>;
};

interface Chat {
  id: string;
  name: string;
  message: string;
  time: string;
  avatar: any;
  isOnline: boolean;
  unreadCount: number;
}

const chats: Chat[] = [
  {
    id: '1',
    name: 'Jane Doe',
    message: 'Bom dia!',
    time: '12:45',
    avatar: require('./user.jpg'),
    isOnline: true,
    unreadCount: 1,
  },
  {
    id: '2',
    name: 'Jose Pedro',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
    time: '13:30',
    avatar: require('./user.jpg'),
    isOnline: false,
    unreadCount: 0,
  },
];

const ChatScreen: React.FC<ChatScreenProps> = ({ navigation }) => {
  const renderChatItem = ({ item }: { item: Chat }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => {
        if (item.name === 'Jane Doe') {
          navigation.navigate('Message');
        }
      }}
    >
      <View style={styles.avatarContainer}>
        <Image source={item.avatar} style={styles.avatar} />
        {item.isOnline && <View style={styles.onlineIndicator} />}
      </View>
      <View style={styles.chatDetails}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.message}</Text>
      </View>
      <View style={styles.chatMeta}>
        <Text style={styles.time}>{item.time}</Text>
        {item.unreadCount > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{item.unreadCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chat</Text>
      </View>
      <FlatList
        data={chats}
        renderItem={renderChatItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ChatScreen;
