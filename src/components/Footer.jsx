import { styles } from '../styles';
import { contact, navLinks } from '../constants';
import { LinkedInIcon, MailIcon } from './Icons';

const Footer = () => (
	<footer className={`relative z-10 border-t border-white/5 ${styles.paddingX} py-10`}>
		<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
			<div className="text-center md:text-left">
				<p className="font-display text-white text-[18px] font-bold">Mohammad Abedalnabi</p>
				<p className="text-secondary text-[14px]">Full Stack &amp; AI Engineer · {contact.location}</p>
			</div>

			<ul className="flex flex-wrap justify-center gap-6">
				{navLinks.map((nav) => (
					<li key={nav.id}>
						<a href={`#${nav.id}`} className="text-secondary hover:text-white text-[14px] font-semibold transition-colors">
							{nav.title}
						</a>
					</li>
				))}
			</ul>

			<div className="flex items-center gap-2">
				<a
					href={contact.linkedin}
					target="_blank"
					rel="noreferrer"
					aria-label="LinkedIn"
					className="grid place-items-center w-10 h-10 rounded-full border border-white/10 text-secondary hover:text-white hover:border-accent/70 transition-colors"
				>
					<LinkedInIcon width={16} height={16} />
				</a>
				<a
					href={`mailto:${contact.email}`}
					aria-label="Email"
					className="grid place-items-center w-10 h-10 rounded-full border border-white/10 text-secondary hover:text-white hover:border-accent/70 transition-colors"
				>
					<MailIcon width={16} height={16} />
				</a>
			</div>
		</div>
		<p className="mt-8 text-center text-[13px] text-secondary/70">
			© {new Date().getFullYear()} Mohammad Abedalnabi. All rights reserved.
		</p>
	</footer>
);

export default Footer;
