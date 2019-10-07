/*
__Seed builder__v0.1.7
*/

import React from 'react';
import { useQuery } from 'seed/gql'
import { NavLink } from 'react-router-dom';

import Loading from 'seed/components/helpers/Loading';

import cx from 'classnames';
import styles from 'resources/css/examples/scores/List.module.css';

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

function ScoreList(props)
{
  const { url } = props.match;

  const qScores = useQuery(SCORES);

  if (qScores.loading) return <Loading />
  if (qScores.error) return "Error"

  const { scores } = qScores.data

  const scoreList = scores.map(item =>
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
      { scoreList }
    </div>
  );
}

export default ScoreList;
