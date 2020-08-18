import React from 'react';
import Meta from 'antd/es/card/Meta';
import { Card as AntCard } from 'antd';

export class GitCard extends React.Component {
	public props: any;

	render() {
		const profile = this.props;
		return (
			<AntCard
				hoverable
				style={{ width: 240 }}
				cover={<img alt='example' src={profile.avatar_url} />}
			>
				<Meta
					title={
						profile.name
							? profile.name + '(' + profile.login + ')'
							: profile.login
					}
					description={
						profile.company
							? 'Company: ' + profile.company
							: profile.bio || profile.location || profile.email
					}
				/>
			</AntCard>
		);
	}
}
