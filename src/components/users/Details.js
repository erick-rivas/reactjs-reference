/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as DataUtil from 'util/DataUtil.js';

import cx from 'classnames';

import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import TeamView from 'components/nav/teams/View';
import Loading from 'components/helpers/Loading';

import Component from 'components/users/Details.link.js'

import styles from 'resources/css/users/Details.module.css';

class UserDetails extends Component
{
  render()
  {
    const { users = [] } = this.props;
    const userId = this.getUserId();
    const user = DataUtil.getItem(users, userId);
      
    if (user.id == null) return <Loading />;

    const { path, url } = this.props.match;
    
    return (
      <div className={styles.module}>
        {/* Suggested divs */}
        <label className={cx(styles.lbl, styles.teamsLbl)}>Teams</label><br/>
        <Route path={`${path}`}
          component={ props => <TeamView {...props}/> } />
        <br/>
      </div>
    );
  }
}

export default UserDetails;
