import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40);
			// Back in the hero: no section is "current".
			if (window.scrollY < window.innerHeight * 0.4) setActive('');
		};
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Highlight the link of the section currently in view.
	useEffect(() => {
		// Each id sits on a small anchor span inside its <section>, so watch the section itself.
		const titleBySection = new Map();
		navLinks.forEach((nav) => {
			const section = document.getElementById(nav.id)?.closest('section');
			if (section) titleBySection.set(section, nav.title);
		});
		if (!titleBySection.size) return undefined;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActive(titleBySection.get(entry.target));
				});
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		);

		titleBySection.forEach((_, section) => observer.observe(section));
		return () => observer.disconnect();
	}, []);

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center fixed top-0 z-30 transition-all duration-300 ${
				scrolled
					? 'py-3 bg-primary/75 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]'
					: 'py-5 bg-transparent border-b border-transparent'
			}`}
		>
			<motion.div
				style={{ scaleX: progress }}
				className="absolute left-0 right-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-accent to-accent-2"
			/>

			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-3"
					onClick={() => {
						setActive('');
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo} alt="" className="w-9 h-9 object-contain" />
					<span className="flex flex-col leading-tight">
						<span className="font-display text-white text-[17px] font-bold">Mohammad Abedalnabi</span>
						<span className="hidden lg:block text-[12px] text-secondary font-medium tracking-wide">
							Full Stack &amp; AI Engineer
						</span>
					</span>
				</Link>

				<ul className="list-none hidden md:flex flex-row items-center gap-2">
					{navLinks.map((nav) => (
						<li key={nav.id}>
							<a
								href={`#${nav.id}`}
								onClick={() => setActive(nav.title)}
								className={`relative px-4 py-2 rounded-full text-[15px] font-semibold transition-colors ${
									active === nav.title ? 'text-white bg-white/[0.06]' : 'text-secondary hover:text-white'
								}`}
							>
								{nav.title}
							</a>
						</li>
					))}
					<li className="ml-3">
						<a href="#contact" className="btn-primary !py-2.5 !px-5 text-[14px]">
							Let&apos;s talk
						</a>
					</li>
				</ul>

				<div className="md:hidden flex flex-1 justify-end items-center">
					<button
						type="button"
						aria-label={toggle ? 'Close menu' : 'Open menu'}
						aria-expanded={toggle}
						onClick={() => setToggle(!toggle)}
						className="p-2 rounded-full hover:bg-white/5"
					>
						<img src={toggle ? close : menu} alt="" className="w-[24px] h-[24px] object-contain" />
					</button>

					<div
						className={`${
							!toggle ? 'hidden' : 'flex'
						} card !bg-[#0d0a24]/95 backdrop-blur-xl p-5 absolute top-[72px] right-4 left-4 z-10 shadow-2xl`}
					>
						<ul className="list-none flex flex-1 flex-col gap-1">
							{navLinks.map((nav) => (
								<li key={nav.id}>
									<a
										href={`#${nav.id}`}
										onClick={() => {
											setToggle(false);
											setActive(nav.title);
										}}
										className={`block px-4 py-3 rounded-xl text-[16px] font-semibold ${
											active === nav.title ? 'text-white bg-white/[0.06]' : 'text-secondary'
										}`}
									>
										{nav.title}
									</a>
								</li>
							))}
							<li className="mt-2">
								<a href="#contact" onClick={() => setToggle(false)} className="btn-primary w-full justify-center">
									Let&apos;s talk
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
