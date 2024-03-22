// import { field } from '../../data/field';

export const Field = ({ field, updateField, player, togglePlayer }) => {
	return (
		<div>
			<p>Field</p>
			{field.map((item, idx) => {
				return (
					<button
						key={idx}
						type="button"
						onClick={() => {
							togglePlayer((player = player === 'X' ? '0' : 'X'));
							updateField([...field, field[idx]=player]);
						}}
					>
						{item}
					</button>
				);
			})}
		</div>
	);
};
