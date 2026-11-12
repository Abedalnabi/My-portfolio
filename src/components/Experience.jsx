import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { ChevronDownIcon, MapPinIcon } from './Icons';

const VISIBLE_POINTS = 4;

// "Label: text" -> bold label + text, so each bullet scans quickly.
const Point = ({ text }) => {
	const split = text.indexOf(':');
	if (split === -1 || split > 40) return text;
	const body = text.slice(split + 1).trim();
	return (
		<>
			<span className="text-white font-semibold">{text.slice(0, split)}.</span>{' '}
			{body.charAt(0).toUpperCase() + body.slice(1)}
		</>
	);
};

const ExperienceCard = ({ experience }) => {
	const [expanded, setExpanded] = useState(false);
	const hidden = experience.points.length - VISIBLE_POINTS;
	const points = expanded ? experience.points : experience.points.slice(0, VISIBLE_POINTS);

	return (
		<VerticalTimelineElement
			contentStyle={{
				background: 'linear-gradient(180deg, rgba(27,21,58,0.95) 0%, rgba(17,13,40,0.95) 100%)',
				color: '#fff',
				boxShadow: '0 30px 80px -40px rgba(145,94,255,0.45)',
				padding: '28px',
			}}
			contentArrowStyle={{ borderRight: '7px solid rgba(145,94,255,0.35)' }}
			date={experience.date}
			dateClassName="!text-secondary !font-semibold !opacity-100"
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					{experience.icon ? (
						<img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
					) : (
						<span className="font-display text-white font-bold text-[14px]">{experience.iconText}</span>
					)}
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[22px] font-bold leading-tight">{experience.title}</h3>
				<p className="mt-1 text-[16px] font-semibold accent-text inline-block" style={{ margin: '4px 0 0' }}>
					{experience.company_name}
				</p>
				{experience.location && (
					<p className="flex items-center gap-1.5 text-secondary text-[13.5px]" style={{ margin: '4px 0 0' }}>
						<MapPinIcon width={15} height={15} /> {experience.location}
					</p>
				)}
			</div>

			<ul className="mt-5 space-y-3">
				{points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="relative pl-5 text-[#c3bede] text-[14.5px] leading-[24px] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent"
					>
						<Point text={point} />
					</li>
				))}
			</ul>

			{hidden > 0 && (
				<button
					type="button"
					onClick={() => setExpanded(!expanded)}
					className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent-2 hover:text-white transition-colors"
				>
					{expanded ? 'Show less' : `Show ${hidden} more`}
					<ChevronDownIcon width={16} height={16} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
				</button>
			)}
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
				<h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
			</motion.div>

			<div className="mt-16 flex flex-col">
				<VerticalTimeline lineColor="">
					{experiences.map((experience, index) => (
						<ExperienceCard key={`experience-${index}`} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, 'work');
