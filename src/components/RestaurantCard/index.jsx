import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './style';

import imgRestaurant from '../../assets/restaurante-fake.png';
import { Skeleton } from '../../components';

export default function RestaurantCard({ restaurant, onClick }) {
	const [imageLoaded, setImageLoaded] = useState(false);

	return (
		<Restaurant onClick={onClick}>
			<RestaurantInfo>
				<Title>{restaurant.name}</Title>
				<ReactStars count={5} value={restaurant.rating} edit={false} isHalf activeColor="#e7711c" />
				<Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
			</RestaurantInfo>
			<RestaurantPhoto
				imageLoaded={imageLoaded}
				src={restaurant.photos ? restaurant.photos[0].getUrl() : imgRestaurant}
				onLoad={() => setImageLoaded(true)}
				alt="Foto Restaurante"
			/>
			{!imageLoaded && <Skeleton width="100px" height="100px" />}
		</Restaurant>
	);
}
