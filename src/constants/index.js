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
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
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
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'Frontend Developer',
		icon: mobile,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
	{
		title: 'Full stack Developer',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'docker',
		icon: docker,
	},
];

const experiences = [
	{
		title: 'Project consultant (Full-time)',
		company_name: 'UNICEF',
		icon: starbucks,
		iconBg: '#383E56',
		date: 'Jul 2023- Feb 2025',
		points: [
			'Enhanced user experiences through dynamic and responsive front-end development: built interfaces using React.js, ensuring accessibility and responsiveness.',
			'Collaborated with cross-functional teams: aligned technical solutions with product goals and delivered seamless integration with backend systems.',
			'Improved application performance: optimized loading times, implemented code improvements, and adhered to industry best practices.',
			'Developed backend solutions and APIs: utilized Node.js and MySQL to build efficient and secure server-side applications.',
			'Applied UI/UX principles to real-world projects: crafted intuitive, visually appealing interfaces focused on enhancing usability.',
			'Mastered scalable web application development: participated in intensive training on backend systems, RESTful APIs, and database management.',
		],
	},
	{
		title: ' Full Stack Developer (Full-time)',
		company_name: ' Insan W Alat',
		icon: tesla,
		iconBg: '#E6DEDD',
		date: ' Feb 2022- Mar 2023',
		points: [
			'Built and maintained full-stack web applications: utilized technologies such as React.js, Vue.js, Node.js, MySQL, and MongoDB.',
			'Streamlined service communication: designed and implemented robust RESTful APIs for seamless interaction between systems.',
			'Ensured high code quality and maintainability: conducted rigorous code reviews, debugging, and testing to adhere to best practices.',
		],
	},
	{
		title: 'Full-stack Developer (Part-time)',
		company_name: 'CBM integrated software Inc. ',
		icon: shopify,
		iconBg: '#383E56',
		date: 'Jul 2022 - Oct 2023',
		points: [
			'Enhanced user experiences through dynamic and responsive front-end development: built interfaces using React.js, ensuring accessibility and responsiveness.',
			'Collaborated with cross-functional teams: aligned technical solutions with product goals and delivered seamless integration with backend systems.',
			'Improved application performance: optimized loading times, implemented code improvements, and adhered to industry best practices.',
			'Applied UI/UX principles to real-world projects: crafted intuitive, visually appealing interfaces focused on enhancing usability.',
			'Mastered scalable web application development: participated in intensive training on backend systems, RESTful APIs, and database management.',
		],
	},
	{
		title: 'Software Engineer (Full-time)',
		company_name: 'myKloud ',
		icon: meta,
		iconBg: '#E6DEDD',
		date: 'Nov 2021 - Feb 2022',
		points: [
			'Developed responsive and scalable front-end interfaces: created high-performance UIs using React.js, tailored to user needs.',
			'Delivered secure and efficient backend solutions: worked on Java Spring Boot to develop scalable and reliable systems.',
			'Enhanced product capabilities through reverse engineering: customized and rebranded ProtonMails client interface while solving complex technical challenges.',
		],
	},
];

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
		name: 'alhussein volunteer award',
		description:
			'The Al Hussein Bin Abdullah II Award for Voluntary Work aims to promote the culture of volunteerism in Jordan and honor individuals and institutions for their contributions to voluntary work.',
		tags: [],
		image: carrent,
		source_code_link: 'https://alhusseinvolunteeraward.jo/',
	},
	{
		name: 'Nahno',
		description:
			'Nahno.org connects volunteers with community initiatives in the Arab world, facilitating collaboration between individuals and organizations to drive social impact. It aims to boost volunteerism and community engagement.   ',
		tags: [],
		image: jobit,
		source_code_link: 'https://www.nahno.org/',
	},
	{
		name: 'iremedy',
		description: `Our platform seamlessly connects patients, providers, governments, and manufacturers, offering direct access to a range of high-quality healthcare products, we are committed to creating efficiencies, and fostering a resilient national medical supply chain`,
		tags: [],
		image: iremedy,
		source_code_link: 'https://iremedy.com/',
	},

	{
		name: 'Charts-heatMaps',
		description:
			'Charts and heat-maps are visual tools used to display data in a clear and concise way. They come in different types and are commonly used in business, science, and other fields.',
		tags: [],
		image: Charts_heatMaps,
		source_code_link: 'https://main.d3lelljq56c044.amplifyapp.com/',
	},
];

export { services, technologies, experiences, testimonials, projects };
