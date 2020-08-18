import React, {useState} from 'react';
import {GameCardList} from './game-card-list/GameCardList';
import './GameLookup.scss';
import {Card, Divider} from 'antd';
import {GameInfoService} from '../services/GameInfoService';

export const GameLookup: React.FC<{}> = () => {
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
            <div className='header'> Game Lookup Info App</div>
            <GameInfoService
                formName='Game Lookup'
                onSubmit={addNewProfile}
                onClear={clearProfile}
            />
            <Divider/>
            <GameCardList profiles={state.profiles}/>
        </Card>
    );
}
