import * as React from 'react';
import cx from 'classnames';

import { Switch, Route, Redirect } from 'react-router-dom'

import Sidenav from 'containers/nav/Sidenav'
import Topnav from 'containers/nav/Topnav'

import _Home from '_seed/components/Home';
import UserPanel from 'components/users/Panel';
import TeamPanel from 'components/teams/Panel';
import PlayerPanel from 'components/players/Panel';
import MatchPanel from 'components/matches/Panel';
import ScorePanel from 'components/scores/Panel';

import styles from 'util/css/Home.module.css';

class Home extends _Home
{  
  render()
  {
    const { path } = this.props.match;

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
          </Switch>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
