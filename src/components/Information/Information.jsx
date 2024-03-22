import { InformationLayout } from '../../components';

export const Information = ({ player, isDraw, isGameEnded }) => {
	let status;
	if (isDraw) {
		status = 'Ничья';
	} else if (!isDraw && isGameEnded) {
		status = `Победа: ${player}`;
	} else if (!isDraw && !isGameEnded) {
		status = `Ходит: ${player}`;
	}
	return <InformationLayout status={status} player={player} />;
};
