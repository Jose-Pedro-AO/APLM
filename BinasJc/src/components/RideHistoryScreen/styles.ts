import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F5F5F5',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  rideCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  bikeImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 15,
  },
  rideInfo: {
    flex: 1,
  },
  bikeModel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  rideDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  rideDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rideDetailText: {
    fontSize: 12,
    color: '#666',
  },
  rateButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  rateButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
