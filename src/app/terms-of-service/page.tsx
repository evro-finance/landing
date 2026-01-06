import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaTelegram } from "react-icons/fa";

export const metadata: Metadata = {
	title: "Terms of Service",
	description: "Read the Terms of Service for EVRO DAO LLC and the evro.finance website. Learn about website usage, protocol disclaimers, liability, intellectual property, and applicable law for the EVRO decentralized protocol.",
};

export default function TermsOfService() {
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
						<h1 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mb-2 uppercase">
							Website Terms
						</h1>
						<p className="text-sm md:text-base font-light text-gray-500 mb-8 uppercase tracking-wider">
							Effective January 1st, 2026
						</p>

						<section className="mb-12">
							<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mt-12 mb-6 uppercase">
								Scope
							</h2>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
								These terms (&ldquo;Terms&rdquo;) apply to the access and use of the website <Link href="https://www.evro.finance" className="font-bold hover:text-[#F5889B] transition-colors">www.evro.finance</Link> and <Link href="https://www.app.evro.finance" className="font-bold hover:text-[#F5889B] transition-colors">www.app.evro.finance</Link> (including all subdomains, the &ldquo;Website&rdquo;), provided by <b className="font-bold">Evro DAO LLC</b>, a DAO LLC incorporated in the Cayman Islands (&ldquo;Evro DAO LLC&rdquo;).
							</p>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
								By accessing the Website, the user (&ldquo;User&rdquo;) agrees to the then-applicable version of these Terms. Evro DAO LLC may, at any time, change these Terms or parts thereof by publishing an updated version on the Website. The User should regularly review these Terms. Continued use of the Website following any changes indicates acceptance of such changes.
							</p>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mt-12 mb-6 uppercase">
								Evro Protocol Disclaimer
							</h2>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
								Evro DAO LLC is not the operator of, and does not control any version of the <b className="font-bold">Evro Protocol</b> (the &ldquo;Evro Protocol&rdquo;). The running of the Evro Protocol is not dependent on Evro DAO LLC, which has no influence on its technical functionalities once deployed. Any use of &ldquo;we&rdquo;, &ldquo;our&rdquo;, etc. within the Website or any related communication is for semantic purposes only and not intended as an assumption of ownership or control by Evro DAO LLC. Please refer to the Evro Protocol Disclaimer.
							</p>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mt-12 mb-6 uppercase">
								Website
							</h2>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
								Any content published on the Website, particularly any references made within it as well as any accompanying documentation, is of purely informational nature. None of the content of the Website shall be understood as advice provided by Evro DAO LLC. All content is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; and Evro DAO LLC does not warrant the completeness, actuality, accuracy and fitness for any particular purpose of any of the content on the Website.
							</p>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
								Users acknowledge the following:
							</p>

							<div className="ml-4 md:ml-8">
								<h3 className="text-xl md:text-2xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mt-8 mb-4 uppercase">
									Integrations:
								</h3>
								<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
									The Evro Protocol&rsquo;s code is source-available and could therefore be integrated into third-party projects and/or applications without Evro DAO LLC&rsquo;s knowledge or involvement. Any reference to such an integration or use-case within the Website is for informational purposes only. Unless and only to the extent specifically indicated otherwise by Evro DAO LLC, Evro DAO LLC is not involved in, does not endorse, support, audit, monitor, assume liability for, nor is otherwise connected to any such third-party project or application, and Evro DAO LLC does not warrant the security, absence of errors or bugs, accuracy, completeness, availability, legality or any other aspect of such third-party project or application.
								</p>

								<h3 className="text-xl md:text-2xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mt-8 mb-4 uppercase">
									Frontends:
								</h3>
								<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
									Evro DAO LLC operates the frontend available at <Link href="https://www.app.evro.finance" className="font-bold hover:text-[#F5889B] transition-colors">www.app.evro.finance</Link>. In addition, the Evro Protocol may be accessed through third-party frontends operated independently from Evro DAO LLC. Any reference to frontend operators on the Website is provided for informational purposes only. Such references are neither conclusive nor do they imply any endorsement. Evro DAO LLC has not conducted any due diligence on third-party frontend operators and does not make any statement regarding their technical functionality or trustworthiness. The use of any third-party frontend is made by any User at its own risk. Assessing the trustworthiness of a frontend operator lies in the sole responsibility of such User and must be made carefully.
								</p>
							</div>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mt-12 mb-6 uppercase">
								Liability and indemnity
							</h2>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
								To the maximum extent permitted under applicable law, Evro DAO LLC is not liable to any User for any sort of damage out of or in connection with the use of the Website or any reliance on its content.
							</p>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
								The User agrees to indemnify and hold Evro DAO LLC harmless from and against any loss, damage, liability or claim, including reasonable attorneys&rsquo; fees and expenses, made by any third party due to the User&rsquo;s intentional misconduct or violation of these Terms or applicable laws, to the extent required by applicable law.
							</p>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mt-12 mb-6 uppercase">
								Intellectual property
							</h2>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
								All content of the Website is owned by Evro DAO LLC and Evro DAO LLC retains all respective rights, titles and interests to its own intellectual property and intangible assets, including any copyrights, inventions, trademarks, designs, domain names, know-how, trade secrets, data, etc. Any feedback Users may provide to Evro DAO LLC may be used by Evro DAO LLC without restriction.
							</p>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
								The Evro Protocol codebase is an open-source project and may be published under applicable open-source or other software licenses as indicated in the respective repositories.
							</p>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.2em] font-lexend-zetta text-gray-900 mt-12 mb-6 uppercase">
								Applicable law and jurisdiction
							</h2>
							<p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed mb-6">
								These Terms shall be governed by and construed and interpreted in accordance with applicable law, to the extent permitted, excluding conflict of law rules. The United Nations Convention for the International Sale of Goods is excluded.
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

