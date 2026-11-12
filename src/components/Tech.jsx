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

				<h2 style={{ marginBottom: '80px' }} className={`${styles.sectionHeadText}`}>
					Technologies Skills.
				</h2>
			</motion.div>
			<div className="flex flex-row flex-wrap justify-center gap-10">
				{technologies.map((technology) => (
					<div className="w-28 h-28" key={technology.name}>
						<BallCanvas icon={technology.icon} />
					</div>
				))}
			</div>

			<div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{skillGroups.map((group, index) => (
					<motion.div
						key={group.title}
						variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
						className="bg-tertiary rounded-2xl p-6"
					>
						<h3 className="text-white text-[18px] font-bold">{group.title}</h3>
						<div className="mt-4 flex flex-wrap gap-2">
							{group.skills.map((skill) => (
								<span
									key={skill}
									className="text-[13px] text-white-100 bg-black-200 border border-[#915EFF]/40 rounded-full px-3 py-1"
								>
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
