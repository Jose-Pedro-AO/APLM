import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2', // Fundo claro do aplicativo
  },
  header: {
    height: 60,
    backgroundColor: '#7AB2B2', // Cor principal para o cabeçalho
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  backButton: {
    color: 'white',
    fontSize: 24,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  options: {
    color: 'white',
    fontSize: 24,
  },
  chatArea: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  messageContainerSent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
  },
  receivedMessage: {
    backgroundColor: '#A9DFD8', // Variação mais suave da cor principal para mensagens recebidas
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    borderTopLeftRadius: 0,
  },
  sentMessage: {
    backgroundColor: '#D4E6E7', // Cinza suave com um toque de azul claro
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    borderTopRightRadius: 0,
  },
  timestamp: {
    fontSize: 10,
    color: '#555',
    textAlign: 'right',
    marginTop: 5,
  },
  inputArea: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    paddingBottom: 40,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: '#F9F9F9',
    fontSize: 16,
    color: '#333',
  },
  sendPointsButton: {
    marginLeft: 12,
    backgroundColor: '#7AB2B2',
    borderRadius: 25,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sendPointsText: {
    fontSize: 18,
    color: '#FFF',
  },
  sendButton: {
    marginLeft: 12,
    backgroundColor: '#7AB2B2',
    borderRadius: 25,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sendButtonText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
});
