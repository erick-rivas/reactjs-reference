/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';

import Loading from 'seed/components/helpers/Loading';

import c from 'resources/css/templates/users/details/Details.module.css';

class UserDetails extends React.Component
{
  render()
  {
    const userId = this.getUserId();
    const user = Util.get(this.props.users, userId);
    if (user.id == null) return <Loading />;

    return (
      <div className={c.module}>
        {/* Suggested divs */}
      </div>
    );
  }

  componentDidMount()
  {
    const userId = this.getUserId()
    this.props.getUserDetails(userId);
  }

  getUserId() 
  {
    return this.props.match.params.user_id;
  }
}

export default redux(UserDetails);
