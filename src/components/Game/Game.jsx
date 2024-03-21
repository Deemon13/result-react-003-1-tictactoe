import { Field, Information } from '../../components';
import styles from './game.module.css';

export const Game = () => {
	return (
		<div className={styles.game}>
			BEGIN
			<Information />
			<Field />
		</div>
	);
};
