import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#7AB2B2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: '#555',
  },
  editButton: {
    padding: 12,
    backgroundColor: '#E8F4FA',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#7AB2B2',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#F0F4F8',
    shadowColor: '#000',
    elevation: 5,
  },
  statBox: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 10,
    color: '#7AB2B2',
    fontWeight: 'bold',
    marginTop: 3,
  },
  statText: {
    fontSize: 12,
    color: '#333',
    marginTop: 2,
  },
  statIcon: {
    width: 25,
    height: 25,
    marginBottom: 5,
    tintColor: '#7AB2B2', // Cor de destaque para ícones
  },
  menuContainer: {
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderStartStartRadius: 12,
    borderStartEndRadius: 12,
    elevation: 5,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  menuText: {
    fontSize: 16,
    marginLeft: 18,
    color: '#333',
  },
  logoutItem: {
    borderTopWidth: 1,
    borderTopColor: '#EDEDED',
  },
  logoutText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default styles;
