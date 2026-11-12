// Builds the virtual "file system" the IDE shows, from the data in data.js.
import { contact, education, experiences, languages, projects, skillGroups, technologies } from './data';

const slug = (s) =>
	s
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
const camel = (s) => slug(s).replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
const q = (s) => (s.includes("'") ? JSON.stringify(s) : `'${s}'`);

// A code line: indentation level + tokens [type, text, href?]
// types: k keyword · s string · p property · n number · b boolean · c comment · f type · v variable · x punctuation · t plain
const L = (indent = 0, ...tokens) => ({ indent, tokens });

const experienceFile = (job) => {
	const name = slug(job.short);
	const lines = [
		L(0, ['c', `// ${job.company} · ${job.location}`]),
		L(0, ['k', 'import type'], ['x', ' { '], ['f', 'Role'], ['x', ' } '], ['k', 'from'], ['t', ' '], ['s', "'../types'"], ['x', ';']),
		L(0),
		L(0, ['k', 'export const '], ['v', camel(job.short)], ['x', ': '], ['f', 'Role'], ['x', ' = {']),
		L(1, ['p', 'title'], ['x', ': '], ['s', q(job.title)], ['x', ',']),
		L(1, ['p', 'company'], ['x', ': '], ['s', q(job.company)], ['x', ',']),
		L(1, ['p', 'location'], ['x', ': '], ['s', q(job.location)], ['x', ',']),
		L(1, ['p', 'period'], ['x', ': '], ['s', q(job.date)], ['x', ',']),
	];
	if (job.date.includes('Present')) lines.push(L(1, ['p', 'current'], ['x', ': '], ['b', 'true'], ['x', ',']));
	lines.push(L(1, ['p', 'highlights'], ['x', ': [']));
	job.points.forEach((point) => {
		const [lead, ...rest] = point.split(': ');
		if (rest.length) {
			lines.push(L(2, ['c', `// ${lead}`]));
			lines.push(L(2, ['s', q(rest.join(': '))], ['x', ',']));
		} else {
			lines.push(L(2, ['s', q(point)], ['x', ',']));
		}
	});
	lines.push(L(1, ['x', '],']));
	lines.push(L(0, ['x', '};']));

	return {
		id: `experience/${name}.ts`,
		name: `${name}.ts`,
		icon: 'ts',
		lang: 'TypeScript',
		kind: 'code',
		lines,
		meta: job,
	};
};

const projectFile = (project) => ({
	id: `projects/${slug(project.name)}.md`,
	name: `${slug(project.name)}.md`,
	icon: 'md',
	lang: 'Markdown',
	kind: 'preview',
	view: 'project',
	data: project,
});

const arrayLine = (indent, key, items, last) =>
	L(
		indent,
		['p', `"${key}"`],
		['x', ': ['],
		...items.flatMap((s, i) => [['s', `"${s}"`], ['x', i < items.length - 1 ? ', ' : '']]),
		['x', last ? ']' : '],']
	);

const skillsFile = {
	id: 'skills.json',
	name: 'skills.json',
	icon: 'json',
	lang: 'JSON',
	kind: 'code',
	lines: [
		L(0, ['x', '{']),
		arrayLine(
			1,
			'tools',
			technologies.map((t) => t.name),
			false
		),
		...skillGroups.map((g, i) => arrayLine(1, g.title, g.skills, i === skillGroups.length - 1)),
		L(0, ['x', '}']),
	],
};

const educationFile = {
	id: 'education.yml',
	name: 'education.yml',
	icon: 'yml',
	lang: 'YAML',
	kind: 'code',
	lines: [
		L(0, ['c', '# Education & languages']),
		L(0, ['p', 'education'], ['x', ':']),
		...education.flatMap((e) => [
			L(1, ['x', '- '], ['p', 'title'], ['x', ': '], ['s', e.title]),
			L(2, ['p', 'school'], ['x', ': '], ['s', e.school]),
			L(2, ['p', 'location'], ['x', ': '], ['s', e.location]),
			L(2, ['p', 'period'], ['x', ': '], ['n', e.date]),
			...(e.note ? [L(2, ['p', 'note'], ['x', ': '], ['s', e.note])] : []),
		]),
		L(0),
		L(0, ['p', 'languages'], ['x', ':']),
		...languages.map((l) => L(1, ['x', '- '], ['s', l])),
	],
};

const contactFile = {
	id: 'contact.sh',
	name: 'contact.sh',
	icon: 'sh',
	lang: 'Shell',
	kind: 'code',
	withForm: true,
	lines: [
		L(0, ['c', '#!/usr/bin/env bash']),
		L(0, ['c', '# Working on something with AI or the web? Let’s talk.']),
		L(0),
		L(0, ['v', 'EMAIL'], ['x', '='], ['s', `"${contact.email}"`, `mailto:${contact.email}`]),
		L(0, ['v', 'PHONE'], ['x', '='], ['s', `"${contact.phone}"`, contact.phoneHref]),
		L(0, ['v', 'LINKEDIN'], ['x', '='], ['s', `"${contact.linkedin}"`, contact.linkedin]),
		L(0, ['v', 'LOCATION'], ['x', '='], ['s', `"${contact.location}"`]),
		L(0),
		L(0, ['f', 'send_message'], ['x', '() {']),
		L(1, ['c', '# Fill in the form below and press Run ▶']),
		L(1, ['k', 'echo'], ['t', ' '], ['s', '"$MESSAGE"'], ['x', ' | '], ['k', 'mail'], ['t', ' -s '], ['s', '"Hello from your portfolio"'], ['t', ' '], ['v', '$EMAIL']),
		L(0, ['x', '}']),
	],
};

const readmeFile = {
	id: 'README.md',
	name: 'README.md',
	icon: 'md',
	lang: 'Markdown',
	kind: 'preview',
	view: 'readme',
};

const experienceFiles = experiences.map(experienceFile);
const projectFiles = projects.map(projectFile);

export const files = [readmeFile, ...experienceFiles, ...projectFiles, skillsFile, educationFile, contactFile];
export const fileById = Object.fromEntries(files.map((f) => [f.id, f]));

export const tree = [
	{ type: 'file', id: readmeFile.id },
	{ type: 'folder', name: 'experience', children: experienceFiles.map((f) => f.id) },
	{ type: 'folder', name: 'projects', children: projectFiles.map((f) => f.id) },
	{ type: 'file', id: skillsFile.id },
	{ type: 'file', id: educationFile.id },
	{ type: 'file', id: contactFile.id },
];

export const shortcuts = {
	about: readmeFile.id,
	experience: experienceFiles[0].id,
	projects: projectFiles[0].id,
	skills: skillsFile.id,
	education: educationFile.id,
	contact: contactFile.id,
};
