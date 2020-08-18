import React from 'react';
import './App.scss';
import { GithubLookup } from './components/github-lookup/GithubLookup';
import { Games } from './components/games/Games';
import { Layout, Divider } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/nav-bar/NavBar';
import { ComponentList } from './components/component-list/ComponentList';
import { StarMatch } from './components/star-match/StarMatch';
import { GameLookup } from './components/game-lookup-app/GameLookup';
import { MovieLookup } from './components/movie-lookup-app/MovieLookup';

const { Header, Content, Footer } = Layout;

export function App() {
    return (
        <Router>
            <div className="App" id="base-app">
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <NavBar />
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <div className="site-layout-content">
                            <Routes />
                        </div>
                    </Content>
                    <Divider />
                    <Footer style={{ textAlign: 'center' }}>React Application ©2020 Created by Alex Turner</Footer>
                </Layout>
            </div>
        </Router>
    );
}

function Routes() {
    return (
        <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/home'} exact component={Home} />
            <Route path={'/games'} component={Games} />
            <Route path={'/gameLookup'} component={GameLookup} />
            <Route path={'/github'} component={GithubLookup} />
            <Route path={'/git'} component={GithubLookup} />
            <Route path={'/components'} component={ComponentList} />
            <Route path={'/starMatch'} component={StarMatch} />
            <Route path={'/navBar'} component={NavBar} />
            <Route path={'/movies'} component={MovieLookup} />
            <Route path={'/movieLookup'} component={MovieLookup} />
        </Switch>
    );
}

function Home() {
    return (
        <div>
            <h1 style={{ paddingTop: '10px' }}>Collection of Simple React Apps</h1>
            <Divider />
            <GithubLookup />
            <Divider />
            <Games />
        </div>
    );
}
