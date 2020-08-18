import React, { useEffect, useState } from 'react';
import './StarMatch.scss';
import { utils } from '../utils/MathLogic';
import { PlayNumber } from './play-number/PlayNumber';
import { StarsDisplay } from './stars-display/StarsDisplay';
import { Card } from 'antd';

const useStarMatchState = () => {
	const [stars, setStars] = useState<number>(utils.random(1, 9));
	const [candidateNums, setCandidateNums] = useState<number[]>([]);
	const [availableNums, setAvailableNums] = useState<number[]>(
		utils.range(1, 9)
	);
	const [secondsLeft, setSecondsLeft] = useState<number>(10);

	useEffect(() => {
		if (secondsLeft > 0 && availableNums.length > 0) {
			const timerId = setTimeout(() => {
				setSecondsLeft(secondsLeft - 1);
			}, 1000);
			return () => clearTimeout(timerId);
		}
	});

	const setStarMatchState = (newCandidateNums: any) => {
		if (utils.sum(newCandidateNums) !== stars) {
			setCandidateNums(newCandidateNums);
		} else {
			const newAvailableNums = availableNums.filter(
				(n) => !newCandidateNums.includes(n)
			);
			setStars(utils.randomSumIn(newAvailableNums, 9));
			setAvailableNums(newAvailableNums);
			setCandidateNums([]);
		}
	};
	return {
		stars,
		availableNums,
		candidateNums,
		secondsLeft,
		setStarMatchState,
	};
};

export const StarMatch = (props: any) => {
	const {
		stars,
		availableNums,
		candidateNums,
		secondsLeft,
		setStarMatchState,
	} = useStarMatchState();

	const candidatesWrong = utils.sum(candidateNums) > stars;
	const gameStatus =
		availableNums.length === 0
			? 'won'
			: secondsLeft === 0
			? 'lost'
			: 'active';

	const numStatus = (num: number) => {
		if (!availableNums.includes(num)) {
			return 'used';
		}
		if (candidateNums.includes(num)) {
			return candidatesWrong ? 'wrong' : 'candidate';
		}
		return 'available';
	};

	const onNumClick = (numId: number, currentStatus: string) => {
		if (gameStatus !== 'active' || currentStatus === 'used') {
			return;
		}

		const newCandidateNums =
			currentStatus === 'available'
				? candidateNums.concat(numId)
				: candidateNums.filter((currentNum) => numId !== currentNum);
		setStarMatchState(newCandidateNums);
	};

	return (
		<div className='star-match'>
			<Card
				title='StarMatch - Pick 1 or more numbers that sum to the number of stars'
				style={{ width: 900 }}
			>
				<div className='help'></div>
				<div className='body'>
					<div className='left'>
						{gameStatus !== 'active' ? (
							<PlayAgain
								onClick={props.startNewGame}
								gameStatus={gameStatus}
							/>
						) : (
							<StarsDisplay stars={stars} />
						)}
					</div>
					<div className='right'>
						{utils.range(1, 9).map((numId) => (
							<PlayNumber
								key={numId}
								numStatus={numStatus(numId)}
								numId={numId}
								onClick={onNumClick}
							/>
						))}
					</div>
				</div>
				<div className='timer'>Time Remaining: {secondsLeft}</div>
			</Card>
		</div>
	);
};

const PlayAgain = (props: any) => (
	<div className='game-done'>
		<div
			className='message'
			style={{ color: props.gameStatus === 'won' ? 'green' : 'red' }}
		>
			{props.gameStatus === 'won' ? 'You Won!' : 'You Lost, Try Again!'}
		</div>
		<button onClick={props.onClick}>Play Again!</button>
	</div>
);
