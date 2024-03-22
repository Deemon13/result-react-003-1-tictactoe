import { Field, Information } from '../../components';
import styles from './gameLayout.module.css';

import { field as fieldArr } from '../../data/field';

export const GameLayout = ({
	field,
	updateField,
	player,
	togglePlayer,
	isDraw,
	setIsDraw,
	isGameEnded,
	setIsGameEnded,
}) => {
	function handleResetGame() {
		togglePlayer('X');
		setIsDraw(false);
		setIsGameEnded(false);
		updateField([...fieldArr]);
	}
	return (
		<div className={styles.gameLayout}>
			Tic Tac Toe
			<Information player={player} isDraw={isDraw} isGameEnded={isGameEnded} />
			<Field
				field={field}
				updateField={updateField}
				togglePlayer={togglePlayer}
				player={player}
			/>
			<button type="button" onClick={handleResetGame}>
				Restart game
			</button>
		</div>
	);
};
