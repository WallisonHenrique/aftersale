import React from 'react';
import { Toggle, Icon, SrOnly } from './styles';
import { DataTypes } from '../../store/Types';

export default function Lightswitcher(props) {
	const handleLightSwitcher = () => {
		const data = !props.switcher
		props.setSwitcher(data);
		props.setLamps(data);
		props.loadLampson(DataTypes.LAMPSON);
	}

	return <Toggle type="button" onClick={handleLightSwitcher}>
		<Icon isOn={props.switcher} />
		<SrOnly>Liga/desliga lâmpadas</SrOnly>
	</Toggle>
}