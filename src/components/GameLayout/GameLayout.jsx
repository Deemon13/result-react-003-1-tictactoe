import { Field, Information } from '../../components';
import styles from './gameLayout.module.css';

export const GameLayout = ({ status, field, handleClick, player, resetGame }) => {
	return (
		<div className={styles.gameLayout}>
			Tic Tac Toe
			<Information status={status} player={player} />
			<Field field={field} handleClick={handleClick} />
			<button type="button" onClick={() => resetGame()}>
				Restart game
			</button>
		</div>
	);
};
