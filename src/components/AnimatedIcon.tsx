'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface AnimatedIconProps {
	src: string;
	alt: string;
	width: number;
	height: number;
	className?: string;
	containerClassName?: string;
}

export default function AnimatedIcon({
	src,
	alt,
	width,
	height,
	className,
	containerClassName,
}: AnimatedIconProps) {
	const [isVisible, setIsVisible] = useState(false);
	const iconRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -50px 0px',
			}
		);

		if (iconRef.current) {
			observer.observe(iconRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div
			ref={iconRef}
			className={containerClassName}
		>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className={`${className} ${isVisible ? 'animate-pop-up' : 'opacity-0 scale-0'}`}
				aria-hidden="true"
			/>
		</div>
	);
}

