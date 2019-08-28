/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import $ from 'jquery';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

import Loading from 'seed/components/helpers/Loading';

import styles from 'resources/css/templates/users/Table.module.css';

class UserList extends React.Component
{
  render()
  {
    const users =
      Util.filter(this.props.users, {}).sort((i1,i2) => i2.id - i1.id)
    if (users == null) return <Loading />;

    const { Item } = this.props;
    const { url } = this.props.match;

    const userTable = users.map(item =>

         <tr>
           <td>{item.id}</td>
           <td className={styles.options}>
            <NavLink
              to={`${url}/${item.id}`}
              className={styles.details}
              activeClassName={styles.active}>
              Details
            </NavLink>
           </td>
         </tr>);

    return (
      <div className={styles.module}>
        <table className={cx("hover","row-border", styles.table)}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            { userTable }
          </tbody>
        </table>
      </div>
    );
  }

  /*
  * Component logic
  */
  
  componentDidMount()
  {
    $.DataTable = require('datatables.net');
    const callback = () =>  $(`.${styles.table}`).DataTable();
    this.props.getUserList({}, callback);
  }
}

export default redux(UserList);
