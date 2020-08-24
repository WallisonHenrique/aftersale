import React, { useEffect } from "react";
import { ThemeProvider } from 'styled-components';
import useTheme from '../../utils/useTheme';
import { DataTypes } from '../../store/Types';

import Building from '../Building/Building';
import Sky from '../Sky/Sky';
import Lightswitcher from '../Lightswitcher/Lightswitcher';

export default function Scene(props) {
	const [theme, setTheme] = useTheme();
	const getCurrentTime = () => new Date();

	const daylamps = [
		[false, false, false],
		[false, false, false],
		[false, false, false],
		[false, false, false]
	];

	const nightlamps = [
		[false, false, true],
		[true, true, false],
		[false, true, false],
		[true, true, false]
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setTheme(getCurrentTime(), props.sunrisesunset);
		}, 1000);
		return () => clearInterval(timer);
	});

	useEffect(() => {
		props.setSwitcher(false);
		if (theme.title === "day")
			props.loadLamps(DataTypes.LAMPS, daylamps);
		else
			props.loadLamps(DataTypes.LAMPS, nightlamps);
	},[theme]);

	return (
		<ThemeProvider theme={theme}>
			<Lightswitcher { ...props } />
	    	<Sky />
	  		<Building 
		  		lamps={props.lamps} 
		  		lampson={props.lampson} 
		  		setLamp={props.setLamp} 
		  		loadLampson={props.loadLampson} 
		  		setSwitcher={props.setSwitcher} />
		</ThemeProvider>
	);
}
