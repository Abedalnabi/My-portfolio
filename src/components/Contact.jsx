import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { contact } from '../constants';
import { ArrowRightIcon, CheckIcon, LinkedInIcon, MailIcon, MapPinIcon, PhoneIcon } from './Icons';

const channels = [
	{ label: 'Email', value: contact.email, href: `mailto:${contact.email}`, Icon: MailIcon, wide: true },
	{ label: 'Phone', value: contact.phone, href: contact.phoneHref, Icon: PhoneIcon },
	{ label: 'LinkedIn', value: 'View my profile', href: contact.linkedin, Icon: LinkedInIcon, external: true },
	{ label: 'Location', value: contact.location, Icon: MapPinIcon },
];

const emptyForm = { name: '', email: '', message: '' };

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState(emptyForm);
	const [status, setStatus] = useState('idle'); // idle | sending | sent | error

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
		if (status !== 'sending') setStatus('idle');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setStatus('sending');

		emailjs
			.send(
				'service_p17g7id',
				'template_s2yip3e',
				{
					from_name: form.name,
					to_name: 'Mohammad abedalnabi',
					from_email: form.email,
					to_email: contact.email,
					message: `Message: ${form.message} Email: ${form.email}`,
				},
				'Z3UUHG4al2c8Ilro9'
			)
			.then(
				() => {
					setStatus('sent');
					setForm(emptyForm);
				},
				(error) => {
					console.error(error);
					setStatus('error');
				}
			);
	};

	return (
		<div className="xl:mt-6 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
			<motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.85] card p-6 sm:p-10">
				<p className={styles.sectionSubText}>Get in touch</p>
				<h2 className={`${styles.sectionHeadText} mt-1`}>Contact.</h2>
				<p className="mt-4 text-[#c3bede] text-[16px] leading-[27px] max-w-xl">
					Working on something with AI or the web? Send me a message and I&apos;ll get back to you as soon as I can.
				</p>

				<ul className="mt-8 grid sm:grid-cols-2 gap-3">
					{channels.map(({ label, value, href, Icon, external, wide }) => {
						const content = (
							<>
								<span className="grid place-items-center w-10 h-10 shrink-0 rounded-xl bg-accent/15 text-[#d9ccff]">
									<Icon width={18} height={18} />
								</span>
								<span className="min-w-0">
									<span className="block text-[12px] uppercase tracking-[0.15em] text-secondary font-semibold">
										{label}
									</span>
									<span className="block truncate text-white text-[14.5px] font-semibold">{value}</span>
								</span>
							</>
						);
						const className =
							'flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-3 transition-colors';
						return (
							<li key={label} className={wide ? 'sm:col-span-2' : ''}>
								{href ? (
									<a
										href={href}
										target={external ? '_blank' : undefined}
										rel={external ? 'noreferrer' : undefined}
										className={`${className} hover:border-accent/60 hover:bg-accent/[0.06]`}
									>
										{content}
									</a>
								) : (
									<div className={className}>{content}</div>
								)}
							</li>
						);
					})}
				</ul>

				<form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
					<div className="grid sm:grid-cols-2 gap-5">
						<label className="flex flex-col gap-2">
							<span className="text-white text-[14px] font-semibold">Your name</span>
							<input
								type="text"
								name="name"
								required
								autoComplete="name"
								value={form.name}
								onChange={handleChange}
								placeholder="What's your name?"
								className="form-field"
							/>
						</label>
						<label className="flex flex-col gap-2">
							<span className="text-white text-[14px] font-semibold">Your email</span>
							<input
								type="email"
								name="email"
								required
								autoComplete="email"
								value={form.email}
								onChange={handleChange}
								placeholder="you@company.com"
								className="form-field"
							/>
						</label>
					</div>
					<label className="flex flex-col gap-2">
						<span className="text-white text-[14px] font-semibold">Your message</span>
						<textarea
							rows={6}
							name="message"
							required
							value={form.message}
							onChange={handleChange}
							placeholder="Tell me about your project or role."
							className="form-field resize-y"
						/>
					</label>

					<div className="flex flex-wrap items-center gap-4">
						<button type="submit" disabled={status === 'sending'} className="btn-primary">
							{status === 'sending' ? 'Sending…' : 'Send message'}
							{status !== 'sending' && <ArrowRightIcon width={18} height={18} />}
						</button>
						<p role="status" aria-live="polite" className="text-[14px] font-semibold">
							{status === 'sent' && (
								<span className="inline-flex items-center gap-1.5 text-emerald-400">
									<CheckIcon width={16} height={16} /> Thanks, I&apos;ll get back to you soon.
								</span>
							)}
							{status === 'error' && (
								<span className="text-rose-400">
									Something went wrong. Please try again or email me directly.
								</span>
							)}
						</p>
					</div>
				</form>
			</motion.div>

			<motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, 'contact');
