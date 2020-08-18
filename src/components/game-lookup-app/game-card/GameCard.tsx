import React from 'react';
import Meta from 'antd/es/card/Meta';
import { Card as AntCard } from 'antd';

export class GameCard extends React.Component {
	public props: any;

	render() {
		const profile = this.props;
		return (
			<AntCard
				hoverable
				style={{ width: 240 }}
				cover={<img alt='example' src={profile.background_image} />}
			>
				<h1>{profile?.name}</h1>
				<Meta
					description={profile?.description?.replace(/<p>|<\/p>|<br>+/g, '').toLowerCase()}
				/>
				<p/>
				<p>Release Date: ({profile?.released})</p>
				<p>{profile.metacritic ? 'Metacritic Score: (' + profile?.metacritic + ')' : ''}</p>
				<div>Platforms:<div/>{profile.platforms.map((platform: any) => (<div key={platform.platform.name}>{platform.platform.name}</div>))}</div>
			</AntCard>
		);
	}
}
