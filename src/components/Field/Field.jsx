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
							updateField(
								field.map((findItem, findIndex) => {
									if (findIndex === idx) {
										return (findItem = player);
									} else {
										return findItem;
									}
								}),
							);
							togglePlayer((player = player === 'X' ? '0' : 'X'));
						}}
					>
						{item}
					</button>
				);
			})}
		</div>
	);
};
