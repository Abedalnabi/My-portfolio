import { useEffect, useState } from 'react';
import { fileById, tree } from '../files';
import { ChevronIcon, FileIcon } from './Icons';

const FileRow = ({ id, depth, active, onOpen }) => {
	const f = fileById[id];
	return (
		<li>
			<button
				className={`tree-row${active === id ? ' is-active' : ''}`}
				style={{ paddingLeft: 12 + depth * 14 }}
				onClick={() => onOpen(id)}
				aria-current={active === id ? 'page' : undefined}
			>
				<FileIcon type={f.icon} />
				<span>{f.name}</span>
			</button>
		</li>
	);
};

const Explorer = ({ active, onOpen }) => {
	const [open, setOpen] = useState({ assets: false, experience: true, projects: true });

	// Reveal the active file if it sits inside a collapsed folder.
	useEffect(() => {
		const dir = active?.includes('/') && active.split('/')[0];
		if (dir) setOpen((o) => (o[dir] ? o : { ...o, [dir]: true }));
	}, [active]);

	return (
		<div className="explorer">
			<p className="panel-title">Explorer</p>
			<p className="explorer__root">
				<ChevronIcon width={14} height={14} className="chev is-open" /> portfolio
			</p>
			<ul className="tree">
				{tree.map((node) =>
					node.type === 'file' ? (
						<FileRow key={node.id} id={node.id} depth={1} active={active} onOpen={onOpen} />
					) : (
						<li key={node.name}>
							<button
								className="tree-row tree-row--folder"
								style={{ paddingLeft: 12 + 14 }}
								aria-expanded={open[node.name]}
								onClick={() => setOpen((o) => ({ ...o, [node.name]: !o[node.name] }))}
							>
								<ChevronIcon width={14} height={14} className={`chev${open[node.name] ? ' is-open' : ''}`} />
								<span>{node.name}</span>
							</button>
							{open[node.name] && (
								<ul>
									{node.children.map((id) => (
										<FileRow key={id} id={id} depth={2} active={active} onOpen={onOpen} />
									))}
								</ul>
							)}
						</li>
					)
				)}
			</ul>
		</div>
	);
};

export default Explorer;
