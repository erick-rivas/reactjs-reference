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

import c from 'resources/css/seed/templates/scores/Table.module.css';

class ScoreTable extends React.Component
{
  render()
  {
    const scores = Util.filter(this.props.scores, {})
    if (scores == null) return <Loading />;

    const { url } = this.props.match;

    const scoreTable = scores.map(item =>
       <tr>
         <td>{item.id}</td>
         <td className={c.options}>
          <NavLink
            to={`${url}/${item.id}`}
            className={c.details}
            activeClassName={c.active}>
            Details
          </NavLink>
         </td>
       </tr>);

    return (
      <div className={c.module}>
        <table className={cx("hover","row-border", c.table)}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            { scoreTable }
          </tbody>
        </table>
      </div>
    );
  }
  
  componentDidMount()
  {
    $.DataTable = require('datatables.net');
    const callback = () =>  $(`.${c.table}`).DataTable();
    this.props.getScoreList({}, callback);
  }
}

export default redux(ScoreTable);
