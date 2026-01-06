import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaTelegram } from "react-icons/fa";

export const metadata: Metadata = {
	title: "Privacy Policy | EVRO",
	description: "Privacy Policy for EVRO DAO LLC and the evro.finance website.",
};

export default function PrivacyPolicy() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Skip to content link */}
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-[#F5889B] focus:outline-2 focus:outline-[#F5889B] focus:outline-offset-2 rounded"
			>
				Skip to content
			</a>

			<nav className="sticky top-0 z-50 py-4 md:py-6 bg-[#E7E1F1]/90 backdrop-blur-sm border-b border-[#E7E1F1]">
				<div className="flex items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
					<div className="flex items-center">
						<Link href="/">
							<Image
								src="/assets/Evro-Logo-wordmark.svg"
								height={80}
								width={200}
								alt="Evro Logo"
								className="w-16 xl:w-20 h-auto"
								priority
							/>
						</Link>
					</div>
					<div className="flex items-center gap-3 md:gap-4 z-20">
						<Link
							href="https://github.com/evro-finance"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="View EVRO on GitHub"
							className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-2 xl:px-4 xl:py-2.5 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-900"
						>
							<FaGithub className="size-3.5 md:size-4 xl:size-5" />
							<span className="text-xs md:text-xs xl:text-sm font-medium">GitHub</span>
						</Link>
						<Link
							href="https://t.me/+hofgAYWLewFmM2Zi"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Join EVRO DAO on Telegram"
							className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-2 xl:px-4 xl:py-2.5 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-900"
						>
							<FaTelegram className="size-3.5 md:size-4 xl:size-5" />
							<span className="text-xs md:text-xs xl:text-sm font-medium">Telegram</span>
						</Link>
					</div>
				</div>
			</nav>

			<main id="main-content" className="flex-grow bg-[#E7E1F1] noise-texture mix-blend-luminosity">
				<div className="max-w-4xl mx-auto py-12 md:py-16 xl:py-20 px-4 md:px-8 relative z-10">
					<article className="prose prose-lg max-w-none">
						<h1 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mb-8 uppercase">
							Privacy Policy
						</h1>

						<section className="mb-12">
							<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mt-12 mb-6 uppercase">
								Scope
							</h2>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
								This privacy policy (&ldquo;Privacy Policy&rdquo;) applies to the access and use of the website <Link href="https://www.evro.finance" className="font-bold hover:text-[#F5889B] transition-colors">www.evro.finance</Link> and <Link href="https://www.app.evro.finance" className="font-bold hover:text-[#F5889B] transition-colors">www.app.evro.finance</Link> (including all subdomains, the &ldquo;Website&rdquo;), provided by <b className="font-bold">Evro DAO LLC</b>, a DAO LLC incorporated in the Cayman Islands (&ldquo;Evro DAO LLC&rdquo;).
							</p>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed">
								This Privacy Policy explains how Evro DAO LLC collects and processes information in connection with the use of the Website.
							</p>
						</section>

						<hr className="border-gray-300 mb-12" />

						<section className="mb-12">
							<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mt-12 mb-6 uppercase">
								Personal data
							</h2>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
								Evro DAO LLC does not require Users to provide any personal data in order to access or use the Website.
							</p>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed">
								Evro DAO LLC does not knowingly collect personal data such as names, postal addresses, email addresses, or other information that directly identifies a User, unless such data is voluntarily provided by the User (for example, when contacting Evro DAO LLC).
							</p>
						</section>

						<hr className="border-gray-300 mb-12" />

						<section className="mb-12">
							<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mt-12 mb-6 uppercase">
								Automatically collected data
							</h2>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
								When Users access the Website, certain information may be collected automatically, including but not limited to:
							</p>
							<ul className="list-disc list-inside space-y-2 mb-6 text-lg md:text-xl font-light text-gray-900">
								<li>IP address</li>
								<li>Browser type and version</li>
								<li>Operating system</li>
								<li>Referrer URL</li>
								<li>Date and time of access</li>
								<li>Pages visited and interactions with the Website</li>
							</ul>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed">
								This data is processed solely for technical, security, and statistical purposes, including ensuring the proper functioning and improvement of the Website.
							</p>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mt-12 mb-6 uppercase">
								Cookies
							</h2>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
								The Website may use cookies or similar technologies to ensure basic functionality and to analyze usage of the Website.
							</p>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed">
								Cookies are small text files stored on a User&rsquo;s device. Users may disable cookies through their browser settings. Disabling cookies may affect the functionality of the Website.
							</p>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mt-12 mb-6 uppercase">
								Use of third-party services
							</h2>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
								The Website may use third-party services, such as analytics providers, to better understand how Users interact with the Website.
							</p>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed">
								Such third-party service providers may process information in accordance with their own privacy policies. Evro DAO LLC does not control and is not responsible for the data processing practices of such third parties.
							</p>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mt-12 mb-6 uppercase">
								Use of data
							</h2>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
								Any information collected by Evro DAO LLC is used solely for the following purposes:
							</p>
							<ul className="list-disc list-inside space-y-2 mb-6 text-lg md:text-xl font-light text-gray-900">
								<li>Operating and maintaining the Website</li>
								<li>Ensuring security and preventing abuse</li>
								<li>Analyzing usage and improving the Website</li>
							</ul>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed">
								Evro DAO LLC does not sell personal data.
							</p>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mt-12 mb-6 uppercase">
								Data retention
							</h2>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed">
								Automatically collected data is retained only for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by applicable law.
							</p>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mt-12 mb-6 uppercase">
								External websites
							</h2>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
								The Website may contain links to third-party websites. This Privacy Policy does not apply to such third-party websites.
							</p>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed">
								Evro DAO LLC is not responsible for the content or privacy practices of external websites.
							</p>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mt-12 mb-6 uppercase">
								Data security
							</h2>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
								Evro DAO LLC implements reasonable technical and organizational measures to protect information processed through the Website.
							</p>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed">
								However, no method of transmission over the internet or method of electronic storage is completely secure. Evro DAO LLC cannot guarantee absolute security.
							</p>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mt-12 mb-6 uppercase">
								Changes to this Privacy Policy
							</h2>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
								Evro DAO LLC may update this Privacy Policy from time to time by publishing an updated version on the Website.
							</p>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed">
								Users are encouraged to review this Privacy Policy regularly. Continued use of the Website following any changes constitutes acceptance of such changes.
							</p>
						</section>
					</article>
				</div>
			</main>

			<footer className="bg-[#757BA3] px-2 py-8 md:px-25 lg:px-20">
				<div className="w-full aspect-2058/544 relative overflow-visible max-w-[2000px] max-h-[650px] mx-auto">
					<img
						src="/assets/evro-large.webp"
						alt="Detailed EVRO logo."
						className="w-full h-full object-contain mix-blend-color-dodge opacity-33 hover:opacity-100 transition-opacity duration-300"
					/>
				</div>
				<div className="max-w-[2000px] mx-auto text-center space-y-6">
					<div className="flex flex-wrap gap-4 md:gap-8 justify-center items-center">
						<Link href="/privacy-policy" className="text-gray-800 hover:text-[#F5889B] font-medium transition-colors uppercase font-lexend-zetta text-sm md:text-base">
							Privacy Policy
						</Link>
						<Link href="/terms-of-service" className="text-gray-800 hover:text-[#F5889B] font-medium transition-colors uppercase font-lexend-zetta text-sm md:text-base">
							Terms of Service
						</Link>
					</div>
					<p className="font-light text-2xl text-gray-800 uppercase">
						EVRO IS AN AUTONOMOUS SOFTWARE DEPLOYED ON PUBLIC BLOCKCHAINS.
						IT DOES NOT ISSUE, HOLD OR REDEEM ASSETS AND IS NOT A FINANCIAL
						SERVICE OR PRODUCT. INTERACTIONS WITH THE PROTOCOL OCCUR DIRECTLY
						THROUGH SMART CONTRACTS AT THE USER&apos;S INITIATIVE. NO ENTITY PROVIDES
						INVESTMENT ADVICE, CUSTODY or GUARANTEES OF VALUE STABILITY.
					</p>
				</div>
			</footer>
		</div>
	);
}

