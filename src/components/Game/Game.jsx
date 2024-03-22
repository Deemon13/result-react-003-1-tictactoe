import { useState } from 'react';
import { GameLayout } from '../../components';

import { field as fieldArr } from '../../data/field';

export const Game = () => {
	console.log(fieldArr);
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(fieldArr);
	return (
		<GameLayout
			field={field}
			player={currentPlayer}
			togglePlayer={setCurrentPlayer}
			updateField={setField}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
		/>
	);
};
