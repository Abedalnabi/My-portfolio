import { useEffect, useMemo, useRef, useState } from 'react';
import { files } from '../files';
import { FileIcon } from './Icons';

const CommandPalette = ({ onOpen, onClose }) => {
	const [query, setQuery] = useState('');
	const [index, setIndex] = useState(0);
	const inputRef = useRef(null);

	useEffect(() => inputRef.current?.focus(), []);

	const results = useMemo(() => {
		const q = query.toLowerCase().trim();
		return q ? files.filter((f) => f.id.toLowerCase().includes(q)) : files;
	}, [query]);

	const choose = (f) => {
		if (!f) return;
		onOpen(f.id);
		onClose();
	};

	const onKeyDown = (e) => {
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			setIndex((i) => Math.min(i + 1, results.length - 1));
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			setIndex((i) => Math.max(i - 1, 0));
		} else if (e.key === 'Enter') {
			choose(results[index]);
		} else if (e.key === 'Escape') {
			onClose();
		}
	};

	return (
		<div className="palette-backdrop" onMouseDown={onClose}>
			<div className="palette" role="dialog" aria-label="Go to file" onMouseDown={(e) => e.stopPropagation()}>
				<input
					ref={inputRef}
					value={query}
					onChange={(e) => {
						setQuery(e.target.value);
						setIndex(0);
					}}
					onKeyDown={onKeyDown}
					placeholder="Go to file…"
					aria-label="Search files"
				/>
				<ul>
					{results.map((f, i) => (
						<li key={f.id}>
							<button className={i === index ? 'is-active' : ''} onMouseEnter={() => setIndex(i)} onClick={() => choose(f)}>
								<FileIcon type={f.icon} />
								<span>{f.name}</span>
								<span className="palette__path">{f.id.includes('/') ? f.id.split('/')[0] : ''}</span>
							</button>
						</li>
					))}
					{!results.length && <li className="palette__empty">No matching files</li>}
				</ul>
			</div>
		</div>
	);
};

export default CommandPalette;
