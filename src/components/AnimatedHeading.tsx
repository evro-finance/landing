'use client';

import { useEffect, useState } from 'react';

export default function AnimatedHeading() {
	const [text, setText] = useState({
		line1: 'AUTONOMOUS,',
		line2: 'OPEN SOURCE,',
		line3: 'VALUE.'
	});

	useEffect(() => {
		// Animate letter by letter transformation after initial render
		const timer = setTimeout(() => {
			// Transform AUTONOMOUS -> AVTONOMOVS
			animateTextChange('line1', 'AUTONOMOUS,', 'AVTONOMOVS,', [1, 6, 7]);
			// Transform SOURCE -> SOVRCE
			animateTextChange('line2', 'OPEN SOURCE,', 'OPEN SOVRCE,', [10, 12]);
		}, 500);

		return () => clearTimeout(timer);
	}, []);

	const animateTextChange = (line: 'line1' | 'line2' | 'line3', original: string, target: string, indices: number[]) => {
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
		// Check if this V is in a transformed position
		if (line === text.line1 && text.line1 === 'AVTONOMOVS,') {
			return index === 1 || index === 8; // A[V]TONOMO[V]S
		}
		if (line === text.line2 && text.line2 === 'OPEN SOVRCE,') {
			return index === 7 || index === 10; // OPEN SO[V]RCE (index 7) and SOU[V]CE (index 10)
		}
		return false;
	};

	return (
		<h1
			className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-[-0.2em] text-gray-900 mb-6 sm:mb-8 leading-tight"
			aria-label="Autonomous, Open Source, Value."
		>
			<span className="inline-block" aria-hidden="true">
				{text.line1.split('').map((char, i) => (
					<span
						key={i}
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
						key={i}
						className={`inline-block transition-all duration-500 ${(text.line2 === 'OPEN SOVRCE,' && i === 7)
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
		</h1>
	);
}