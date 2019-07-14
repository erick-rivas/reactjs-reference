/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router-dom'
import UserPanel from 'components/users/Panel';
import TeamPanel from 'components/teams/Panel';
import PlayerPanel from 'components/players/Panel';
import MatchPanel from 'components/stats/matches/Panel';
import ScorePanel from 'components/stats/scores/Panel';

import styles from 'resources/css/debug/Exports.module.css';

class Exports extends React.Component
{
  render()
  {
    const {path, url} = this.props.match;

    return (
      <div className={styles.module}>
        <Link to={`${url}/users`}>User</Link><br/>
        <Link to={`${url}/teams`}>Team</Link><br/>
        <Link to={`${url}/players`}>Player</Link><br/>
        <Link to={`${url}/matches`}>Match</Link><br/>
        <Link to={`${url}/scores`}>Score</Link><br/>
        <div className={styles.container}>
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
    );
  }

  /*
  * Component logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default Exports;
