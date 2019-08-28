/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import { Switch, Route, Redirect } from 'react-router-dom'
import UserPanel from 'components/templates/users/Panel';
import TeamPanel from 'components/templates/teams/Panel';
import PlayerPanel from 'components/templates/players/Panel';
import MatchPanel from 'components/templates/stats/matches/Panel';
import ScorePanel from 'components/templates/stats/scores/Panel';
import Sidenav from 'components/templates/nav/Sidenav'
import Topnav from 'components/templates/nav/Topnav'

import styles from 'resources/css/templates/Home.module.css';

class Home extends React.Component
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

  /*
  * Component logic
  */

  componentDidMount()
  {
    const userId = sessionStorage.getItem('id');
    if (userId == null)
      return this.props.history.replace('/templates/login');
  }
}

export default redux(Home);
