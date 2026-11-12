const CodeView = ({ lines }) => (
	<div className="code" role="region" aria-label="Source code">
		{lines.map((line, i) => (
			<div className="code__line" key={i}>
				<span className="code__num" aria-hidden>
					{i + 1}
				</span>
				<span className="code__text" style={{ paddingLeft: `${line.indent * 2}ch` }}>
					{line.tokens.length === 0
						? ' '
						: line.tokens.map(([type, text, href], j) =>
								href ? (
									<a
										key={j}
										className={`tk-${type} tk-link`}
										href={href}
										target={href.startsWith('http') ? '_blank' : undefined}
										rel="noreferrer"
									>
										{text}
									</a>
								) : (
									<span key={j} className={`tk-${type}`}>
										{text}
									</span>
								)
						  )}
				</span>
			</div>
		))}
	</div>
);

export default CodeView;
