/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil.js';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import TeamView from 'components/templates/teams/nav/View';
import Loading from 'components/helpers/Loading';

import styles from 'resources/css/templates/users/Details.module.css';

class UserDetails extends React.Component
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

  /*
  * Business logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
  }

  componentDidMount()
  {
    this.loadData();
  }

  loadData = () =>
  {
    const { getUserDetails } = this.props;
    const userId = this.getUserId()
    getUserDetails(userId);
  }

  /* Args */

  getUserId() 
  {
    const { user_id } = this.props.match.params;
    const { userId } = this.props;
    return user_id ? user_id : userId;
  }
}

export default redux(UserDetails);
