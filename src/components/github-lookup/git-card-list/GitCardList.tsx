import React from 'react';
import { GitCard } from '../git-card/GitCard';

export class GitCardList extends React.Component {
	public props: any;
	public profiles: any;

	render() {
		const { profiles } = this.props;
		return (
			<div>
				{profiles.map((profile: any) => (
					<GitCard key={profile.id} {...profile} />
				))}
			</div>
		);
	}
}
