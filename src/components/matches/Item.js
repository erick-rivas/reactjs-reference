/*
__Seed builder__v1.0
*/

import * as React from 'react';

import Loading from 'components/helpers/Loading';

import styles from 'util/css/matches/Item.module.css'

class MatchItem extends React.Component
{
  render()
  {
    const { match = {} } = this.props;

    if (match.id == null) return <Loading />
    return (
      <div className={styles.module}>

        {/* Suggested divs */}
        <div className={styles.date}>{'date:' + match.date}</div>
        <div className={styles.type}>{'type:' + match.type}</div>
        <div className={styles.local}>{'local:' + match.local.id}</div>
        <div className={styles.visitor}>{'visitor:' + match.visitor.id}</div>
        <div className={styles.scores}>{'scores:' + match.scores.reduce((lv, v) => lv + v.id + ",", "")}</div>

      </div>
    );
  }
}

export default MatchItem;
