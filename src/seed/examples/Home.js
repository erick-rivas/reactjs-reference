/*
__Seed builder__v1.0
*/

import React from 'react';
import cx from 'classnames';
import { Switch, Route, Redirect } from 'react-router-dom'
import UserPanel from 'seed/examples/users/Panel';
import TeamPanel from 'seed/examples/teams/Panel';
import PlayerPanel from 'seed/examples/players/Panel';
import MatchPanel from 'seed/examples/matches/Panel';
import ScorePanel from 'seed/examples/scores/Panel';
import PlayerTypePanel from 'seed/examples/player_types/Panel';
import Sidenav from 'seed/examples/nav/Sidenav'
import Topnav from 'seed/examples/nav/Topnav'

import styles from 'resources/css/seed/examples/Home.module.css';

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
