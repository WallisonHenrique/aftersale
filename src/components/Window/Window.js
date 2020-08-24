import React, { useEffect } from 'react';
import { Container, Frame, Illumination } from './styles';
import { DataTypes } from '../../store/Types';

export default function Window(props) {
	const { floor, lamp, lampOn } = props;

	const handleLightSwitch = () => {
		props.setLamp(floor, lamp, !lampOn);
		props.loadLampson(DataTypes.LAMPSON);
	};

	useEffect(() => {
		if (props.lampson) {
			const { count, total } = props.lampson;
			if (count === total)
				props.setSwitcher(true);
			if (count === 0)
				props.setSwitcher(false);
		}
	},[props.lampOn])

	return <Container onClick={ handleLightSwitch }>
		{ lampOn && <Illumination />}
		<Frame />
	</Container>;
}