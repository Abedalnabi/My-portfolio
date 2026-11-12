import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { ExternalIcon } from './Icons';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
	return (
		<motion.div variants={fadeIn('up', 'spring', index * 0.25, 0.75)} className="h-full">
			<Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} className="h-full">
				<a
					href={source_code_link}
					target="_blank"
					rel="noreferrer"
					className="group card card-hover h-full p-4 flex flex-col"
				>
					<div className="relative w-full h-[220px] overflow-hidden rounded-2xl">
						<img
							src={image}
							alt={`${name} screenshot`}
							loading="lazy"
							className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-[#0b0820] via-transparent to-transparent opacity-80" />
						<span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur px-3 py-1.5 text-[12px] font-semibold text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
							Visit site <ExternalIcon width={14} height={14} />
						</span>
					</div>

					<div className="mt-5 px-2 flex-1">
						<h3 className="text-white font-bold text-[22px] group-hover:text-[#d9ccff] transition-colors">{name}</h3>
						<p className="mt-2 text-secondary text-[14.5px] leading-[24px] line-clamp-4">{description}</p>
					</div>

					<div className="mt-5 px-2 pb-2 flex flex-wrap gap-2">
						{tags.map((tag) => (
							<span key={`${name}-${tag}`} className="chip !text-[12px] !py-1.5">
								#{tag}
							</span>
						))}
					</div>
				</a>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<div>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} `}>My work</p>
				<h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
			</motion.div>

			<motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-[#c3bede] text-[17px] max-w-3xl leading-[30px]">
				Real-world products I have worked on. Each card links to the live site and reflects my ability to solve complex
				problems, work across different technologies, and deliver with cross-functional teams.
			</motion.p>

			<div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Works, 'projects');
