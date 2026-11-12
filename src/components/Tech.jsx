import React from 'react';
import { motion } from 'framer-motion';

import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies, skillGroups } from '../constants';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const Tech = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} `}>My skills</p>

				<h2 className={`${styles.sectionHeadText}`}>Skills &amp; Technologies.</h2>
			</motion.div>
			<div className="mt-14 flex flex-row flex-wrap justify-center gap-8">
				{technologies.map((technology) => (
					<div className="w-28 h-28" key={technology.name}>
						<BallCanvas icon={technology.icon} />
					</div>
				))}
			</div>

			<div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{skillGroups.map((group, index) => (
					<motion.div
						key={group.title}
						variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
						className="card card-hover p-6"
					>
						<h3 className="text-white text-[18px] font-bold flex items-center gap-2">
							<span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent-2" />
							{group.title}
						</h3>
						<div className="mt-4 flex flex-wrap gap-2">
							{group.skills.map((skill) => (
								<span key={skill} className="chip">
									{skill}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Tech, '');
