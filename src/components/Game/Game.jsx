import { useState } from 'react';
import { GameLayout } from '../../components';

import { field as fieldArr } from '../../data/field';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(fieldArr);
	return <GameLayout field={field} player={currentPlayer} togglePlayer={setCurrentPlayer} updateField={setField} />;
};