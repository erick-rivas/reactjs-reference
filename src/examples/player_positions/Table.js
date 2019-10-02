/*
__Seed builder__v1.0
*/

import React, { useEffect }  from 'react';
import $ from 'jquery';
import { useQuery } from 'seed/gql'
import { NavLink } from 'react-router-dom';

import Loading from 'seed/components/helpers/Loading';

import cx from 'classnames';
import styles from 'resources/css/examples/player_positions/Table.module.css';

const PLAYER_POSITIONS  = `
{
  playerPositions {
    id
    name
  }
}
`

function PlayerPositionTable(props)
{
  const { url } = props.match;

  const qPlayerPositions = useQuery(PLAYER_POSITIONS, "", {
    onCompleted: data =>
    {
      $.DataTable = require('datatables.net');
      $(`.${styles.table}`).DataTable();
    }
  });

  if (qPlayerPositions.loading) return <Loading />
  if (qPlayerPositions.error) return "Error"

  const { playerPositions } = qPlayerPositions.data

  const playerPositionTable = playerPositions.map(item =>
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
          { playerPositionTable }
        </tbody>
      </table>
    </div>
  );
}

export default PlayerPositionTable;
