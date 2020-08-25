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

	useEffect(() => {
		const timer = setInterval(() => {
			setTheme(getCurrentTime(), props.sunrisesunset);
		}, 1000);
		return () => clearInterval(timer);
	});

	const getLights = () => {
		const daylamps = [
			[false, false, false],
			[false, false, false],
			[false, false, false],
			[false, false, false]
		];

		const partiallamps = [
			[true, false, false],
			[false, false, false],
			[false, false, false],
			[false, true, true]
		];

		const nightlamps = [
			[false, false, true],
			[true, true, false],
			[false, true, false],
			[true, true, false]
		];

		switch(theme.title) {
			case "nauticaldawn":
				return partiallamps;
			case "civildawn":
				return partiallamps;
			case "day":
				return daylamps;
			case "noon":
				return daylamps;
			case "sunset":
				return partiallamps;
			case "civildusk":
				return partiallamps;
			case "nauticaldusk":
				return partiallamps;
			case "astronomicaldusk":
				return nightlamps;
			default: 
				return nightlamps; 
		}
	}

	useEffect(() => {
		props.setSwitcher(false);
		props.loadLamps(DataTypes.LAMPS, getLights());
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
