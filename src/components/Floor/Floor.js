import React from 'react';
import Window from '../Window/Window';
import { Container } from './styles';

export default function Floor(props) {
	return <Container>
		{props.lamps.map((lamp, i) => <Window key={i} { ...props } lamp={i} lampOn={lamp} />)}
	</Container>;
}