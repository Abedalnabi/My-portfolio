import { motion } from 'framer-motion';

import { styles } from '../styles';
import { contact } from '../constants';
import { ComputersCanvas } from './canvas';
import { ArrowRightIcon, LinkedInIcon, MailIcon } from './Icons';

const fadeUp = (delay) => ({
	initial: { opacity: 0, y: 24 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
	return (
		<section className="relative w-full sm:h-screen min-h-[640px] sm:min-h-[720px] mx-auto overflow-hidden">
			<div
				aria-hidden
				className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-accent/20 blur-[140px]"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute top-40 -right-40 w-[420px] h-[420px] rounded-full bg-accent-2/10 blur-[140px]"
			/>

			<div
				className={`absolute inset-0 top-[100px] sm:top-[110px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10 pointer-events-none`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_20px_4px_rgba(145,94,255,0.6)]" />
					<div className="w-[3px] sm:h-80 h-40 violet-gradient" />
				</div>

				<div className="max-w-3xl">
					<motion.div
						{...fadeUp(0)}
						className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[13px] font-semibold text-[#d9ccff]"
					>
						<span className="relative flex h-2 w-2">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-60" />
							<span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
						</span>
						AI Engineer at ICS Jo · Amman, Jordan
					</motion.div>

					<motion.h1 {...fadeUp(0.1)} className={`${styles.heroHeadText} mt-4`}>
						Hi, I&apos;m <span className="accent-text">Mohammad</span>
					</motion.h1>

					<motion.p {...fadeUp(0.2)} className={`${styles.heroSubText} mt-4 max-w-2xl`}>
						Full Stack &amp; AI Engineer building scalable web apps with React, Node.js and NestJS, and bringing LLMs
						into production with RAG, AI agents and document intelligence.
					</motion.p>

					<motion.div {...fadeUp(0.3)} className="mt-7 flex flex-wrap items-center gap-3 pointer-events-auto">
						<a href="#work" className="btn-primary">
							View my experience <ArrowRightIcon width={18} height={18} />
						</a>
						<a href="#contact" className="btn-ghost !bg-[#0b0820]/80 backdrop-blur">
							Get in touch
						</a>
						<div className="flex items-center gap-2 sm:ml-2">
							<a
								href={contact.linkedin}
								target="_blank"
								rel="noreferrer"
								aria-label="LinkedIn"
								className="grid place-items-center w-11 h-11 rounded-full border border-white/15 bg-[#0b0820]/80 backdrop-blur text-secondary hover:text-white hover:border-accent/70 transition-colors"
							>
								<LinkedInIcon width={18} height={18} />
							</a>
							<a
								href={`mailto:${contact.email}`}
								aria-label="Email"
								className="grid place-items-center w-11 h-11 rounded-full border border-white/15 bg-[#0b0820]/80 backdrop-blur text-secondary hover:text-white hover:border-accent/70 transition-colors"
							>
								<MailIcon width={18} height={18} />
							</a>
						</div>
					</motion.div>
				</div>
			</div>

			{/* The 3D desk covers the text on phones, so it is desktop/tablet only. */}
			<div className="hidden sm:block absolute inset-0">
				<ComputersCanvas />
			</div>

			<div className="hidden sm:flex absolute bottom-8 w-full justify-center items-center z-10">
				<a href="#about" aria-label="Scroll to about">
					<div className="w-[30px] h-[54px] rounded-3xl border-2 border-secondary/70 flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 20, 0] }}
							transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
							className="w-2.5 h-2.5 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
