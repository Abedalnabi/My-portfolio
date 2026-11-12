import { useEffect, useRef, useState } from 'react';
import { contact, experiences, profile, projects } from '../data';
import { files, shortcuts } from '../files';
import { CloseIcon } from './Icons';

const PROMPT = 'guest@mohammad';

const commandHelp = [
	['help', 'list available commands'],
	['whoami', 'who I am, in one line'],
	['ls', 'list all files'],
	['open <file>', 'open a file in the editor (Tab completes)'],
	['about · experience · projects', 'jump to a section'],
	['skills · education · contact', 'more sections'],
	['email · linkedin', 'reach me directly'],
	['clear', 'clear the terminal'],
];

const quick = ['help', 'whoami', 'experience', 'projects', 'contact'];

const findFile = (arg) => {
	if (!arg) return null;
	const a = arg.toLowerCase().replace(/^\.\//, '');
	return files.find((f) => f.id.toLowerCase() === a) || files.find((f) => f.name.toLowerCase() === a) || files.find((f) => f.id.toLowerCase().includes(a));
};

const welcome = [
	{ type: 'out', text: `Welcome to ${profile.name}'s portfolio. v2.0.0` },
	{ type: 'out', text: 'Type "help" to see what you can do, or pick a file from the explorer.', muted: true },
];

const Terminal = ({ onOpen, onClose }) => {
	const [lines, setLines] = useState(welcome);
	const [value, setValue] = useState('');
	const [history, setHistory] = useState([]);
	const [hIndex, setHIndex] = useState(-1);
	const bodyRef = useRef(null);
	const inputRef = useRef(null);

	useEffect(() => {
		bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
	}, [lines]);

	const run = (raw) => {
		const input = raw.trim();
		const echo = { type: 'cmd', text: input };
		if (!input) return setLines((l) => [...l, echo]);

		const [cmd, ...args] = input.split(/\s+/);
		const arg = args.join(' ');
		const out = [];
		const say = (text, extra = {}) => out.push({ type: 'out', text, ...extra });
		const openFile = (id) => {
			onOpen(id);
			say(`opened ${id}`, { ok: true });
		};

		switch (cmd.toLowerCase()) {
			case 'help':
				commandHelp.forEach(([c, d]) => out.push({ type: 'help', cmd: c, desc: d }));
				break;
			case 'whoami':
				say(`${profile.name} — ${profile.role}. ${profile.currently}, based in ${contact.location}.`);
				break;
			case 'ls':
				files.forEach((f) => say(f.id, { file: f.id }));
				break;
			case 'open':
			case 'cat':
			case 'code':
			case 'vim': {
				const f = findFile(arg);
				if (f) openFile(f.id);
				else say(`${cmd}: ${arg || 'missing file'}: no such file. Try "ls".`, { err: true });
				break;
			}
			case 'about':
			case 'readme':
				openFile(shortcuts.about);
				break;
			case 'experience':
			case 'work':
				experiences.forEach((j) => say(`${j.date.padEnd(20)} ${j.title} @ ${j.company}`));
				openFile(shortcuts.experience);
				break;
			case 'projects':
				projects.forEach((p) => say(`• ${p.name} — ${p.link}`));
				openFile(shortcuts.projects);
				break;
			case 'skills':
				openFile(shortcuts.skills);
				break;
			case 'education':
				openFile(shortcuts.education);
				break;
			case 'contact':
			case './contact.sh':
				say(`email     ${contact.email}`);
				say(`phone     ${contact.phone}`);
				say(`linkedin  ${contact.linkedin}`);
				openFile(shortcuts.contact);
				break;
			case 'email':
				window.location.href = `mailto:${contact.email}`;
				say(`opening mail client → ${contact.email}`, { ok: true });
				break;
			case 'linkedin':
				window.open(contact.linkedin, '_blank', 'noreferrer');
				say('opening LinkedIn in a new tab…', { ok: true });
				break;
			case 'sudo':
				say(arg.includes('hire') ? 'Permission granted. Great choice! Opening contact.sh…' : `sudo: nice try 🙂`, { ok: true });
				if (arg.includes('hire')) onOpen(shortcuts.contact);
				break;
			case 'echo':
				say(arg);
				break;
			case 'date':
				say(new Date().toString());
				break;
			case 'pwd':
				say('/home/mohammad/portfolio');
				break;
			case 'exit':
				onClose();
				return;
			case 'clear':
				setLines([]);
				setHistory((h) => [input, ...h]);
				return;
			default:
				say(`command not found: ${cmd}. Type "help".`, { err: true });
		}

		setHistory((h) => [input, ...h]);
		setLines((l) => [...l, echo, ...out]);
	};

	const onKeyDown = (e) => {
		if (e.key === 'Enter') {
			run(value);
			setValue('');
			setHIndex(-1);
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			const i = Math.min(hIndex + 1, history.length - 1);
			if (history[i] !== undefined) {
				setHIndex(i);
				setValue(history[i]);
			}
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			const i = hIndex - 1;
			setHIndex(Math.max(i, -1));
			setValue(i < 0 ? '' : history[i]);
		} else if (e.key === 'Tab') {
			e.preventDefault();
			const m = value.match(/^(open|cat|code|vim)\s+(.*)$/i);
			if (m) {
				const match = files.find((f) => f.id.toLowerCase().startsWith(m[2].toLowerCase()) || f.name.toLowerCase().startsWith(m[2].toLowerCase()));
				if (match) setValue(`${m[1]} ${match.id}`);
			} else {
				const cmds = ['help', 'whoami', 'ls', 'open ', 'about', 'experience', 'projects', 'skills', 'education', 'contact', 'email', 'linkedin', 'clear'];
				const match = cmds.find((c) => c.startsWith(value.toLowerCase()));
				if (match && value) setValue(match);
			}
		} else if (e.key === 'l' && e.ctrlKey) {
			e.preventDefault();
			setLines([]);
		}
	};

	return (
		<section className="terminal" aria-label="Terminal">
			<header className="terminal__head">
				<span className="panel-tab is-active">Terminal</span>
				<span className="panel-tab">Problems <b>0</b></span>
				<span className="panel-tab panel-tab--hide-sm">Output</span>
				<button className="icon-btn terminal__close" onClick={onClose} aria-label="Close terminal">
					<CloseIcon width={15} height={15} />
				</button>
			</header>
			<div className="terminal__body" ref={bodyRef} onClick={() => window.getSelection()?.toString() || inputRef.current?.focus()}>
				{lines.map((l, i) =>
					l.type === 'cmd' ? (
						<p key={i} className="tl">
							<span className="tl__prompt">{PROMPT}</span>
							<span className="tl__path">:~$</span> {l.text}
						</p>
					) : l.type === 'help' ? (
						<p key={i} className="tl tl--help">
							<span className="tl__cmd">{l.cmd}</span>
							<span className="tl__muted">{l.desc}</span>
						</p>
					) : (
						<p key={i} className={`tl${l.err ? ' tl--err' : ''}${l.ok ? ' tl--ok' : ''}${l.muted ? ' tl__muted' : ''}`}>
							{l.file ? (
								<button className="tl__file" onClick={() => onOpen(l.file)}>
									{l.text}
								</button>
							) : (
								l.text
							)}
						</p>
					)
				)}
				<label className="tl tl--input">
					<span className="tl__prompt">{PROMPT}</span>
					<span className="tl__path">:~$</span>
					<input
						ref={inputRef}
						value={value}
						onChange={(e) => setValue(e.target.value)}
						onKeyDown={onKeyDown}
						spellCheck={false}
						autoCapitalize="off"
						autoComplete="off"
						aria-label="Terminal command"
					/>
				</label>
			</div>
			<div className="terminal__quick">
				{quick.map((c) => (
					<button key={c} onClick={() => run(c)}>
						{c}
					</button>
				))}
			</div>
		</section>
	);
};

export default Terminal;
