export const Field = ({ field, handleClick }) => {
	return (
		<div>
			<p>Field</p>
			{field.map((item, idx) => {
				return (
					<button key={idx} type="button" onClick={() => handleClick(idx)}>
						{item}
					</button>
				);
			})}
		</div>
	);
};
