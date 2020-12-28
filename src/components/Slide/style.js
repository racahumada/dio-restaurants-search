import styled from 'styled-components';
import Slider from 'react-slick';

export const Carousel = styled(Slider)`
	.slick-slide {
		margin-right: 16px;
	}
`;

export const CarouselTitle = styled.h1`
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text};
	font-size: 24px;
	font-weight: bold;
	line-height: 29px;
	margin: 16px 0;
`;
