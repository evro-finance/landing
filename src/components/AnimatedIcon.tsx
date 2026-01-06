'use client';

import { motion } from "motion/react";
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
	return (
		<div className={containerClassName}>
			<motion.div
				initial={{ scale: 0, opacity: 0, y: 20 }}
				whileInView={{ scale: 1, opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ 
					duration: 0.6, 
					ease: [0.34, 1.56, 0.64, 1] // elastic
				}}
			>
				<Image
					src={src}
					alt={alt}
					width={width}
					height={height}
					className={className}
					aria-hidden="true"
				/>
			</motion.div>
		</div>
	);
}
