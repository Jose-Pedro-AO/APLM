import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#4A4A4A',
  },
  bikeInfoContainer: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  bikeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A4A4A',
    marginBottom: 5,
  },
  bikeImage: {
    width: 120,
    height: 70,
    marginVertical: 10,
  },
  calorieText: {
    fontSize: 14,
    color: '#27AE60',
    marginTop: 5,
    fontWeight: '600',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 12,
    color: '#7D7D7D',
    marginTop: 5,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D2D2D',
  },
  locationContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
    marginBottom: 5,
  },
  locationText: {
    fontSize: 14,
    color: '#4A4A4A',
    marginBottom: 5,
  },
  timeText: {
    fontSize: 12,
    color: '#9A9A9A',
    marginBottom: 10,
  },
  rateButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  rateButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  experienceContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  experienceText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#7D7D7D',
    marginBottom: 20,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cancelButtonText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
