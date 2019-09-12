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

import cls from 'resources/css/seed/templates/users/Table.module.css';

class UserTable extends React.Component
{
  render()
  {
    const users = Util.filter(this.props.users, {})
    if (users == null) return <Loading />;

    const { url } = this.props.match;

    const userTable = users.map(item =>
       <tr>
         <td>{item.id}</td>
         <td className={cls.options}>
          <NavLink
            to={`${url}/${item.id}`}
            className={cls.details}
            activeClassName={cls.active}>
            Details
          </NavLink>
         </td>
       </tr>);

    return (
      <div className={cls.module}>
        <table className={cx("hover","row-border", cls.table)}>
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
  
  componentDidMount()
  {
    $.DataTable = require('datatables.net');
    const callback = () =>  $(`.${cls.table}`).DataTable();
    this.props.getUserList({}, callback);
  }
}

export default redux(UserTable);
