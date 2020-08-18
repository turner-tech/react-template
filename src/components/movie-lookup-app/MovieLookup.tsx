import React, {useState} from 'react';
import {MovieCardList} from './movie-card-list/MovieCardList';
import './MovieLookup.scss';
import {Card, Divider} from 'antd';
import {MovieInfoService} from '../services/MovieInfoService';

export const MovieLookup: React.FC<{}> = () => {
    const [state, setState] = useState<any>({profiles: []});

    let addNewProfile = (profileData: any) => {
        console.log('ProfileData:', profileData);
        setState((prevState: any) => ({
            profiles: [...prevState.profiles, profileData],
        }));
    };

    let clearProfile = (event: any) => {
        event.preventDefault();
        setState(() => ({profiles: []}));
    };

    return (
        <Card>
            <div className='header'> Movie Lookup Info App</div>
            <MovieInfoService
                formName='Movie Lookup'
                onSubmit={addNewProfile}
                onClear={clearProfile}
            />
            <Divider/>
            <MovieCardList profiles={state.profiles}/>
        </Card>
    );
}
