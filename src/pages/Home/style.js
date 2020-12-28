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
