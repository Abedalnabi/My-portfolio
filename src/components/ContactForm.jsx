import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { contact, emailjsConfig, profile } from '../data';
import { MailIcon } from './Icons';

const empty = { name: '', email: '', message: '' };

const ContactForm = () => {
	const [form, setForm] = useState(empty);
	const [status, setStatus] = useState('idle');

	const onChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		if (status !== 'sending') setStatus('idle');
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setStatus('sending');
		emailjs
			.send(
				emailjsConfig.serviceId,
				emailjsConfig.templateId,
				{
					from_name: form.name,
					to_name: profile.name,
					from_email: form.email,
					to_email: contact.email,
					message: `Message: ${form.message} Email: ${form.email}`,
				},
				emailjsConfig.publicKey
			)
			.then(
				() => {
					setStatus('sent');
					setForm(empty);
				},
				(err) => {
					console.error(err);
					setStatus('error');
				}
			);
	};

	return (
		<form className="run-form" onSubmit={onSubmit}>
			<div className="run-form__grid">
				<label>
					<span>Name</span>
					<input name="name" required autoComplete="name" value={form.name} onChange={onChange} placeholder="Your name" />
				</label>
				<label>
					<span>Email</span>
					<input
						type="email"
						name="email"
						required
						autoComplete="email"
						value={form.email}
						onChange={onChange}
						placeholder="you@company.com"
					/>
				</label>
				<label className="run-form__wide">
					<span>Message</span>
					<textarea
						name="message"
						rows={5}
						required
						value={form.message}
						onChange={onChange}
						placeholder="Tell me about your project or role…"
					/>
				</label>
			</div>
			<div className="run-form__foot">
				<button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
					<MailIcon width={15} height={15} /> {status === 'sending' ? 'Sending…' : 'Send message'}
				</button>
				<p role="status" aria-live="polite" className={`run-form__out run-form__out--${status}`}>
					{status === 'sending' && 'Sending…'}
					{status === 'sent' && '✓ Message sent. I’ll get back to you soon.'}
					{status === 'error' && `✗ Something went wrong. Email me directly at ${contact.email}`}
				</p>
			</div>
		</form>
	);
};

export default ContactForm;
