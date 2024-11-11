import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  infoContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  bikeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bikeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  bikeRange: {
    fontSize: 14,
    color: '#555',
  },
  bikeDetails: {
    fontSize: 16,
    color: '#333',
  },
  bikeImage: {
    width: 80,
    height: 50,
    resizeMode: 'contain',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
  },
  statValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  pauseButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  endButton: {
    backgroundColor: '#7AB2B2',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
