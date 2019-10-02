/*
__Seed builder__v1.0
*/

import React, { useEffect }  from 'react';
import $ from 'jquery';
import { useQuery } from 'seed/gql'
import { NavLink } from 'react-router-dom';

import Loading from 'seed/components/helpers/Loading';

import cx from 'classnames';
import styles from 'resources/css/examples/matches/Table.module.css';

const MATCHES  = `
{
  matches {
    id
    date
    type
    local {
      id
    }
    visitor {
      id
    }
    scores {
      id
    }
  }
}
`

function MatchTable(props)
{
  const { url } = props.match;

  const qMatches = useQuery(MATCHES, "", {
    onCompleted: data =>
    {
      $.DataTable = require('datatables.net');
      $(`.${styles.table}`).DataTable();
    }
  });

  if (qMatches.loading) return <Loading />
  if (qMatches.error) return "Error"

  const { matches } = qMatches.data

  const matchTable = matches.map(item =>
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
          { matchTable }
        </tbody>
      </table>
    </div>
  );
}

export default MatchTable;
