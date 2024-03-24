import styles from './signature.module.css';

export const Signature = () => {
	return (
		<p className={styles.signature}>
			made by{' '}
			<a
				href="https://github.com/Deemon13"
				target="blank"
				className={styles.profile}
			>
				Deemon
			</a>
		</p>
	);
};
