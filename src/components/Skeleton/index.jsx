import React from 'react';
import { LoadingSkeleton } from './style';

export default function Skeleton({ width, height }) {
	return <LoadingSkeleton width={width} height={height} />;
}
