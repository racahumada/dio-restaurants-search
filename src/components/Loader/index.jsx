import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/restaurants-loading.json';

export default function Loader() {
	const defaultoptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return <Lottie options={defaultoptions} />;
}
