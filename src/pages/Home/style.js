import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Container = styled.aside`
	background-color: ${({ theme }) => theme.colors.background};
	width: 360px;
	height: 100vh;
	overflow-y: auto;
`;

export const Search = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #ffffff;
	padding: 16px;
`;

export const Img = styled.img`
	margin: 0 auto;
	margin-bottom: 15px;
	width: 166px;
`;

export const Map = styled.div`
	background-color: red;
	width: 500px;
`;

export const ModalTitle = styled.p`
	margin-bottom: 10px;
	letter-spacing: 0.11px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text};
	text-transform: none;
	line-height: 29px;
	font-size: 24px;
	font-weight: bold;
`;

export const ModalContent = styled.p`
	margin-bottom: 10px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text};
	line-height: 19px;
	font-size: 16px;
	font-weight: normal;
`;
