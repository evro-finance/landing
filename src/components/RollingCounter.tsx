'use client';

import { motion, useSpring, useTransform, useMotionValue, useInView } from "motion/react";
import { useEffect, useRef } from "react";

interface RollingCounterProps {
	value: string; // e.g., "1.2M", "8.7K", "75%"
	className?: string;
}

export default function RollingCounter({ value, className }: RollingCounterProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	// Extract number and suffix
	const match = value.match(/^([\d.]+)([A-Z%]*)$/);
	const targetValue = match ? parseFloat(match[1]) : 0;
	const suffix = match ? match[2] : "";

	const count = useMotionValue(0);
	const rounded = useSpring(count, {
		stiffness: 50,
		damping: 20,
		restDelta: 0.001
	});

	const displayValue = useTransform(rounded, (latest) => {
		// Formatting logic
		const formatted = latest.toFixed(targetValue % 1 === 0 ? 0 : 1);
		return `${formatted}${suffix}`;
	});

	useEffect(() => {
		if (isInView) {
			count.set(targetValue);
		}
	}, [isInView, count, targetValue]);

	return (
		<motion.div ref={ref} className={className}>
			{displayValue}
		</motion.div>
	);
}

