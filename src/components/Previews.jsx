import { useEffect, useState } from 'react';
import { contact, education, experiences, languages, profile, projects, services, skillGroups, technologies } from '../data';
import ContactForm from './ContactForm';
import { ExternalIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from './Icons';

const cap = (t) => t.charAt(0).toUpperCase() + t.slice(1);

const channels = [
	{ label: 'Email', value: contact.email, href: `mailto:${contact.email}`, Icon: MailIcon },
	{ label: 'Phone', value: contact.phone, href: contact.phoneHref, Icon: PhoneIcon },
	{ label: 'LinkedIn', value: 'mohammad-alnabalebe', href: contact.linkedin, Icon: LinkedInIcon, external: true },
	{ label: 'Location', value: contact.location, Icon: PinIcon },
];

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

export const Readme = () => (
	<article className="md">
		{/* Header */}
		<p className="md__eyebrow">
			<span className="pulse" aria-hidden /> {profile.currently} · {contact.location}
		</p>
		<h1 className="md__title">{profile.name}</h1>
		<p className="md__role">{profile.role}</p>
		<p className="md__lead">{profile.tagline}</p>

		<div className="md__actions">
			<button className="btn btn--primary" onClick={() => scrollTo('contact')}>
				<MailIcon width={16} height={16} /> Contact me
			</button>
			<button className="btn" onClick={() => scrollTo('experience')}>
				Experience
			</button>
			<button className="btn" onClick={() => scrollTo('projects')}>
				Projects
			</button>
			<a className="btn btn--icon" href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
				<LinkedInIcon width={16} height={16} />
			</a>
		</div>

		{/* About */}
		<h2 id="about">About</h2>
		{profile.about.map((p) => (
			<p key={p.slice(0, 24)} className="md__p">
				{p}
			</p>
		))}

		<h2 id="services">What I do</h2>
		<ul className="services">
			{services.map((s) => (
				<li key={s.title}>
					<h3>{s.title}</h3>
					<p>{s.description}</p>
				</li>
			))}
		</ul>

		{/* Experience */}
		<h2 id="experience">Experience</h2>
		<ol className="jobs">
			{experiences.map((job) => (
				<li key={job.company} className="job">
					<header className="job__head">
						{job.logo ? (
							<img src={job.logo} alt="" className="job__logo" />
						) : (
							<span className="job__logo job__logo--text">{job.logoText}</span>
						)}
						<div className="job__titles">
							<h3>{job.title}</h3>
							<p>
								{job.company} · {job.location}
							</p>
						</div>
						<p className="job__date">
							{job.date.includes('Present') && <span className="pulse" aria-hidden />}
							{job.date}
						</p>
					</header>
					<ul className="job__points">
						{job.points.map((point) => {
							const [lead, ...rest] = point.split(': ');
							return (
								<li key={point}>
									{rest.length ? (
										<>
											<strong>{lead}:</strong> {cap(rest.join(': '))}
										</>
									) : (
										point
									)}
								</li>
							);
						})}
					</ul>
				</li>
			))}
		</ol>

		{/* Projects */}
		<h2 id="projects">Projects</h2>
		<ul className="projects">
			{projects.map((p) => (
				<li key={p.name} className="project">
					<a className="project__shot" href={p.link} target="_blank" rel="noreferrer" aria-label={`Open ${p.name}`}>
						<img src={p.image} alt={`Screenshot of ${p.name}`} loading="lazy" />
					</a>
					<div className="project__body">
						<h3>{p.name}</h3>
						<p>{p.description}</p>
						<ul className="chips">
							{p.tags.map((t) => (
								<li key={t}>{t}</li>
							))}
						</ul>
						<a className="project__link" href={p.link} target="_blank" rel="noreferrer">
							Visit live site <ExternalIcon width={14} height={14} />
						</a>
					</div>
				</li>
			))}
		</ul>

		{/* Skills */}
		<h2 id="skills">Skills</h2>
		<dl className="skills">
			{skillGroups.map((g) => (
				<div key={g.title}>
					<dt>{g.title}</dt>
					<dd>{g.skills.join(' · ')}</dd>
				</div>
			))}
		</dl>
		<ul className="stack">
			{technologies.map((t) => (
				<li key={t.name}>
					<img src={t.icon} alt="" />
					{t.name}
				</li>
			))}
		</ul>

		{/* Education */}
		<h2 id="education">Education</h2>
		<ul className="edu">
			{education.map((e) => (
				<li key={e.title}>
					<div>
						<h3>{e.title}</h3>
						<p className="edu__school">
							{e.school} · {e.location}
						</p>
						{e.note && <p className="edu__note">{e.note}</p>}
					</div>
					<p className="edu__date">{e.date}</p>
				</li>
			))}
		</ul>

		<h2 id="languages">Languages</h2>
		<ul className="chips chips--plain">
			{languages.map((l) => (
				<li key={l}>{l}</li>
			))}
		</ul>

		{/* Contact */}
		<h2 id="contact">Contact</h2>
		<p className="md__p">Working on something with AI or the web? Reach out and I’ll get back to you soon.</p>
		<ul className="channels">
			{channels.map(({ label, value, href, Icon, external }) => {
				const inner = (
					<>
						<span className="channels__icon">
							<Icon width={17} height={17} />
						</span>
						<span>
							<span className="channels__label">{label}</span>
							<span className="channels__value">{value}</span>
						</span>
					</>
				);
				return (
					<li key={label}>
						{href ? (
							<a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
								{inner}
							</a>
						) : (
							<div>{inner}</div>
						)}
					</li>
				);
			})}
		</ul>
		<ContactForm />
	</article>
);

export const ImageView = ({ file }) => {
	const [size, setSize] = useState(null);
	useEffect(() => setSize(null), [file.id]);
	return (
		<figure className="imgview">
			<img
				src={file.src}
				alt={file.alt}
				onLoad={(e) => setSize(`${e.currentTarget.naturalWidth} × ${e.currentTarget.naturalHeight}`)}
			/>
			<figcaption>
				{file.name}
				{size && ` · ${size}`}
			</figcaption>
		</figure>
	);
};
