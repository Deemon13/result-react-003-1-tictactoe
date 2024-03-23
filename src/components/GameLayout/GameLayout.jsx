import { Field, Information } from '../../components';
import styles from './gameLayout.module.css';

export const GameLayout = ({ status, field, handleClick, resetGame }) => {
	return (
		<div className={styles.gameLayout}>
			<Information status={status} />
			<Field field={field} handleClick={handleClick} />
			{field.some(el => el !== '') && (
				<button type="button" onClick={() => resetGame()}>
					Restart game
				</button>
			)}
		</div>
	);
};
