import React,{useState,useEffect} from 'react'
import { Dimensions,StyleSheet,Text, View, Button } from 'react-native'
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import Geocoder from 'react-native-geocoding';

const Map = ({region,setRegion,address,setAddress,currentLocation}) => {
    
    const [locBtn,setLocBtn] = useState({
        marginBootom:1
    });

	useEffect(()=>{
		if(currentLocation.latitude!=='')
		{
		  setRegion({
			latitude: currentLocation.latitude,
			longitude: currentLocation.longitude,
			latitudeDelta: 0.03,
			longitudeDelta: 0.03 
		  })
		}
	  },[])

    useEffect(()=>{
		Geocoder.init("AIzaSyCRcN1O98kgHCWpXsVTOQ917Nl7Wsr8Sho");
		Geocoder.from(region.latitude, region.longitude)
		.then(json => {
        	let addressComponent = json.results[0].formatted_address;
			let splitAddress = addressComponent.split(',');
            let address = splitAddress[1]+','+splitAddress[2]+','+splitAddress[3];
			//console.log(address)
            setAddress(address);
		})
		.catch(error => console.warn(error));
	},[region.latitude,region.longitude]);
    
	

    return (
        <View style={{flex: 0}}>	
			<MapView
				style={[styles.map,{marginBottom:locBtn.marginBootom}]}
				provider="google"
				initialRegion={region}
				region={region}
				showsUserLocation={true}
				showsMyLocationButton={true}
				onMapReady ={()=> setLocBtn({marginBootom:0})}
			> 
				<Marker
					coordinate={region}
					draggable={true}    	
					onDragEnd={(e) => {
						setRegion({
							latitude: e.nativeEvent.coordinate.latitude,
							longitude: e.nativeEvent.coordinate.longitude,				
							latitudeDelta: 0.02,
							longitudeDelta: 0.02
						})
					}}
				>
					<Callout>
						<Text>{address}</Text>
					</Callout>
				</Marker>
				<Circle center={region} radius={300}/>
			</MapView>
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
})
