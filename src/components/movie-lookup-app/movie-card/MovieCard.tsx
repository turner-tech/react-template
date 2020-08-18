import React from 'react';
import Meta from 'antd/es/card/Meta';
import { Card as AntCard } from 'antd';

export class MovieCard extends React.Component {
	public props: any;

	render() {
		const profile = this.props;
		return (
			<AntCard
				hoverable
				style={{ width: 240 }}
				cover={<img alt='example' src={profile?.Poster} />}
			>
				<h1>{profile?.Title}</h1>
				<Meta
					description={profile?.Type.charAt(0).toUpperCase() + profile?.Type.slice(1)}
				/>
				<p/>
				<p>Year: ({profile?.Year})</p>
				{/* <p>{profile.metacritic ? 'Metacritic Score: (' + profile?.metacritic + ')' : ''}</p> */}
				{/* <p>Platforms:<p/>{profile.platforms.map((platform: any) => (<p>{platform.platform.name}</p>))}</p> */}
			</AntCard>
		);
	}
}
