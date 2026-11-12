import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	iremedy,
	Charts_heatMaps,
	threejs,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Experience',
	},
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'AI Engineer',
		description: 'LLM integration, RAG pipelines, AI agents and document intelligence in production.',
		icon: creator,
	},
	{
		title: 'Full Stack Developer',
		description: 'End-to-end web apps with React.js, Node.js, NestJS, MySQL and MongoDB.',
		icon: web,
	},
	{
		title: 'Backend & APIs',
		description: 'REST and GraphQL APIs, streaming, caching, rate limiting, Docker and AWS.',
		icon: backend,
	},
	{
		title: 'Technical Consultant',
		description: 'Requirements analysis, system integration and stakeholder coordination.',
		icon: mobile,
	},
];

const technologies = [
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
	{ name: 'git', icon: git },
	{ name: 'figma', icon: figma },
	{ name: 'docker', icon: docker },
];

const skillGroups = [
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
	{
		title: 'Frontend',
		skills: ['React.js', 'Vue.js', 'Redux', 'JavaScript', 'HTML5', 'CSS3'],
	},
	{
		title: 'Backend',
		skills: ['Node.js', 'Express.js', 'NestJS', 'PHP', 'RESTful APIs', 'GraphQL'],
	},
	{
		title: 'Databases',
		skills: ['MySQL', 'MongoDB'],
	},
	{
		title: 'Cloud & DevOps',
		skills: ['AWS (Lightsail, Amplify, S3)', 'Docker', 'Git', 'CI/CD'],
	},
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

const experiences = [
	{
		title: 'Software Engineer (AI Engineer)',
		company_name: 'ICS Jo',
		location: 'Amman, Jordan',
		icon: '',
		iconText: 'ICS',
		iconBg: '#915EFF',
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
		company_name: 'UNICEF',
		location: 'Amman, Jordan',
		icon: starbucks,
		iconBg: '#383E56',
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
		company_name: 'CBM Integrated Software Inc.',
		location: 'California, USA (Remote)',
		icon: shopify,
		iconBg: '#E6DEDD',
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
		company_name: 'Insan W Alat',
		location: 'Amman, Jordan',
		icon: tesla,
		iconBg: '#383E56',
		date: 'Feb 2022 – Mar 2023',
		points: [
			'Full-Stack Development: built and maintained full-stack web applications using React.js, Vue.js, Node.js, PHP, MySQL, and MongoDB.',
			'API Development: designed and implemented RESTful APIs to enable communication between services.',
			'State Management: managed application state with Redux to improve scalability.',
			'Code Quality and Reviews: conducted code reviews to keep the codebase clean, maintainable, and aligned with best practices.',
		],
	},
];

const education = [
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

const languages = ['Arabic (Native)', 'English (Professional Working Proficiency)'];

const testimonials = [
	{
		testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

const projects = [
	{
		name: 'Al Hussein Volunteer Award',
		description:
			'The Al Hussein Bin Abdullah II Award for Voluntary Work promotes the culture of volunteerism in Jordan and honors individuals and institutions for their contributions to voluntary work.',
		tags: ['Web platform', 'Jordan'],
		image: carrent,
		source_code_link: 'https://alhusseinvolunteeraward.jo/',
	},
	{
		name: 'Nahno',
		description:
			'Nahno.org connects volunteers with community initiatives in the Arab world, bringing individuals and organizations together to drive social impact and community engagement.',
		tags: ['Volunteering', 'Arab world'],
		image: jobit,
		source_code_link: 'https://www.nahno.org/',
	},
	{
		name: 'iRemedy',
		description:
			'A platform that connects patients, providers, governments, and manufacturers with direct access to high-quality healthcare products, building a resilient national medical supply chain.',
		tags: ['Healthcare', 'E-commerce', 'USA'],
		image: iremedy,
		source_code_link: 'https://iremedy.com/',
	},
	{
		name: 'Charts & Heat Maps',
		description:
			'An interactive data-visualization app that turns datasets into clear charts and heat maps, deployed on AWS Amplify.',
		tags: ['Data viz', 'AWS Amplify'],
		image: Charts_heatMaps,
		source_code_link: 'https://main.d3lelljq56c044.amplifyapp.com/',
	},
];

const contact = {
	email: 'mo.alnabale98@gmail.com',
	phone: '+962 789 814 895',
	phoneHref: 'tel:+962789814895',
	linkedin: 'https://www.linkedin.com/in/mohammad-alnabalebe/',
	location: 'Amman, Jordan',
};

const stats = [
	{ value: '4+', label: 'Years building for the web' },
	{ value: '4', label: 'Companies & organizations' },
	{ value: '2', label: 'Countries: Jordan & the US' },
];

export { services, technologies, skillGroups, experiences, education, languages, testimonials, projects, contact, stats };
