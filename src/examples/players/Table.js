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

import styles from 'resources/css/examples/players/Table.module.css';

class PlayerTable extends React.Component
{
  render()
  {
    const players = Util.filter(this.props.players, {})
    if (players == null) return <Loading />;

    const { url } = this.props.match;

    const playerTable = players.map(item =>
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
            { playerTable }
          </tbody>
        </table>
      </div>
    );
  }
  
  componentDidMount()
  {
    $.DataTable = require('datatables.net');
    const callback = () =>  $(`.${styles.table}`).DataTable();
    this.props.getPlayerList({}, callback);
  }
}

export default redux(PlayerTable);