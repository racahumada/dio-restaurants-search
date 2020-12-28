import styled from 'styled-components';

export const Restaurant = styled.div`
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	margin-top: 5px;
	padding: 16px;
	background-color: #ffffff;
	border-left: 5px solid transparent;
	:hover {
		background-color: ${({ theme }) => theme.colors.background};
		border-left-color: ${({ theme }) => theme.colors.primary};
	}
`;

export const RestaurantInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Title = styled.span`
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text};
	font-size: 24px;
	font-weight: bold;
	line-height: 29px;
	margin-bottom: 10px;
`;

export const Address = styled.span`
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text};
	font-size: 16px;
	line-height: 19px;
	margin-bottom: 10px;
	margin-top: 10px;
`;

export const RestaurantPhoto = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 6px;
	object-fit: cover;
`;