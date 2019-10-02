/*
__Seed builder__v1.0
*/

import React from 'react';
import { useQuery } from 'seed/gql'
import { NavLink } from 'react-router-dom';

import Item from 'examples/teams/list/Item';
import Loading from 'seed/components/helpers/Loading';

import cx from 'classnames';
import styles from 'resources/css/examples/teams/List.module.css';

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

function TeamList(props)
{
  const { url } = props.match;

  const qTeams = useQuery(TEAMS);

  if (qTeams.loading) return <Loading />
  if (qTeams.error) return "Error"

  const { teams } = qTeams.data

  const teamList = teams.map(item =>
    <NavLink
      key={item.id}
      to={`${url}/${item.id}`}
      className={styles.item}
      activeClassName={styles.active}>
      <Item
        key={item.id}
        id={item.id}
        team={item}/>
    </NavLink>);

  return (
    <div className={styles.module}>
      { teamList }
    </div>
  );
}

export default TeamList;
