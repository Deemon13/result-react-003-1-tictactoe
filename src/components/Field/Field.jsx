import { useState } from 'react';

export const Field = ({ field, updateField, player, togglePlayer }) => {
	// const [isDisabled, setIsDisabled] = useState(false);

	function handleClickOnFieldBtn(id) {
		updateField(
			field.map((findItem, findIndex) => {
				if (findIndex === id) {
					return (findItem = player);
				} else {
					return findItem;
				}
			}),
		);

		togglePlayer((player = player === 'X' ? '0' : 'X'));

		isEmptyField();

		// setIsDisabled(!isDisabled);
	}

	function isEmptyField() {
		const isEmptyField = field.some(item => !item);
		if (isEmptyField) {
			console.log('Есть пустые ячейки');
		} else {
			console.log('Закончились пустые ячейки');
		}
	}

	return (
		<div>
			<p>Field</p>
			{field.map((item, idx) => {
				return (
					<button
						key={idx}
						type="button"
						// disabled={isDisabled ? true : false}
						onClick={() => handleClickOnFieldBtn(idx)}
					>
						{item}
					</button>
				);
			})}
		</div>
	);
};
