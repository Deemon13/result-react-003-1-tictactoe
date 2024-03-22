import { Field, Information } from '../../components';
import styles from './gameLayout.module.css';

export const GameLayout = ({ field, updateField, player, togglePlayer }) => {
	return (
		<div className={styles.gameLayout}>
			Tic Tac Toe
			<Information player={player} />
			<Field
				field={field}
				updateField={updateField}
				togglePlayer={togglePlayer}
				player={player}
			/>
			<button>Restart game</button>
		</div>
	);
};
