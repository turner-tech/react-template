/* eslint-disable react/prop-types */
import React from 'react';

interface Props {
	numId: number;
	numStatus: string;
	onClick: (numId: number, currentStatus: string) => void;
}

const calcButtonColor = (numStatus: string): string => {
	switch (numStatus) {
		case 'available': {
			return 'lightgray';
		}
		case 'used':
			return 'lightgreen';
		case 'wrong':
			return 'lightcoral';
		case 'candidate':
			return 'deepskyblue';
		default:
			return 'lightgray';
	}
};

export const PlayNumber: React.FC<Props> = ({ numId, numStatus, onClick }) => {
	return (
		<button
			className='number'
			style={{ backgroundColor: calcButtonColor(numStatus) }}
			onClick={() => onClick(numId, numStatus)}
		>
			{numId}
		</button>
	);
};
