import styles from './informationLayout.module.css';

export const InformationLayout = ({ status }) => {
	return (
		<div className={styles.container}>
			<p className={`${styles.status}`}>{status}</p>
		</div>
	);
};
