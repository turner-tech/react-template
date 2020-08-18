import React from 'react';
import {MovieCard} from '../movie-card/MovieCard';

export class MovieCardList extends React.Component {
    public props: any;
    public profiles: any;

    render() {
        const {profiles} = this.props;
        return (
            <div>
                {profiles.map((profile: any) => (
                    profile.map((theProfile: any) => (
                            <MovieCard key={theProfile?.imdbID} {...theProfile} />
                        )
                    )))}
            </div>
        );
    }
}
