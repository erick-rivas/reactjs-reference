/*
__Seed builder__v1.0
Fields:
    - id
    - username
    - first_name
    - last_name
    - email
    - is_active
    - teams
*/

import * as React from 'react';

import _UserDetails from '__seed__/components/users/Details';
import * as Util from 'containers/helpers/Util'
import Loading from 'components/helpers/Loading';

import styles from 'util/css/users/Details.module.css';

class UserDetails extends _UserDetails
{
  render()
  {
    const { users = [] } = this.props;
    const userId = this.getUserId();
    const user = Util.getItem(users, userId);

    if (user.id == null) return <Loading />
    return (
      <div className={styles.module}>

        {/* Suggested divs */}
        <div className={styles.teams}>{'teams:' + user.teams.reduce((lv, v) => lv + v.id + ",", "")}</div>

      </div>
    );
  }

  getUserId()
  {
    //Suggested id
    return this.props.userId;
  }
}

export default UserDetails;
