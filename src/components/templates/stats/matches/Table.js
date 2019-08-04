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

import styles from 'resources/css/templates/stats/matches/Table.module.css';

class MatchList extends React.Component
{
  render()
  {
    const matches =
      Util.filter(this.props.matches, {}).sort((i1,i2) => i2.id - i1.id)
    if (matches == null) return <Loading />;

    const { Item } = this.props;
    const { url } = this.props.match;

    const matchTable = matches.map(item =>

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
            { matchTable }
          </tbody>
        </table>
      </div>
    );
  }

  /*
  * Component logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
  }
  
  componentDidMount()
  {
    $.DataTable = require('datatables.net');
    const callback = () =>  $(`.${styles.table}`).DataTable();
    this.props.getMatchList({}, callback);
  }
}

export default redux(MatchList);
