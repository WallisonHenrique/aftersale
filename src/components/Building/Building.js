import React from 'react';
import Floor from '../Floor/Floor';
import { Container } from './styles';

export default function Building(props) {
	const lamps = props.lamps || [];
	return <Container>
		{lamps.map((lamps, i) => <Floor key={i} { ...props } floor={i} lamps={lamps} />)}
	</Container>;
}