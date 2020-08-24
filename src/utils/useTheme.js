import { useState } from "react";
import day from '../styles/themes/day';
import night from '../styles/themes/night';

export default function useTheme() {
	const [ state, setState ] = useState(night);

	const getExactTime = (timeString) => new Date(timeString);

	const getTheme = (time, props) => {
		if (time < getExactTime(props.sunrise)) {
			return night;
		} else if (time < getExactTime(props.sunset)) {
			return day;
		} else {
			return night;
		}
	};

	const setTheme = (time, props) => {
		if (props)
			setState(getTheme(time, props))
	};
	return [state, setTheme];
}
