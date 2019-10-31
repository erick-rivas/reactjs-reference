import React from 'react';
import { useQuery } from 'seed/gql'
import { NavLink } from 'react-router-dom';

import Loading from 'seed/components/helpers/Loading';

import cx from 'classnames';
import styles from 'resources/css/examples/teams/List.module.css';

const TEAMS  = `
{
  teams {
    name
    description
    marketValue
    logo { }
    rival { }
    identityDocs { }
    players { }
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
        <div className={styles.title}>{item.id}</div>
        <div className={styles.subtitle}>{JSON.stringify(item)}</div>
    </NavLink>);

  return (
    <div className={styles.module}>
      { teamList }
    </div>
  );
}

export default TeamList;
