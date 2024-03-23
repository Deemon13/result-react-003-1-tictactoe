import { useState } from 'react';
import { GameLayout } from '../../components';

import { field as fieldArr } from '../../data/field';
import { WIN_PATTERNS } from '../../data/win-patterns';

export const Game = () => {
	let [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(fieldArr);

	// Click on field cell
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

	function setWinner() {
		console.log('определяем наличие победителя...');
		return (
			WIN_PATTERNS.some(el => el.every(item => field[item] === 'X')) ||
			WIN_PATTERNS.some(el => el.every(item => field[item] === '0'))
		);
	}

	if (setWinner() && !isGameEnded) {
		console.log('if', setWinner());
		// console.log(isGameEnded);
		setIsGameEnded(true);
		// console.log(isGameEnded);
		console.log('есть победитель!');
		setCurrentPlayer((currentPlayer = currentPlayer === 'X' ? '0' : 'X'));
	} else if (!isDraw && field.every(cell => cell !== '')) {
		setIsDraw(true);
		console.log('else', setWinner());
		console.log('нет победителя!');
	}

	// set status
	let status;
	if (isDraw) {
		status = 'Ничья';
	} else if (!isDraw && isGameEnded) {
		status = `Победа: ${currentPlayer}`;
	} else if (!isDraw && !isGameEnded) {
		status = `Ходит: ${currentPlayer}`;
	}

	// Reset game
	function handleResetGame() {
		setCurrentPlayer('X');
		setIsDraw(false);
		setIsGameEnded(false);
		setField([...fieldArr]);
	}

	return (
		<GameLayout
			status={status}
			field={field}
			handleClick={handleClickOnFieldCell}
			player={currentPlayer}
			resetGame={handleResetGame}
		/>
	);
};
