import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services, education, languages, stats } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, description, icon }) => (
	<Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={false} className="w-full">
		<motion.div
			variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
			className="card card-hover h-full p-7 flex flex-col gap-4"
		>
			<div className="w-14 h-14 rounded-2xl grid place-items-center bg-gradient-to-br from-accent/25 to-accent-2/10 border border-accent/30">
				<img src={icon} alt="" className="w-8 h-8 object-contain" />
			</div>
			<h3 className="text-white text-[20px] font-bold">{title}</h3>
			<p className="text-secondary text-[14.5px] leading-[24px]">{description}</p>
		</motion.div>
	</Tilt>
);

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<div className="mt-6 grid lg:grid-cols-[1.6fr_1fr] gap-10 items-start">
				<motion.p variants={fadeIn('', '', 0.1, 1)} className="text-[#c3bede] text-[17px] leading-[30px]">
					I&apos;m a <span className="text-white font-semibold">Full Stack &amp; AI Engineer</span> with 4+ years of
					experience building scalable web applications with React.js, Node.js, NestJS, MySQL and MongoDB. Today I
					integrate <span className="text-white font-semibold">Large Language Models</span> into production through RAG
					pipelines, AI agents and document intelligence. I also bring consulting experience with{' '}
					<span className="text-white font-semibold">UNICEF</span> on requirements, system integration and stakeholder
					coordination, and a track record of delivering with cross-functional teams in Jordan and the US.
				</motion.p>

				<motion.div variants={fadeIn('up', 'spring', 0.2, 0.75)} className="grid grid-cols-3 gap-3">
					{stats.map((stat) => (
						<div key={stat.label} className="card p-4 text-center">
							<p className="font-display text-[34px] font-bold accent-text leading-none">{stat.value}</p>
							<p className="mt-2 text-[12px] leading-[17px] text-secondary">{stat.label}</p>
						</div>
					))}
				</motion.div>
			</div>

			<div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>

			<motion.div variants={fadeIn('up', 'spring', 0.2, 0.75)} className="mt-6 grid md:grid-cols-3 gap-6">
				{education.map((item) => (
					<div key={item.title} className="card p-6">
						<p className="text-accent-2 text-[12px] font-bold uppercase tracking-[0.18em]">Education</p>
						<h3 className="mt-3 text-white text-[18px] font-bold">{item.title}</h3>
						<p className="mt-1 text-secondary text-[14px]">
							{item.school} · {item.location}
						</p>
						<p className="mt-3 inline-block chip !text-[12px] !py-1.5">{item.date}</p>
						{item.note && <p className="text-[#c3bede] text-[14px] mt-3">{item.note}</p>}
					</div>
				))}
				<div className="card p-6">
					<p className="text-accent-2 text-[12px] font-bold uppercase tracking-[0.18em]">Languages</p>
					<ul className="mt-3 space-y-3">
						{languages.map((language) => {
							const [name, level] = language.split(' (');
							return (
								<li key={language}>
									<p className="text-white text-[17px] font-bold font-display">{name}</p>
									{level && <p className="text-secondary text-[14px]">{level.replace(')', '')}</p>}
								</li>
							);
						})}
					</ul>
				</div>
			</motion.div>
		</>
	);
};

export default SectionWrapper(About, 'about');
