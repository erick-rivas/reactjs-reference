/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import { Switch, Route, Redirect } from 'react-router-dom'
import UserPanel from 'seed/templates/users/Panel';
import TeamPanel from 'seed/templates/teams/Panel';
import PlayerPanel from 'seed/templates/players/Panel';
import MatchPanel from 'seed/templates/matches/Panel';
import ScorePanel from 'seed/templates/scores/Panel';
import PlayerTypePanel from 'seed/templates/player_types/Panel';
import Sidenav from 'seed/templates/nav/Sidenav'
import Topnav from 'seed/templates/nav/Topnav'

import cls from 'resources/css/seed/templates/Home.module.css';

class Home extends React.Component
{
  render()
  {
    const { path } = this.props.match;

    return (
      <div className={cls.module}>
        <div className={cls.drawer}>
          <div className={cls.sidenav}>
            <Route path={`${path}`}
              component={Sidenav} />
          </div>
        </div>
        <div className={cls.container}>
          <div className={cls.topnav}>
            <Route path={`${path}`}
              component={Topnav} />
          </div>
          <div className={cls.content}>
             <Switch>
               <Route
                 path={`${path}/users`}
                 component={UserPanel} />
               <Route
                 path={`${path}/teams`}
                 component={TeamPanel} />
               <Route
                 path={`${path}/players`}
                 component={PlayerPanel} />
               <Route
                 path={`${path}/matches`}
                 component={MatchPanel} />
               <Route
                 path={`${path}/scores`}
                 component={ScorePanel} />
               <Route
                 path={`${path}/player_types`}
                 component={PlayerTypePanel} />
             </Switch>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount()
  {
    const userId = sessionStorage.getItem('id');
    if (userId == null)
      return this.props.history.replace('/templates/login');
  }
}

export default redux(Home);
