import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -8.839987, // Latitude de Luanda, por exemplo
          longitude: 13.289437,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        
        <Marker
          coordinate={{ latitude: -8.839987, longitude: 13.289437 }}
          title="Localização Inicial"
          description="Descrição do local"
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
