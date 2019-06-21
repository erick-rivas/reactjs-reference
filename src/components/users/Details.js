/*
__Seed builder__v1.0

  Guidelines:
    - Modify ALL components if required

  Fields:
    - id
    - username
    - first_name
    - last_name
    - email
    - is_active
    - teams

  Args:
    - user_id
*/

import * as React from 'react';
import cx from 'classnames';

import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import _UserDetails from '_seed/components/users/Details';
import TeamView from 'components/teams/View';
import Loading from 'components/helpers/Loading';
import * as DataUtil from 'util/DataUtil.js';

import styles from 'util/css/users/Details.module.css';

class UserDetails extends _UserDetails
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
        component={ props => <TeamView showListOptions={false} {...props}/> } />
      <br/>
    </div>
    );
  }

  constructor(props)
  {
    super(props);
  }
}

export default UserDetails;
