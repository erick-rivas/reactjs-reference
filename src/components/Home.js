import * as React from 'react';
import cx from 'classnames';

import { Switch, Route, Redirect } from 'react-router-dom'

import Sidenav from 'containers/nav/Sidenav'
import Topnav from 'containers/nav/Topnav'

import _Home from 'sbuild/components/Home';
import PlayerPanel from 'components/nav/players/Panel';
import TeamPanel from 'components/nav/teams/Panel';
import UserPanel from 'components/nav/users/Panel';
import MatchPanel from 'components/nav/stat/matches/Panel';
import ScorePanel from 'components/nav/stat/scores/Panel';

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
              path={`${path}/players`}
              component={PlayerPanel} />
            <Route
              path={`${path}/teams`}
              component={TeamPanel} />
            <Route
              path={`${path}/users`}
              component={UserPanel} />
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
