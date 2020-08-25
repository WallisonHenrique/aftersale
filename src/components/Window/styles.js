import styled from 'styled-components';

export const Container = styled.div`
	background-color: #414257;
	display: inline-block;
	height: 55px;
	position: relative;
	width: 40px;
`;

export const Frame = styled.div`
	border: 2px solid;
	border-color: ${props => props.theme.colors.frame};
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;

	:after, :before {
		content: "";
		background-color: ${props => props.theme.colors.frame};
		position: absolute;
	}

	:before {
		height: 100%;
		left: 0;
		margin: 0 auto;
		right: 0;
		width: 2px;
	}

	:after {
		bottom: 0;
		height: 2px;
		margin: auto 0;
		top: 0;
		width: 100%;
	}
`;

export const Illumination = styled.div`
	background-color: ${props => props.theme.colors.illumination};
	box-shadow: ${props => props.theme.colors.shine};
	height: 100%;
	width: 100%;
`;