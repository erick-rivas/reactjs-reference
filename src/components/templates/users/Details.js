/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil.js';
import cx from 'classnames';
import redux from 'seed/helpers/redux';

import Loading from 'seed/components/helpers/Loading';

import styles from 'resources/css/templates/users/Details.module.css';

class UserDetails extends React.Component
{
  render()
  {
    const { users = [] } = this.props;
    const userId = this.getUserId();
    const user = DataUtil.getItem(users, userId);
      
    if (user.id == null) return <Loading />;

    return (
      <div className={styles.module}>
        {/* Suggested divs */}
      </div>
    );
  }

  /*
  * Component Logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
  }

  componentDidMount()
  {
    const userId = this.getUserId()
    this.props.getUserDetails(userId);
  }

  /* Args */

  getUserId() 
  {
    return this.props.userId ?
      this.props.userId :
      this.props.match.params.user_id;
  }
}

export default redux(UserDetails);
