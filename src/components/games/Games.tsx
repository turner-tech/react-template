import React, { useState } from 'react';
import { StarMatch } from '../star-match/StarMatch';

export const Games = () => {
	const [gameId, setGameId] = useState(1);
	return (
		<div className='header'>
			React Games
			<StarMatch
				key={gameId}
				startNewGame={() => setGameId(gameId + 1)}
			/>
		</div>
	);
};
