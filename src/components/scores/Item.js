/*
__Seed builder__v1.0
*/

import * as React from 'react';

import Loading from 'components/helpers/Loading';

import styles from 'util/css/scores/Item.module.css'

class ScoreItem extends React.Component
{
  render()
  {
    const { score = {} } = this.props;

    if (score.id == null) return <Loading />
    return (
      <div className={styles.module}>

        {/* Suggested divs */}
        <div className={styles.min}>{'min:' + score.min}</div>
        <div className={styles.player}>{'player:' + score.player.id}</div>
        <div className={styles.match}>{'match:' + score.match.id}</div>

      </div>
    );
  }
}

export default ScoreItem;
