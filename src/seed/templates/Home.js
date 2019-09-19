/*
__Seed builder__v1.0
*/

import React from 'react';
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

import styles from 'resources/css/seed/templates/Home.module.css';

function Home(props)
{
   const { path } = props.match;
  return (
    <div className={styles.module}>
      <div className={styles.drawer}>
        <div className={styles.sidenav}>
          <Route path={`${path}`}
            component={Sidenav} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.topnav}>
          <Route path={`${path}`}
            component={Topnav} />
        </div>
        <div className={styles.content}>
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

export default Home;
