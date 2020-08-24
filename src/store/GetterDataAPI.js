import { DataTypes } from "./Types";

export default function GetterDataAPI(props) {
	const geoSucess = (position) => {
		const data = { 
			params: { lat: position.coords.latitude, lng: position.coords.longitude, formatted:0 }
		};

		if (!props.sunrisesunset) {
			props.loadData(DataTypes.SUNRISESUNSET, data);
		}
	}
	
	const geoError = (error) => console.log(error);

	if ('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition(geoSucess, geoError);
	}
	
	return(props.children);
}
