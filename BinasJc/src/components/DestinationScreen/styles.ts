import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
    backgroundColor: '#FFF8F0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF69B4',
    textAlign: 'center',
  },
  currentLocationContainer: {
    marginBottom: 15,
  },
  locationText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  chooseDestinationContainer: {
    marginBottom: 20,
  },
  stationSelector: {
    flexDirection: 'row',
  },
  stationItem: {
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#E6E6FA',
  },
  selectedStation: {
    backgroundColor: '#E6E6FA',
    borderColor: '#FF69B4',
  },
  stationName: {
    color: '#333',
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#FF69B4',
    marginVertical: 15,
  },
  confirmButton: {
    padding: 15,
    backgroundColor: '#FF69B4',
    borderRadius: 10,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  destinationText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
