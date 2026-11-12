const base = (props) => ({
	width: 18,
	height: 18,
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: 1.8,
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
	'aria-hidden': true,
	...props,
});

export const FilesIcon = (p) => (
	<svg {...base(p)}>
		<path d="M14 3H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7z" />
		<path d="M14 3v4h4M9 21h8a2 2 0 0 0 2-2V9" />
	</svg>
);
export const SearchIcon = (p) => (
	<svg {...base(p)}>
		<circle cx="11" cy="11" r="7" />
		<path d="m20 20-3.5-3.5" />
	</svg>
);
export const TerminalIcon = (p) => (
	<svg {...base(p)}>
		<rect x="3" y="4" width="18" height="16" rx="2" />
		<path d="m7 9 3 3-3 3M13 15h4" />
	</svg>
);
export const BranchIcon = (p) => (
	<svg {...base(p)}>
		<circle cx="6" cy="5" r="2" />
		<circle cx="6" cy="19" r="2" />
		<circle cx="18" cy="7" r="2" />
		<path d="M6 7v10M18 9c0 5-6 4-12 8" />
	</svg>
);
export const CloseIcon = (p) => (
	<svg {...base(p)}>
		<path d="M6 6l12 12M18 6 6 18" />
	</svg>
);
export const MenuIcon = (p) => (
	<svg {...base(p)}>
		<path d="M4 7h16M4 12h16M4 17h16" />
	</svg>
);
export const ChevronIcon = (p) => (
	<svg {...base(p)}>
		<path d="m9 6 6 6-6 6" />
	</svg>
);
export const PlayIcon = (p) => (
	<svg {...base({ ...p, fill: 'currentColor', stroke: 'none' })}>
		<path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5Z" />
	</svg>
);
export const MailIcon = (p) => (
	<svg {...base(p)}>
		<rect x="3" y="5" width="18" height="14" rx="2" />
		<path d="m3 7 9 6 9-6" />
	</svg>
);
export const ExternalIcon = (p) => (
	<svg {...base(p)}>
		<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
	</svg>
);
export const LinkedInIcon = (p) => (
	<svg {...base({ ...p, fill: 'currentColor', stroke: 'none' })}>
		<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
	</svg>
);

const fileIconLabel = { md: 'M↓', ts: 'TS', json: '{}', yml: 'Y', sh: '$' };
export const FileIcon = ({ type }) => (
	<span className={`ficon ficon--${type}`} aria-hidden>
		{fileIconLabel[type]}
	</span>
);
