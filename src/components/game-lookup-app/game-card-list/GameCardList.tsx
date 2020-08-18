import React from 'react';
import {GameCard} from '../game-card/GameCard';

export class GameCardList extends React.Component {
    public props: any;
    public profiles: any;

    render() {
        const {profiles} = this.props;
        return (
            <div>
                {profiles.map((profile: any) => (
                    profile.map((theProfile: any) => (
                            <GameCard key={theProfile.id} {...theProfile} />
                        )
                    )))}
            </div>
        );
    }
}
