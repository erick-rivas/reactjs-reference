/*
__Seed builder__v1.0
*/

import React, { useEffect }  from 'react';
import $ from 'jquery';
import { useQuery } from 'seed/gql'
import { NavLink } from 'react-router-dom';

import Loading from 'seed/components/helpers/Loading';

import cx from 'classnames';
import styles from 'resources/css/examples/players/Table.module.css';

const PLAYERS  = `
{
  players {
    id
    name
    isActive
    photo {
      id
    }
    team {
      id
    }
    position {
      id
    }
  }
}
`

function PlayerTable(props)
{
  const { url } = props.match;

  const qPlayers = useQuery(PLAYERS, "", {
    onCompleted: data =>
    {
      $.DataTable = require('datatables.net');
      $(`.${styles.table}`).DataTable();
    }
  });

  if (qPlayers.loading) return <Loading />
  if (qPlayers.error) return "Error"

  const { players } = qPlayers.data

  const playerTable = players.map(item =>
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
          { playerTable }
        </tbody>
      </table>
    </div>
  );
}

export default PlayerTable;
