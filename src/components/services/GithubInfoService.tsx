import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

const axios = require('axios').default;

interface Props {
	formName: string;
	onSubmit: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClear: (event: React.ChangeEvent<HTMLButtonElement>) => void;
}

export const GithubInfoService: React.FC<Props> = ({
	formName,
	onSubmit,
	onClear,
}) => {
	const [userName, setUserName] = useState<string>('');
	// const inputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = async (event: any) => {
		const url = process.env.REACT_APP_GITHUB_API_URL;
		event.preventDefault();
		const response = await axios.get(url + `${userName}`);
		console.log('Login: ' + response.data.login.toString());
		if (!response.data) {
			console.log(
				'It is likely that UserName: ' + userName + ' was not found!'
			);
		} else {
			onSubmit(response.data);
		}
		setUserName('');
	};

	const handleClear = (event: any) => {
		setUserName('');
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
					value={userName}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setUserName(event.target.value)
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
