import React, { useEffect } from 'react';
import { Card, Title } from './style';
import { useState } from 'react';
import { Skeleton } from '../../components';

export default function ImageCard({ photo, title }) {
	const [imageLoaded, setImageLoaded] = useState(false);
	useEffect(() => {
		const imageloader = new Image();
		imageloader.src = photo;
		imageloader.onload = () => setImageLoaded(true);
	}, [photo]);

	return (
		<>
			{imageLoaded ? (
				<Card photo={photo}>
					<Title>{title}</Title>
				</Card>
			) : (
				<Skeleton width="90px" height="90px" />
			)}
		</>
	);
}
