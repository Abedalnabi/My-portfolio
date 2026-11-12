import iconAi from './assets/creator.png';
import iconWeb from './assets/web.png';
import iconBackend from './assets/backend.png';
import iconConsult from './assets/mobile.png';

import html from './assets/tech/html.png';
import css from './assets/tech/css.png';
import javascript from './assets/tech/javascript.png';
import typescript from './assets/tech/typescript.png';
import reactjs from './assets/tech/reactjs.png';
import redux from './assets/tech/redux.png';
import tailwind from './assets/tech/tailwind.png';
import nodejs from './assets/tech/nodejs.png';
import mongodb from './assets/tech/mongodb.png';
import threejs from './assets/tech/threejs.svg';
import git from './assets/tech/git.png';
import figma from './assets/tech/figma.png';
import docker from './assets/tech/docker.png';

import unicefLogo from './assets/company/unicef.png';
import cbmisLogo from './assets/company/CBMIS.png';
import insanLogo from './assets/company/insan-w-alat.jpg';

import husseinAwardShot from './assets/alhusseinvolunteeraward.png';
import nahnoShot from './assets/nahno.png';
import iremedyShot from './assets/iremedy.png';
import chartsShot from './assets/Charts-heatMaps.png';

export const profile = {
	name: 'Mohammad Abedalnabi',
	firstName: 'Mohammad',
	initials: 'MA',
	role: 'Full Stack & AI Engineer',
	currently: 'AI Engineer at ICS Jo',
	tagline:
		'I build scalable web apps with React, Node.js and NestJS, and bring LLMs into production with RAG, AI agents and document intelligence.',
	about: [
		'I’m a Full Stack & AI Engineer with 4+ years of experience building scalable web applications with React.js, Node.js, NestJS, MySQL and MongoDB.',
		'Today I integrate Large Language Models into production through RAG pipelines, AI agents and document intelligence.',
		'I also bring consulting experience with UNICEF on requirements, system integration and stakeholder coordination, and a track record of delivering with cross-functional teams in Jordan and the US.',
	],
};

export const navLinks = [
	{ id: 'about', title: 'About' },
	{ id: 'work', title: 'Experience' },
	{ id: 'projects', title: 'Projects' },
	{ id: 'skills', title: 'Skills' },
	{ id: 'contact', title: 'Contact' },
];

export const stats = [
	{ value: '4+', label: 'Years building for the web' },
	{ value: '4', label: 'Companies & organizations' },
	{ value: '2', label: 'Countries: Jordan & the US' },
];

export const services = [
	{
		title: 'AI Engineer',
		description: 'LLM integration, RAG pipelines, AI agents and document intelligence in production.',
		icon: iconAi,
	},
	{
		title: 'Full Stack Developer',
		description: 'End-to-end web apps with React.js, Node.js, NestJS, MySQL and MongoDB.',
		icon: iconWeb,
	},
	{
		title: 'Backend & APIs',
		description: 'REST and GraphQL APIs, streaming, caching, rate limiting, Docker and AWS.',
		icon: iconBackend,
	},
	{
		title: 'Technical Consultant',
		description: 'Requirements analysis, system integration and stakeholder coordination.',
		icon: iconConsult,
	},
];

export const technologies = [
	{ name: 'HTML 5', icon: html },
	{ name: 'CSS 3', icon: css },
	{ name: 'JavaScript', icon: javascript },
	{ name: 'TypeScript', icon: typescript },
	{ name: 'React JS', icon: reactjs },
	{ name: 'Redux Toolkit', icon: redux },
	{ name: 'Tailwind CSS', icon: tailwind },
	{ name: 'Node JS', icon: nodejs },
	{ name: 'MongoDB', icon: mongodb },
	{ name: 'Three JS', icon: threejs },
	{ name: 'Git', icon: git },
	{ name: 'Figma', icon: figma },
	{ name: 'Docker', icon: docker },
];

export const skillGroups = [
	{
		title: 'AI & LLMs',
		skills: [
			'LLM Integration (OpenAI, Anthropic Claude)',
			'RAG',
			'Embeddings',
			'Vector Databases',
			'AI Agents',
			'Function Calling',
			'Prompt Engineering',
			'LLM Evaluation',
		],
	},
	{ title: 'Frontend', skills: ['React.js', 'Vue.js', 'Redux', 'JavaScript', 'HTML5', 'CSS3'] },
	{ title: 'Backend', skills: ['Node.js', 'Express.js', 'NestJS', 'PHP', 'RESTful APIs', 'GraphQL'] },
	{ title: 'Databases', skills: ['MySQL', 'MongoDB'] },
	{ title: 'Cloud & DevOps', skills: ['AWS (Lightsail, Amplify, S3)', 'Docker', 'Git', 'CI/CD'] },
	{
		title: 'Professional',
		skills: [
			'Requirements Analysis',
			'Stakeholder Management',
			'Technical Documentation',
			'Code Reviews',
			'Testing & Debugging',
			'Performance Optimization',
			'UI/UX Design',
		],
	},
];

export const experiences = [
	{
		title: 'Software Engineer (AI Engineer)',
		company: 'ICS Jo',
		short: 'ICS Jo',
		location: 'Amman, Jordan',
		logo: null,
		logoText: 'ICS',
		date: 'Jun 2025 – Present',
		points: [
			'Full-Stack Engineering: built and maintained end-to-end web applications using React.js, Node.js, NestJS, and SQL/NoSQL databases, delivering the interfaces and APIs behind AI-powered features.',
			'LLM Integration: integrated Large Language Models (OpenAI GPT, Anthropic Claude) into production applications to power chat assistants, summarization, and content generation.',
			'RAG Pipelines: designed Retrieval-Augmented Generation pipelines with embeddings and vector databases, grounding AI responses in company and client data to improve accuracy.',
			'AI Agents & Automation: developed AI agents using function calling and tool use to automate multi-step business workflows.',
			'Prompt Engineering & Evaluation: designed, tested, and versioned prompts, and built evaluation datasets to measure output quality before each release.',
			'Document Intelligence: built pipelines that extract structured data from PDFs and scanned documents by combining OCR with LLMs.',
			'Scalable AI Services: implemented response streaming, caching, rate limiting, and token-cost monitoring for AI backend services.',
			'Deployment: containerized and deployed AI services with Docker on AWS using CI/CD pipelines.',
		],
	},
	{
		title: 'Project Consultant',
		company: 'UNICEF',
		short: 'UNICEF',
		location: 'Amman, Jordan',
		logo: unicefLogo,
		date: 'Jul 2023 – May 2025',
		points: [
			'System Integration: led the integration of new systems with existing infrastructure, ensuring interoperability and improving operational efficiency.',
			'Requirements Analysis: gathered and analyzed requirements from program teams and stakeholders, translating them into technical specifications and project deliverables.',
			'Project Coordination: coordinated with internal teams, implementing partners, and vendors to plan timelines, track progress, and deliver projects on schedule.',
			'UI/UX Enhancements: conducted user research and recommended data-driven UI/UX improvements that significantly increased user satisfaction.',
			'Database Optimization: advised on database structure and query optimization to improve application performance and scalability.',
			'Documentation & Reporting: prepared technical documentation, progress reports, and presentations for stakeholders and management.',
			'Training and Support: delivered end-user training sessions and provided ongoing support to resolve complex system issues.',
		],
	},
	{
		title: 'Full Stack Developer',
		company: 'CBM Integrated Software Inc.',
		short: 'CBMIS',
		location: 'California, USA (Remote)',
		logo: cbmisLogo,
		date: 'Jul 2022 – Oct 2023',
		points: [
			'Frontend Development: developed dynamic, responsive user interfaces using React.js.',
			'Backend Development: built RESTful and GraphQL APIs with Node.js and MySQL.',
			'Performance Optimization: optimized code and assets to improve application performance and page load times.',
			'Team Collaboration: collaborated with product managers, backend developers, and designers to align project goals and deliver a seamless user experience.',
			'Code Quality: maintained coding standards through code reviews and testing.',
			"Reverse Engineering: reverse-engineered ProtonMail's mail client to support rebranding and customization.",
		],
	},
	{
		title: 'Full Stack Developer',
		company: 'Insan W Alat',
		short: 'Insan W Alat',
		location: 'Amman, Jordan',
		logo: insanLogo,
		date: 'Feb 2022 – Mar 2023',
		points: [
			'Full-Stack Development: built and maintained full-stack web applications using React.js, Vue.js, Node.js, PHP, MySQL, and MongoDB.',
			'API Development: designed and implemented RESTful APIs to enable communication between services.',
			'State Management: managed application state with Redux to improve scalability.',
			'Code Quality and Reviews: conducted code reviews to keep the codebase clean, maintainable, and aligned with best practices.',
		],
	},
];

export const projects = [
	{
		name: 'Al Hussein Volunteer Award',
		description:
			'The Al Hussein Bin Abdullah II Award for Voluntary Work promotes the culture of volunteerism in Jordan and honors individuals and institutions for their contributions to voluntary work.',
		tags: ['Web platform', 'Jordan'],
		image: husseinAwardShot,
		link: 'https://alhusseinvolunteeraward.jo/',
	},
	{
		name: 'Nahno',
		description:
			'Nahno.org connects volunteers with community initiatives in the Arab world, bringing individuals and organizations together to drive social impact and community engagement.',
		tags: ['Volunteering', 'Arab world'],
		image: nahnoShot,
		link: 'https://www.nahno.org/',
	},
	{
		name: 'iRemedy',
		description:
			'A platform that connects patients, providers, governments, and manufacturers with direct access to high-quality healthcare products, building a resilient national medical supply chain.',
		tags: ['Healthcare', 'E-commerce', 'USA'],
		image: iremedyShot,
		link: 'https://iremedy.com/',
	},
	{
		name: 'Charts & Heat Maps',
		description:
			'An interactive data-visualization app that turns datasets into clear charts and heat maps, deployed on AWS Amplify.',
		tags: ['Data viz', 'AWS Amplify'],
		image: chartsShot,
		link: 'https://main.d3lelljq56c044.amplifyapp.com/',
	},
];

export const education = [
	{
		title: 'Full-Stack Development Bootcamp',
		school: 'Meraki Academy',
		location: 'Amman, Jordan',
		date: 'Mar 2021 – Oct 2021',
		note: 'Completed 1,000+ hours of hands-on training in full-stack web development.',
	},
	{
		title: "Bachelor's Degree in Finance",
		school: 'The Hashemite University',
		location: 'Zarqa, Jordan',
		date: '2015 – 2019',
		note: '',
	},
];

export const languages = ['Arabic (Native)', 'English (Professional Working Proficiency)'];

export const contact = {
	email: 'mo.alnabale98@gmail.com',
	phone: '+962 789 814 895',
	phoneHref: 'tel:+962789814895',
	linkedin: 'https://www.linkedin.com/in/mohammad-alnabalebe/',
	location: 'Amman, Jordan',
};

// EmailJS settings used by the contact form.
export const emailjsConfig = {
	serviceId: 'service_p17g7id',
	templateId: 'template_s2yip3e',
	publicKey: 'Z3UUHG4al2c8Ilro9',
};
