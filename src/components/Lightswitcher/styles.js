import styled from 'styled-components';

export const Toggle = styled.button`
	background-color: rgb(83,87,93);
	border: none;
	border-radius: 50%;
	cursor: pointer;
	padding: 10px;
	position: absolute;
	right: 20px;
	top: 20px;
`;

export const Icon = styled.i`
	display: block;
	height: 30px;
	position: relative;
	width: 30px;

	&:after, &:before {
		content: '';
		display: block;
	}

	&:before {
		border: 6px solid;
		border-color: ${props => props.isOn ? 'white' : 'rgb(37,37,37)'};
		border-top-color: transparent;
		border-radius: 50%;
		height: 100%;
		width: 100%;
	}

	&:after {
		background-color: ${props => props.isOn ? 'white' : 'rgb(37,37,37)'};
		height: 15px;
		left: 0;
		margin: 0 auto;
		position: absolute;
		right: 0;
		top: 0;
		width: 5px;
	}
`;

export const SrOnly = styled.span`
	border: 0;
	clip: rect(0,0,0,0);
	height: 1px;
	margin: 1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;