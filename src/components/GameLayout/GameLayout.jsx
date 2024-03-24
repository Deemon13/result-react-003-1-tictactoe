import PropTypes from 'prop-types';

import { Field, Information, Signature } from '../../components';

import styles from './gameLayout.module.css';

export const GameLayout = ({ status, player, field, handleClick, resetGame }) => {
	return (
		<div className={styles.gameLayout}>
			<Information status={status} player={player} />
			<Field field={field} handleClick={handleClick} />
			{field.some(el => el !== '') && (
				<button
					type="button"
					onClick={() => resetGame()}
					className={styles.gameBtnReset}
				>
					Начать заново
				</button>
			)}
			<Signature />
		</div>
	);
};

GameLayout.propTypes = {
	status: PropTypes.string,
	field: PropTypes.array,
	player: PropTypes.string,
	handleClick: PropTypes.func,
	resetGame: PropTypes.func,
};
