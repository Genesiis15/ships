import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const Main = () => {
    return (
        <View style={styles.contentContainer}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 10.474891869400004,
                    longitude: -66.15988377528276,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default Main;