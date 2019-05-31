/*
__Seed builder__v1.0
*/

import * as React from 'react';

import Loading from 'components/helpers/Loading';

import styles from 'util/css/users/Item.module.css'

class UserItem extends React.Component
{
  render()
  {
    const { user = {} } = this.props;

    if (user.id == null) return <Loading />
    return (
      <div className={styles.module}>

        {/* Suggested divs */}
        <div className={styles.teams}>{'teams:' + user.teams.reduce((lv, v) => lv + v.id + ",", "")}</div>

      </div>
    );
  }
}

export default UserItem;
