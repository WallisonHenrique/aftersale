import { useState } from "react";
import astronomicaldawn from '../styles/themes/astronomicaldawn';
import nauticaldawn from '../styles/themes/nauticaldawn';
import civildawn from '../styles/themes/civildawn';
import day from '../styles/themes/day';
import noon from '../styles/themes/noon';
import night from '../styles/themes/night';
import astronomicaldusk from '../styles/themes/astronomicaldusk';
import nauticaldusk from '../styles/themes/nauticaldusk';
import civildusk from '../styles/themes/civildusk';
import sunset from '../styles/themes/sunset';


export default function useTheme() {
	const [ state, setState ] = useState(night);

	const getExactTime = (timeString) => new Date(timeString);

	const setMinutes = (timer, num) => {
		let minutes = timer.getMinutes();
		minutes += num;
		const newTimer = timer.setMinutes(minutes);
		return new Date(newTimer);
	}

	const getTheme = (time, props) => {
		if (time < getExactTime(props.astronomical_twilight_begin))
			return night;
		else if (time < getExactTime(props.nautical_twilight_begin))
			return astronomicaldawn;
		else if (time < getExactTime(props.civil_twilight_begin))
			return nauticaldawn;
		else if (time < getExactTime(props.sunrise))
			return civildawn;
		else if (time < getExactTime(props.solar_noon))
			return day;
		else if (time < getExactTime(props.sunset))
			return noon;
		else if (time < getExactTime(props.civil_twilight_end))
			return sunset;
		else if (time < getExactTime(props.nautical_twilight_end))
			return civildusk;
		else if (time < getExactTime(props.astronomical_twilight_end))
			return nauticaldusk;
		else if ( time < setMinutes(getExactTime(props.astronomical_twilight_end), 20) )
			return astronomicaldusk;
		else
			return night;
	};

	const setTheme = (time, props) => {
		if (props)
			setState(getTheme(time, props))
	};
	return [state, setTheme];
}
