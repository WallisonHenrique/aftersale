import styled from 'styled-components';

export const Container = styled.div`
	background: ${props => props.theme.colors.sky};
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: -1;
`;