import type { Metadata, Viewport } from "next";
import { Oswald, Lexend_Zetta } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
	variable: "--font-oswald",
	subsets: ["latin"],
});

const lexendZetta = Lexend_Zetta({
	variable: "--font-lexend-zetta",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.evro.finance"),
	title: "EVRO",
	description: "An open-source protocol that maintains synthetic value units through fully decentralized smart-contract mechanics.",
	openGraph: {
		url: "https://www.evro.finance/",
		type: "website",
		title: "EVRO",
		description: "An open-source protocol that maintains synthetic value units through fully decentralized smart-contract mechanics.",
		images: [
			{
				url: "https://opengraph.b-cdn.net/production/images/16ffb740-ca48-493d-a677-731c82273a35.png?token=jijjvjEDRCZwBMk6yWXRiMEg6rJBfl0rS5ixeBUIzkg&height=630&width=1200&expires=33298877443",
				width: 1200,
				height: 630,
				alt: "EVRO Protocol",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "EVRO",
		description: "An open-source protocol that maintains synthetic value units through fully decentralized smart-contract mechanics.",
		images: ["https://opengraph.b-cdn.net/production/images/16ffb740-ca48-493d-a677-731c82273a35.png?token=jijjvjEDRCZwBMk6yWXRiMEg6rJBfl0rS5ixeBUIzkg&height=630&width=1200&expires=33298877443"],
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	viewportFit: "cover",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${oswald.variable} ${lexendZetta.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}