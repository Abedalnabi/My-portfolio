const base = {
	width: 20,
	height: 20,
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: 1.8,
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
	'aria-hidden': true,
};

export const MailIcon = (props) => (
	<svg {...base} {...props}>
		<rect x="3" y="5" width="18" height="14" rx="2" />
		<path d="m3 7 9 6 9-6" />
	</svg>
);

export const PhoneIcon = (props) => (
	<svg {...base} {...props}>
		<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
	</svg>
);

export const LinkedInIcon = (props) => (
	<svg {...base} fill="currentColor" stroke="none" {...props}>
		<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.06c.53-1 1.84-2.06 3.8-2.06 4.06 0 4.81 2.67 4.81 6.15V21h-4v-4.93c0-1.18-.02-2.69-1.64-2.69-1.64 0-1.9 1.28-1.9 2.6V21h-4V9.75Z" />
	</svg>
);

export const MapPinIcon = (props) => (
	<svg {...base} {...props}>
		<path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z" />
		<circle cx="12" cy="10" r="2.5" />
	</svg>
);

export const ArrowRightIcon = (props) => (
	<svg {...base} {...props}>
		<path d="M5 12h14M13 6l6 6-6 6" />
	</svg>
);

export const ExternalIcon = (props) => (
	<svg {...base} {...props}>
		<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
	</svg>
);

export const ChevronDownIcon = (props) => (
	<svg {...base} {...props}>
		<path d="m6 9 6 6 6-6" />
	</svg>
);

export const CheckIcon = (props) => (
	<svg {...base} {...props}>
		<path d="m5 12 5 5 9-10" />
	</svg>
);

export const SparkIcon = (props) => (
	<svg {...base} {...props}>
		<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.5 2.5M15.2 15.2l2.5 2.5M6.3 17.7l2.5-2.5M15.2 8.8l2.5-2.5" />
	</svg>
);
