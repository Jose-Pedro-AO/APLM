import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#7AB2B2', // cor rosa chamativa para o header
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  map: {
    flex: 1,
  },
  stationIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  greeting: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 5,
  },
  question: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  searchButton: {
    marginLeft: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#7AB2B2', // cor rosa para o botão de pesquisa
    borderRadius: 10,
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  reserveButton: {
    backgroundColor: '#7AB2B2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  reserveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalCloseText: {
    color: '#555555',
    marginTop: 10,
    fontSize: 16,
  },
});

export default styles;
