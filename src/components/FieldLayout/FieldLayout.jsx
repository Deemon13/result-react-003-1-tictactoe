import PropTypes from 'prop-types';

import styles from './fieldLayout.module.css';

export const FieldLayout = ({ field, handleClick }) => {
	return (
		<div className={styles.container}>
			<p className={styles.fieldTitle}>Tic Tac Toe</p>
			<div className={styles.field}>
				{field.map((item, idx) => {
					return (
						<a
							key={idx}
							onClick={() => handleClick(idx)}
							className={`${styles.fieldCell} ${
								item === 'X'
									? styles['fieldCell-green']
									: styles['fieldCell-red']
							}`}
						>
							{item}
						</a>
					);
				})}
			</div>
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleClick: PropTypes.func,
};
