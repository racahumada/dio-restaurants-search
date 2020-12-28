import styled from 'styled-components';

export const Card = styled.div`
	width: 90px;
	height: 90px;
	border-radius: 6px;
	background-image: url(${({ photo }) => photo});
	background-size: cover;
	padding: 5px;
`;

export const Title = styled.p`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: 14px;
	color: #ffffff;
`;
