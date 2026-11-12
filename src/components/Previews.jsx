import { contact, experiences, profile, services, stats, technologies } from '../data';
import { shortcuts, files } from '../files';
import { ExternalIcon, LinkedInIcon, MailIcon, PlayIcon, TerminalIcon } from './Icons';

export const Readme = ({ onOpen }) => (
	<article className="md">
		<p className="md__eyebrow">
			<span className="pulse" aria-hidden /> {profile.currently} · {contact.location}
		</p>
		<h1 className="md__title">{profile.name}</h1>
		<p className="md__role">
			<span className="tk-k">const</span> <span className="tk-v">role</span> <span className="tk-x">=</span>{' '}
			<span className="tk-s">'{profile.role}'</span>
			<span className="tk-x">;</span>
		</p>
		<p className="md__lead">{profile.tagline}</p>

		<div className="md__actions">
			<button className="btn btn--primary" onClick={() => onOpen(shortcuts.experience)}>
				<PlayIcon width={14} height={14} /> View experience
			</button>
			<button className="btn" onClick={() => onOpen(shortcuts.contact)}>
				<TerminalIcon width={16} height={16} /> ./contact.sh
			</button>
			<a className="btn btn--icon" href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
				<LinkedInIcon width={16} height={16} />
			</a>
			<a className="btn btn--icon" href={`mailto:${contact.email}`} aria-label="Email">
				<MailIcon width={16} height={16} />
			</a>
		</div>

		<ul className="stats">
			{stats.map((s) => (
				<li key={s.label}>
					<span className="stats__value">{s.value}</span>
					<span className="stats__label">{s.label}</span>
				</li>
			))}
		</ul>

		<h2>## About</h2>
		{profile.about.map((p) => (
			<p key={p.slice(0, 24)}>{p}</p>
		))}

		<h2>## What I do</h2>
		<ul className="services">
			{services.map((s) => (
				<li key={s.title}>
					<h3>{s.title}</h3>
					<p>{s.description}</p>
				</li>
			))}
		</ul>

		<h2>## Experience</h2>
		<ul className="timeline">
			{experiences.map((job, i) => {
				const file = files.find((f) => f.meta === job);
				return (
					<li key={job.company}>
						<button onClick={() => onOpen(file.id)}>
							<span className="timeline__date">{job.date}</span>
							<span className="timeline__body">
								<strong>{job.title}</strong>
								<span>
									{job.company} · {job.location}
								</span>
							</span>
							<span className="timeline__file">{file.name}</span>
						</button>
						{i === 0 && <span className="sr-only">current role</span>}
					</li>
				);
			})}
		</ul>

		<h2>## Stack</h2>
		<ul className="stack">
			{technologies.map((t) => (
				<li key={t.name}>
					<img src={t.icon} alt="" />
					{t.name}
				</li>
			))}
		</ul>

		<p className="md__hint">
			Tip: press <kbd>Ctrl</kbd> + <kbd>P</kbd> to jump to any file, or type <code>help</code> in the terminal below.
		</p>
	</article>
);

export const ProjectPreview = ({ project }) => (
	<article className="md">
		<p className="md__eyebrow">projects /</p>
		<h1 className="md__title md__title--sm">{project.name}</h1>
		<ul className="chips">
			{project.tags.map((t) => (
				<li key={t}>{t}</li>
			))}
		</ul>
		<a className="shot" href={project.link} target="_blank" rel="noreferrer">
			<span className="shot__bar" aria-hidden>
				<i />
				<i />
				<i />
				<span>{project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
			</span>
			<img src={project.image} alt={`Screenshot of ${project.name}`} />
		</a>
		<p className="md__lead">{project.description}</p>
		<a className="btn btn--primary" href={project.link} target="_blank" rel="noreferrer">
			Open live site <ExternalIcon width={15} height={15} />
		</a>
	</article>
);
