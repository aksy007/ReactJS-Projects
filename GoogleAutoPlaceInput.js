import React,{useEffect,useRef} from 'react'
import {View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GoogleAutoPlaceInput = ({region,setRegion,address})=>{
	
	const ref = useRef(null);
	useEffect(() =>{
		ref.current?.setAddressText(address);
	}, [address]);
	return(
        <View>
			<GooglePlacesAutocomplete
				placeholder="Search"
				fetchDetails={true}
				debounce={200}
				enablePoweredByContainer={false}
				ref = {ref}
				fetchDetails={true}
				onPress={(data, details = null) => {
					setRegion({
						latitude: details.geometry.location.lat,
						longitude: details.geometry.location.lng,
						latitudeDelta: 0.03,
						longitudeDelta: 0.03
					})
				}}
				query={{
					key: "AIzaSyCRcN1O98kgHCWpXsVTOQ917Nl7Wsr8Sho",
					language: "en",
					components: "country:in",
					location: `${region.latitude}, ${region.longitude}`
				}}
				styles={{
					container: {flex:0,width: "100%"},
					textInput: {backgroundColor: '#FFF',},
				}}
			>
			</GooglePlacesAutocomplete>
        </View>
    )
}
export default GoogleAutoPlaceInput;
