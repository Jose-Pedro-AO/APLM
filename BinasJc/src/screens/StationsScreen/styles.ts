// src/screens/StationsScreen/styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F3F4F6',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchInput: {
    height: 45,
    borderColor: '#7AB2B2',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    color: '#333',
    marginBottom: 20,
  },
  stationItem: {
    padding: 15,
    backgroundColor: '#ffffff',
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  stationName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A4A4A',
  },
  stationLocation: {
    fontSize: 14,
    color: '#7A7A7A',
    marginTop: 4,
  },
  mapButton: {
    marginTop: 10,
    backgroundColor: '#7AB2B2',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  mapButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default styles;
