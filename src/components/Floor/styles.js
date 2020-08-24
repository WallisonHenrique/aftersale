import styled from 'styled-components';

export const Container = styled.div`
	background-color: ${props => props.theme.colors.facade};
	display: flex;
	justify-content: center;
	margin: 0 10px;
	padding: 20px;
	transition: background-color 600ms;
	
	& > div {
		flex: 25%;
		margin: 0 10px;

		&:first-child {
			margin-left: 0;
		}

		&:last-child {
			margin-right: 0;
		}
	}
`;