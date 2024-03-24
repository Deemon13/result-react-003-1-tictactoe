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
		if (field[id] === '' && !isGameEnded) {
			setField(
				field.map((findItem, findIndex) => {
					if (findIndex === id) {
						return (findItem = currentPlayer);
					} else {
						return findItem;
					}
				}),
			);

			setCurrentPlayer((currentPlayer = currentPlayer === 'X' ? '0' : 'X'));
		}
	}

	function setWinner(fieldCells) {
		return (
			WIN_PATTERNS.some(el => el.every(item => fieldCells[item] === 'X')) ||
			WIN_PATTERNS.some(el => el.every(item => fieldCells[item] === '0'))
		);
	}

	if (setWinner(field) && !isGameEnded) {
		setIsGameEnded(true);
		setCurrentPlayer((currentPlayer = currentPlayer === 'X' ? '0' : 'X'));
	} else if (!isDraw && field.every(cell => cell !== '') && !isGameEnded) {
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
