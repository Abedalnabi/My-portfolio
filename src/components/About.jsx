import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

//
import { styles } from '../styles';
import { services, education, languages } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, description, icon }) => (
	<Tilt className="xs:w-[250px] w-full">
		<motion.div
			variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
			className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[300px] flex justify-evenly items-center flex-col"
			>
				<img src={icon} alt="web-development" className="w-16 h-16 object-contain" />

				<h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
				<p className="text-secondary text-[14px] text-center leading-[22px]">{description}</p>
			</div>
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

			<motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
				I'm a Full Stack &amp; AI Engineer with 4+ years of experience building scalable web applications with React.js,
				Node.js, NestJS, MySQL and MongoDB. Today I integrate Large Language Models into production through RAG
				pipelines, AI agents and document intelligence. I also bring consulting experience with UNICEF on requirements,
				system integration and stakeholder coordination, and a track record of delivering with cross-functional teams
				in Jordan and the US.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>

			<motion.div variants={fadeIn('up', 'spring', 0.2, 0.75)} className="mt-20 grid md:grid-cols-3 gap-6">
				{education.map((item) => (
					<div key={item.title} className="bg-tertiary rounded-2xl p-6">
						<p className="text-[#915EFF] text-[13px] font-semibold uppercase tracking-wider">Education</p>
						<h3 className="mt-2 text-white text-[18px] font-bold">{item.title}</h3>
						<p className="text-secondary text-[14px]">
							{item.school} · {item.location}
						</p>
						<p className="text-secondary text-[13px] mt-1">{item.date}</p>
						{item.note && <p className="text-white-100 text-[14px] mt-3">{item.note}</p>}
					</div>
				))}
				<div className="bg-tertiary rounded-2xl p-6">
					<p className="text-[#915EFF] text-[13px] font-semibold uppercase tracking-wider">Languages</p>
					<ul className="mt-2 space-y-2">
						{languages.map((language) => (
							<li key={language} className="text-white text-[16px]">
								{language}
							</li>
						))}
					</ul>
				</div>
			</motion.div>
		</>
	);
};

export default SectionWrapper(About, 'about');
