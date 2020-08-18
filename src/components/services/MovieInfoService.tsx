import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

interface Props {
	formName: string;
	onSubmit: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClear: (event: React.ChangeEvent<HTMLButtonElement>) => void;	count?: number;
}

export const MovieInfoService: React.FC<Props> = ({
	formName,
	onSubmit,
	onClear,
}) => {
	const [movieName, setMovieName] = useState<string>('');

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		const axios = require("axios");

		axios({
			"method":"GET",
			"url":"https://movie-database-imdb-alternative.p.rapidapi.com/",
			"headers":{
			"content-type":"application/octet-stream",
			"x-rapidapi-host":"movie-database-imdb-alternative.p.rapidapi.com",
			"x-rapidapi-key":"2137c1efc5mshcba8bcdc1bef6a1p11ccc2jsnd1124dc7cc99",
			"useQueryString":true
			},"params":{
			"page":"1",
			"r":"json",
			"s": movieName
			}
			})
			.then((response: any)=>{
				console.log(response)
				if (!response?.data?.Search) {
					console.log(
						'It is likely that Game: ' + movieName + ' was not found!'
					);
				} else {
					console.log(response?.data?.Search)
					onSubmit(response?.data?.Search);
				}
				setMovieName('');
			})
			.catch((error: any)=>{
				console.log(error)
		});
	};

	const handleClear = (event: any) => {
		setMovieName('');
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
					value={movieName}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setMovieName(event.target.value)
					}
					placeholder={formName}
					required
				/>
				<Button onClick={handleSubmit}>Add card</Button>
				<Button onClick={(event) => handleClear(event)}>Clear</Button>
			</Form.Item>
		</Form>
	);
};
