import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './style';

import imgRestaurant from '../../assets/restaurante-fake.png';

export default function RestaurantCard() {
	return (
		<Restaurant>
			<RestaurantInfo>
				<Title>Nome do Restaurante</Title>
				<ReactStars count={5} value={4} edit={false} isHalf activeColor="#e7711c" />
				<Address>Rua Rio de Janeiro, 120</Address>
			</RestaurantInfo>
			<RestaurantPhoto src={imgRestaurant} alt="Foto Restaurante" />
		</Restaurant>
	);
}
