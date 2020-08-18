import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

interface Props {
	formName: string;
	onSubmit: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClear: (event: React.ChangeEvent<HTMLButtonElement>) => void;	count?: number;
}

export const GameInfoService: React.FC<Props> = ({
	formName,
	onSubmit,
	onClear,
}) => {
	const [gameName, setGameName] = useState<string>('');
	// const inputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		const axios = require("axios");

		let formattedGameName = gameName.replace(/\s+/g, '-').toLowerCase();

		axios({
			"method":"GET",
			"url":"https://rawg-video-games-database.p.rapidapi.com/games?search=" + formattedGameName,
			"headers":{
				"content-type":"application/octet-stream",
				"x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
				"x-rapidapi-key":"2137c1efc5mshcba8bcdc1bef6a1p11ccc2jsnd1124dc7cc99",
				"useQueryString":true
			}
		})
			.then((response: any)=>{
				console.log(response)
				if (!response?.data?.results) {
					console.log(
						'It is likely that Game: ' + gameName + ' was not found!'
					);
				} else {
					console.log(response?.data?.results)
					onSubmit(response?.data?.results);
				}
				setGameName('');
			})
			.catch((error: any)=>{
				console.log(error)
		});
	};

	const handleClear = (event: any) => {
		setGameName('');
		onClear(event);
	};

	return (
		<Form
			onKeyDown={(e) =>
				e.keyCode === 13 ? handleSubmit(e) || e.preventDefault() : ''
			}
		>
			<Form.Item>
				<Input
					type='text'
					value={gameName}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setGameName(event.target.value)
					}
					placeholder={formName}
					// ref={inputRef}
					required
				/>
				<Button onClick={handleSubmit}>Add card</Button>
				<Button onClick={(event) => handleClear(event)}>Clear</Button>
			</Form.Item>
		</Form>
	);
};
