import React from 'react';
import { useSelector } from 'react-redux';
import { Carousel, CarouselTitle } from './style';

import imgRestaurant from '../../assets/restaurante-fake.png';
import { ImageCard } from '../index';

export default function Slides() {
	const { restaurants } = useSelector((state) => state.restaurants);

	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		adaptiveHeight: true,
	};

	return (
		<>
			<CarouselTitle>Na sua Área</CarouselTitle>
			<Carousel {...settings}>
				{restaurants.map((restaurant) => (
					<ImageCard
						key={restaurant.place_id}
						photo={restaurant.photos ? restaurant.photos[0].getUrl() : imgRestaurant}
						title={restaurant.name}
					/>
				))}
			</Carousel>
		</>
	);
}
