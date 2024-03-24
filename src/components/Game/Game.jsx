import { useState } from 'react';

import { GameLayout } from '../../components';

import { field as fieldArr } from '../../data/field';
import { WIN_PATTERNS } from '../../data/win-patterns';

export const Game = () => {
	let [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(fieldArr);

	function handleClickOnFieldCell(id) {
		if (isGameEnded) {
			return null;
		}

		const newFields = field.slice();

		if (field[id] === '' && !isGameEnded) {
			newFields[id] = currentPlayer;
			setField(newFields);
		} else {
			return null;
		}

		if (setWinner(newFields, currentPlayer)) {
			setIsGameEnded(true);
			return null;
		}

		setCurrentPlayer(prevState => (prevState === 'X' ? '0' : 'X'));
	}

	function setWinner(fieldCells, player) {
		return WIN_PATTERNS.some(el => el.every(item => fieldCells[item] === player));
	}

	if (field.every(cell => cell !== '') && !isDraw && !isGameEnded) {
		setIsDraw(true);
	}

	let status;
	if (isDraw) {
		status = 'Ничья';
	} else if (!isDraw && isGameEnded) {
		status = `Победа: ${currentPlayer}`;
	} else if (!isDraw && !isGameEnded) {
		status = `Ходит: ${currentPlayer}`;
	}

	function handleResetGame() {
		setCurrentPlayer('X');
		setIsDraw(false);
		setIsGameEnded(false);
		setField([...fieldArr]);
	}

	return (
		<GameLayout
			status={status}
			player={currentPlayer}
			field={field}
			handleClick={handleClickOnFieldCell}
			resetGame={handleResetGame}
		/>
	);
};
