/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import { Switch, Route } from 'react-router-dom';


import ScoreDetails from 'containers/scores/Details';
import ScoreList from 'containers/scores/List';
import Item from 'components/helpers/Item';


import styles from 'util/css/scores/View.module.css';

class ScoreView extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <div className={styles.list}>
        <ScoreList 
        Item={Item}/>
      </div>
      

    const details = props =>
      <div className={styles.details}>
        <ScoreDetails />
      </div>
   
    return (
    <div className={styles.module}>
      
      <div className={styles.container}>
        <Switch>
         <Route
          path={`${path}/:score_id(\\d+)`}
          component={details} />

          <Route
            path={`${path}`}
            component={list} />
        </Switch>
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

export default ScoreView;
