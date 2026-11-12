// Builds the virtual repository the IDE shows, from the data in data.js.
// Every file except README.md is shown as real, valid source code.
import { contact, education, experiences, languages, projects, skillGroups, technologies } from './data';

const slug = (s) =>
	s
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
const camel = (s) => slug(s).replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
// Prettier-style quoting: single quotes unless the string contains one.
const q = (s) => (s.includes("'") ? JSON.stringify(s) : `'${s}'`);
const fileName = (path) => path.split('/').pop();

// A code line: indentation level + tokens [type, text, href?]
// types: k keyword · s string · p property · n number · b boolean · c comment · f type/heading · v variable · x punctuation · t plain
const L = (indent = 0, ...tokens) => ({ indent, tokens });

/* ---------- assets/ (real images) ---------- */

const assetFiles = projects.map((p) => {
	const ext = p.image.split('?')[0].split('.').pop() || 'png';
	const id = `assets/${slug(p.name)}.${ext === 'png' || ext === 'jpg' || ext === 'jpeg' ? ext : 'png'}`;
	return { id, name: fileName(id), icon: 'img', lang: 'Image', kind: 'image', src: p.image, alt: `Screenshot of ${p.name}` };
});

/* ---------- types.ts ---------- */

const typesFile = {
	id: 'types.ts',
	name: 'types.ts',
	icon: 'ts',
	lang: 'TypeScript',
	kind: 'code',
	lines: [
		L(0, ['k', 'export interface '], ['f', 'Role'], ['x', ' {']),
		L(1, ['p', 'title'], ['x', ': '], ['f', 'string'], ['x', ';']),
		L(1, ['p', 'company'], ['x', ': '], ['f', 'string'], ['x', ';']),
		L(1, ['p', 'location'], ['x', ': '], ['f', 'string'], ['x', ';']),
		L(1, ['p', 'period'], ['x', ': '], ['f', 'string'], ['x', ';']),
		L(1, ['p', 'current'], ['x', '?: '], ['f', 'boolean'], ['x', ';']),
		L(1, ['p', 'highlights'], ['x', ': '], ['f', 'string'], ['x', '[];']),
		L(0, ['x', '}']),
	],
};

/* ---------- experience/*.ts ---------- */

const experienceFiles = experiences.map((job) => {
	const id = `experience/${slug(job.short)}.ts`;
	const lines = [
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
		if (rest.length) lines.push(L(2, ['c', `// ${lead}`]));
		const text = rest.length ? rest.join(': ') : point;
		lines.push(L(2, ['s', q(text.charAt(0).toUpperCase() + text.slice(1))], ['x', ',']));
	});
	lines.push(L(1, ['x', '],']));
	lines.push(L(0, ['x', '};']));
	return { id, name: fileName(id), icon: 'ts', lang: 'TypeScript', kind: 'code', lines, meta: job };
});

/* ---------- projects/*.md (markdown source) ---------- */

const projectFiles = projects.map((p, i) => {
	const id = `projects/${slug(p.name)}.md`;
	const asset = assetFiles[i];
	return {
		id,
		name: fileName(id),
		icon: 'md',
		lang: 'Markdown',
		kind: 'code',
		lines: [
			L(0, ['f', `# ${p.name}`]),
			L(0),
			L(0, ['x', '> '], ['c', 'Live: '], ['p', p.link, p.link]),
			L(0),
			L(0, ['t', p.description]),
			L(0),
			L(0, ['f', '## Tags']),
			L(0),
			...p.tags.map((t) => L(0, ['x', '- '], ['t', t])),
			L(0),
			L(0, ['x', '!['], ['s', asset.alt], ['x', ']('], ['p', `../${asset.id}`], ['x', ')']),
		],
		meta: p,
	};
});

/* ---------- skills.json ---------- */

const jsonArray = (key, items, last) => [
	L(1, ['p', `"${key}"`], ['x', ': [']),
	...items.map((s, i) => L(2, ['s', `"${s}"`], ['x', i < items.length - 1 ? ',' : ''])),
	L(1, ['x', last ? ']' : '],']),
];

const skillsFile = {
	id: 'skills.json',
	name: 'skills.json',
	icon: 'json',
	lang: 'JSON',
	kind: 'code',
	lines: [
		L(0, ['x', '{']),
		...skillGroups.flatMap((g) => jsonArray(g.title, g.skills, false)),
		...jsonArray(
			'Tools',
			technologies.map((t) => t.name),
			true
		),
		L(0, ['x', '}']),
	],
};

/* ---------- education.yml ---------- */

const yamlValue = (v) => (/[:#]/.test(v) ? `"${v}"` : v);

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
			L(1, ['x', '- '], ['p', 'title'], ['x', ': '], ['s', yamlValue(e.title)]),
			L(2, ['p', 'school'], ['x', ': '], ['s', yamlValue(e.school)]),
			L(2, ['p', 'location'], ['x', ': '], ['s', yamlValue(e.location)]),
			L(2, ['p', 'period'], ['x', ': '], ['s', yamlValue(e.date)]),
			...(e.note ? [L(2, ['p', 'note'], ['x', ': '], ['s', yamlValue(e.note)])] : []),
		]),
		L(0),
		L(0, ['p', 'languages'], ['x', ':']),
		...languages.map((l) => L(1, ['x', '- '], ['s', yamlValue(l)])),
	],
};

/* ---------- contact.sh ---------- */

const contactFile = {
	id: 'contact.sh',
	name: 'contact.sh',
	icon: 'sh',
	lang: 'Shell Script',
	kind: 'code',
	lines: [
		L(0, ['c', '#!/usr/bin/env bash']),
		L(0, ['c', '# Usage: ./contact.sh "Your name" "you@company.com" "Your message"']),
		L(0, ['k', 'set'], ['t', ' -euo pipefail']),
		L(0),
		L(0, ['k', 'readonly '], ['v', 'EMAIL'], ['x', '='], ['s', `"${contact.email}"`, `mailto:${contact.email}`]),
		L(0, ['k', 'readonly '], ['v', 'PHONE'], ['x', '='], ['s', `"${contact.phone}"`, contact.phoneHref]),
		L(0, ['k', 'readonly '], ['v', 'LINKEDIN'], ['x', '='], ['s', `"${contact.linkedin}"`, contact.linkedin]),
		L(0, ['k', 'readonly '], ['v', 'LOCATION'], ['x', '='], ['s', `"${contact.location}"`]),
		L(0),
		L(0, ['f', 'send_message'], ['x', '() {']),
		L(1, ['k', 'local '], ['v', 'name'], ['x', '='], ['s', '"$1"'], ['t', ' '], ['v', 'from'], ['x', '='], ['s', '"$2"'], ['t', ' '], ['v', 'message'], ['x', '='], ['s', '"$3"']),
		L(1, ['k', 'printf'], ['t', ' '], ['s', "'From: %s <%s>\\n\\n%s\\n'"], ['t', ' '], ['s', '"$name"'], ['t', ' '], ['s', '"$from"'], ['t', ' '], ['s', '"$message"'], ['t', ' \\']),
		L(2, ['x', '| '], ['k', 'mail'], ['t', ' -s '], ['s', '"Hello from your portfolio"'], ['t', ' '], ['s', '"$EMAIL"']),
		L(0, ['x', '}']),
		L(0),
		L(0, ['f', 'send_message'], ['t', ' '], ['s', '"$@"']),
	],
};

/* ---------- README.md (rendered preview for recruiters) ---------- */

const readmeFile = {
	id: 'README.md',
	name: 'README.md',
	icon: 'md',
	lang: 'Markdown Preview',
	kind: 'readme',
};

export const files = [readmeFile, ...experienceFiles, ...projectFiles, ...assetFiles, skillsFile, educationFile, contactFile, typesFile];
export const fileById = Object.fromEntries(files.map((f) => [f.id, f]));

// Sorted like a real editor: folders first, then files alphabetically (case-insensitive).
const byName = (a, b) => fileName(a).localeCompare(fileName(b), 'en', { sensitivity: 'base' });
const folder = (name, list) => ({ type: 'folder', name, children: list.map((f) => f.id).sort(byName) });

export const tree = [
	folder('assets', assetFiles),
	folder('experience', experienceFiles),
	folder('projects', projectFiles),
	...[contactFile, educationFile, readmeFile, skillsFile, typesFile]
		.map((f) => f.id)
		.sort(byName)
		.map((id) => ({ type: 'file', id })),
];

export const shortcuts = {
	about: readmeFile.id,
	experience: experienceFiles[0].id,
	projects: projectFiles[0].id,
	skills: skillsFile.id,
	education: educationFile.id,
	contact: contactFile.id,
};
