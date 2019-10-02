/*
__Seed builder__v1.0
*/

import React, { useEffect }  from 'react';
import $ from 'jquery';
import { useQuery } from 'seed/gql'
import { NavLink } from 'react-router-dom';

import Loading from 'seed/components/helpers/Loading';

import cx from 'classnames';
import styles from 'resources/css/examples/scores/Table.module.css';

const SCORES  = `
{
  scores {
    id
    min
    player {
      id
    }
    match {
      id
    }
  }
}
`

function ScoreTable(props)
{
  const { url } = props.match;

  const qScores = useQuery(SCORES, "", {
    onCompleted: data =>
    {
      $.DataTable = require('datatables.net');
      $(`.${styles.table}`).DataTable();
    }
  });

  if (qScores.loading) return <Loading />
  if (qScores.error) return "Error"

  const { scores } = qScores.data

  const scoreTable = scores.map(item =>
     <tr>
       <td>{item.id}</td>
       <td className={styles.options}>
        <NavLink
          key={item.id}
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
          { scoreTable }
        </tbody>
      </table>
    </div>
  );
}

export default ScoreTable;
