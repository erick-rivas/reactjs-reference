/*
__Seed builder__v1.0
  (Read_only) Builder helper
*/

import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import c from 'resources/css/helpers/Loading.module.css';

class Loading extends React.Component
{
  render()
  {
    return (
      <div className={c.module}>
        <CircularProgress className={c.loading}/>
      </div>
    );
  }
}

export default Loading;
