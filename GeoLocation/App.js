import React,{useState,useEffect} from 'react';
import { StyleSheet,View, Button, } from 'react-native';
import GoogleAutoPlaceInput from './GoogleAutoPlaceInput';
import Map from './Map';
import * as Location from 'expo-location';

export default function App() {
  const [currentLocation,setCurrentLocation] = useState({
    latitude:'',
    longitude:'',
  });
  const [address,setAddress] = useState('');
  const [region, setRegion ] = React.useState({
		latitude: 28.7041,
		longitude: 77.1025,
		latitudeDelta: 0.03,
		longitudeDelta: 0.03,
	});
  
  //Current Location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);
  
  return (
    <View style={styles.container}>
      <GoogleAutoPlaceInput
        region={region}
        setRegion={setRegion} 
        address={address}
      />
      <Map 
        region={region} 
        setRegion={setRegion} 
        address={address} 
        setAddress={setAddress} 
        currentLocation={currentLocation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
  },
});
