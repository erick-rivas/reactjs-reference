/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';

class Home extends React.Component
{  
  constructor(props)
  {
    super(props);
    this.state = {};
  }

  componentDidMount()
  {
    const userId = sessionStorage.getItem('id');
    if (userId == null)
      return this.props.history.replace('/login');
  }
}

export default Home;
