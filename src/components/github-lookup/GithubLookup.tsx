import React from 'react';
import { GithubInfoService } from '../services/GithubInfoService';
import './GithubLookup.scss';
import { Card, Divider } from 'antd';
import {GitCardList} from './git-card-list/GitCardList';

export class GithubLookup extends React.Component {
	state = {
		profiles: [],
	};

	addNewProfile = (profileData: any) => {
		console.log('ProfileData:', profileData);
		this.setState((prevState: any) => ({
			profiles: [...prevState.profiles, profileData],
		}));
	};

	clearProfile = (event: any) => {
		event.preventDefault();
		this.setState(() => ({ profiles: [] }));
	};

	render() {
		return (
			<Card>
				<div className='header'> Github Profile Info App</div>
				<GithubInfoService
					formName='Github Username'
					onSubmit={this.addNewProfile}
					onClear={this.clearProfile}
				/>
				<Divider />
				<GitCardList profiles={this.state.profiles} />
			</Card>
		);
	}
}
