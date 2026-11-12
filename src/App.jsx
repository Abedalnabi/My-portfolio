import { useCallback, useEffect, useRef, useState } from 'react';
import { contact, profile } from './data';
import { fileById } from './files';
import Explorer from './components/Explorer';
import CodeView from './components/CodeView';
import ContactForm from './components/ContactForm';
import Terminal from './components/Terminal';
import CommandPalette from './components/CommandPalette';
import { ProjectPreview, Readme } from './components/Previews';
import {
	BranchIcon,
	CloseIcon,
	FileIcon,
	FilesIcon,
	LinkedInIcon,
	MailIcon,
	MenuIcon,
	SearchIcon,
	TerminalIcon,
} from './components/Icons';

const DEFAULT = 'README.md';
const fromHash = () => {
	const id = decodeURIComponent(window.location.hash.slice(1));
	return fileById[id] ? id : DEFAULT;
};

const App = () => {
	const initial = fromHash();
	const [tabs, setTabs] = useState(initial === DEFAULT ? [DEFAULT] : [DEFAULT, initial]);
	const [active, setActive] = useState(initial);
	const [sidebar, setSidebar] = useState(() => window.matchMedia('(min-width: 900px)').matches);
	const [terminal, setTerminal] = useState(() => window.matchMedia('(min-width: 900px)').matches);
	const [palette, setPalette] = useState(false);
	const editorRef = useRef(null);

	const isMobile = () => !window.matchMedia('(min-width: 900px)').matches;

	const open = useCallback((id) => {
		if (!fileById[id]) return;
		setTabs((t) => (t.includes(id) ? t : [...t, id]));
		setActive(id);
		if (isMobile()) setSidebar(false);
	}, []);

	const close = (id) => {
		setTabs((t) => {
			const next = t.filter((x) => x !== id);
			if (id === active) setActive(next[Math.max(0, t.indexOf(id) - 1)] || null);
			return next;
		});
	};

	useEffect(() => {
		if (active) window.history.replaceState(null, '', `#${active}`);
		else window.history.replaceState(null, '', window.location.pathname);
		editorRef.current?.scrollTo({ top: 0 });
		const f = active && fileById[active];
		document.title = f ? `${f.name} — ${profile.name}` : `${profile.name} | ${profile.role}`;
	}, [active]);

	useEffect(() => {
		const onKey = (e) => {
			const mod = e.ctrlKey || e.metaKey;
			if (mod && (e.key === 'p' || e.key === 'k')) {
				e.preventDefault();
				setPalette((p) => !p);
			} else if (mod && e.key === '`') {
				e.preventDefault();
				setTerminal((t) => !t);
			} else if (mod && e.key === 'b') {
				e.preventDefault();
				setSidebar((s) => !s);
			}
		};
		const onHash = () => open(fromHash());
		window.addEventListener('keydown', onKey);
		window.addEventListener('hashchange', onHash);
		return () => {
			window.removeEventListener('keydown', onKey);
			window.removeEventListener('hashchange', onHash);
		};
	}, [open]);

	const file = active ? fileById[active] : null;
	const crumbs = file ? file.id.split('/') : [];
	const lineCount = file?.lines?.length;

	return (
		<div className={`ide${sidebar ? ' has-sidebar' : ''}${terminal ? ' has-terminal' : ''}`}>
			<header className="titlebar">
				<div className="titlebar__dots" aria-hidden>
					<i />
					<i />
					<i />
				</div>
				<button className="icon-btn titlebar__menu" onClick={() => setSidebar((s) => !s)} aria-label="Toggle file explorer">
					<MenuIcon />
				</button>
				<button className="titlebar__search" onClick={() => setPalette(true)}>
					<SearchIcon width={14} height={14} />
					<span>{profile.name.toLowerCase().replace(' ', '-')}</span>
					<kbd>Ctrl P</kbd>
				</button>
				<button className="titlebar__cta" onClick={() => open('contact.sh')}>
					Hire me
				</button>
			</header>

			<nav className="activity" aria-label="Views">
				<button className={`icon-btn${sidebar ? ' is-on' : ''}`} onClick={() => setSidebar((s) => !s)} aria-label="Explorer" title="Explorer (Ctrl+B)">
					<FilesIcon width={22} height={22} />
				</button>
				<button className="icon-btn" onClick={() => setPalette(true)} aria-label="Search files" title="Go to file (Ctrl+P)">
					<SearchIcon width={22} height={22} />
				</button>
				<button className={`icon-btn${terminal ? ' is-on' : ''}`} onClick={() => setTerminal((t) => !t)} aria-label="Toggle terminal" title="Terminal (Ctrl+`)">
					<TerminalIcon width={22} height={22} />
				</button>
				<span className="activity__spacer" />
				<a className="icon-btn" href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
					<LinkedInIcon width={19} height={19} />
				</a>
				<a className="icon-btn" href={`mailto:${contact.email}`} aria-label="Email" title={contact.email}>
					<MailIcon width={21} height={21} />
				</a>
			</nav>

			<aside className="sidebar" aria-label="File explorer">
				<Explorer active={active} onOpen={open} />
			</aside>
			{sidebar && <div className="scrim" onClick={() => setSidebar(false)} aria-hidden />}

			<main className="workbench">
				<div className="tabs" role="tablist" aria-label="Open files">
					{tabs.map((id) => {
						const f = fileById[id];
						return (
							<div key={id} className={`tab${id === active ? ' is-active' : ''}`}>
								<button role="tab" aria-selected={id === active} onClick={() => setActive(id)}>
									<FileIcon type={f.icon} />
									{f.name}
								</button>
								<button className="tab__close" onClick={() => close(id)} aria-label={`Close ${f.name}`}>
									<CloseIcon width={13} height={13} />
								</button>
							</div>
						);
					})}
				</div>

				{file && (
					<div className="crumbs">
						<span>portfolio</span>
						{crumbs.map((c) => (
							<span key={c}>{c}</span>
						))}
					</div>
				)}

				<div className="editor" ref={editorRef}>
					{!file && (
						<div className="empty">
							<p className="empty__logo">{profile.initials}</p>
							<ul>
								<li>
									Go to file <kbd>Ctrl</kbd> <kbd>P</kbd>
								</li>
								<li>
									Toggle terminal <kbd>Ctrl</kbd> <kbd>`</kbd>
								</li>
								<li>
									<button onClick={() => open(DEFAULT)}>Open README.md</button>
								</li>
							</ul>
						</div>
					)}
					{file?.kind === 'code' && (
						<>
							<CodeView lines={file.lines} />
							{file.withForm && <ContactForm />}
						</>
					)}
					{file?.view === 'readme' && <Readme onOpen={open} />}
					{file?.view === 'project' && <ProjectPreview project={file.data} />}
				</div>

				{terminal && <Terminal onOpen={open} onClose={() => setTerminal(false)} />}
			</main>

			<footer className="statusbar">
				<span className="statusbar__item statusbar__item--accent">
					<BranchIcon width={13} height={13} /> main
				</span>
				<span className="statusbar__item">
					<span className="pulse" aria-hidden /> Open to opportunities
				</span>
				<span className="statusbar__spacer" />
				{lineCount && <span className="statusbar__item statusbar__item--hide-sm">{lineCount} lines</span>}
				<span className="statusbar__item statusbar__item--hide-sm">UTF-8</span>
				{file && <span className="statusbar__item">{file.lang}</span>}
				<button className="statusbar__item" onClick={() => setTerminal((t) => !t)}>
					<TerminalIcon width={13} height={13} /> Terminal
				</button>
			</footer>

			{palette && <CommandPalette onOpen={open} onClose={() => setPalette(false)} />}
		</div>
	);
};

export default App;
