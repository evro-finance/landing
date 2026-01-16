'use client';

import { motion } from "motion/react";
import { useState } from 'react';

export default function AnimatedHeading() {
	const [text, setText] = useState({
		line1: 'AUTONOMOUS,',
		line2: 'OPEN SOURCE,',
		line3: 'VALUE.'
	});

	const animateTextChange = (line: 'line1' | 'line2' | 'line3', target: string, indices: number[]) => {
		indices.forEach((index, i) => {
			setTimeout(() => {
				setText(prev => ({
					...prev,
					[line]: target
				}));
			}, i * 150);
		});
	};

	const isVLetter = (char: string, line: string, index: number) => {
		if (char !== 'V') return false;
		if (line === text.line1 && text.line1 === 'AVTONOMOVS,') {
			return index === 1 || index === 8;
		}
		if (line === text.line2 && text.line2 === 'OPEN SOVRCE,') {
			return index === 7 || index === 10;
		}
		return false;
	};

	const onViewportEnter = () => {
		// Reset text
		setText({
			line1: 'AUTONOMOUS,',
			line2: 'OPEN SOURCE,',
			line3: 'VALUE.'
		});

		// Start animation after a short delay
		setTimeout(() => {
			animateTextChange('line1', 'AVTONOMOVS,', [1, 6, 7]);
			animateTextChange('line2', 'OPEN SOVRCE,', [7, 10]);
		}, 500);
	};

	return (
		<motion.h1
			className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-8 leading-tight -tracking-[0.16em]"
			aria-label="Autonomous, Open Source, Value."
			onViewportEnter={onViewportEnter}
			viewport={{ once: false, amount: 0.5 }}
		>
			<span className="inline-block" aria-hidden="true">
				{text.line1.split('').map((char, i) => (
					<span
						key={`${text.line1}-${i}`}
						className={`inline-block transition-all duration-500 ${(text.line1 === 'AVTONOMOVS,' && (i === 1 || i === 8))
							? 'animate-[letterMorph_0.3s_ease-in-out]'
							: ''
							} ${isVLetter(char, text.line1, i) ? 'text-[#F55874]' : ''}`}
					>
						{char === ' ' ? '\u00A0' : char}
					</span>
				))}
			</span>
			<br />
			<span className="inline-block" aria-hidden="true">
				{text.line2.split('').map((char, i) => (
					<span
						key={`${text.line2}-${i}`}
						className={`inline-block transition-all duration-500 ${(text.line2 === 'OPEN SOVRCE,' && (i === 7 || i === 10))
							? 'animate-[letterMorph_0.3s_ease-in-out]'
							: ''
							} ${isVLetter(char, text.line2, i) ? 'text-[#F55874]' : ''}`}
					>
						{char === ' ' ? '\u00A0' : char}
					</span>
				))}
			</span>
			<br />
			<span aria-hidden="true">{text.line3}</span>
		</motion.h1>
	);
}
