import React from 'react';
import { Carousel, CarouselTitle } from './style';

import imgRestaurant from '../../assets/restaurante-fake.png';
import { ImageCard } from '../index';

export default function Slides() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		adaptiveHeight: true,
	};

	return (
		<>
			<CarouselTitle>Na sua Área</CarouselTitle>
			<Carousel {...settings}>
				<ImageCard photo={imgRestaurant} title="Nome do Restaurant" />
				<ImageCard photo={imgRestaurant} title="Nome do Restaurant" />
				<ImageCard photo={imgRestaurant} title="Nome do Restaurant" />
				<ImageCard photo={imgRestaurant} title="Nome do Restaurant" />
				<ImageCard photo={imgRestaurant} title="Nome do Restaurant" />
				<ImageCard photo={imgRestaurant} title="Nome do Restaurant" />
				<ImageCard photo={imgRestaurant} title="Nome do Restaurant" />
				<ImageCard photo={imgRestaurant} title="Nome do Restaurant" />
				<ImageCard photo={imgRestaurant} title="Nome do Restaurant" />
				<ImageCard photo={imgRestaurant} title="Nome do Restaurant" />
			</Carousel>
		</>
	);
}
