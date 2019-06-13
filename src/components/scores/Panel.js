/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import { Route } from 'react-router-dom';


import ScoreDetails from 'containers/scores/Details';
import ScoreList from 'containers/scores/List';
import Item from 'components/helpers/Item';


import styles from 'util/css/scores/Panel.module.css';

class ScorePanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <ScoreList 
        Item={Item} />

    const details = props =>
      <div className={styles.details_container}>
        <ScoreDetails />
      </div>
   
    return (
    <div className={styles.module}>
      
      <div className={styles.container}>
        <div className={styles.list}>
          <Route
            path={`${path}`}
            component={list} />
        </div>
      <div className={styles.details}>
        <Route
          path={`${path}/:score_id(\\d+)`}
          component={details} />
      </div>
    </div>
      
    </div>
    );
  }

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default ScorePanel;
