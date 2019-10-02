/*
__Seed builder__v1.0
*/

import React, { useEffect }  from 'react';
import $ from 'jquery';
import { useQuery } from 'seed/gql'
import { NavLink } from 'react-router-dom';

import Loading from 'seed/components/helpers/Loading';

import cx from 'classnames';
import styles from 'resources/css/examples/teams/Table.module.css';

const TEAMS  = `
{
  teams {
    id
    name
    description
    marketValue
    logo {
      id
    }
    rival {
      id
    }
    identityDocs {
      id
    }
    players {
      id
    }
  }
}
`

function TeamTable(props)
{
  const { url } = props.match;

  const qTeams = useQuery(TEAMS, "", {
    onCompleted: data =>
    {
      $.DataTable = require('datatables.net');
      $(`.${styles.table}`).DataTable();
    }
  });

  if (qTeams.loading) return <Loading />
  if (qTeams.error) return "Error"

  const { teams } = qTeams.data

  const teamTable = teams.map(item =>
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
          { teamTable }
        </tbody>
      </table>
    </div>
  );
}

export default TeamTable;
