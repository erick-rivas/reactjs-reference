/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';

class _UserItem extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      anchorMenu: null
    }
    this.onClickOptions = this.onClickOptions.bind(this);
    this.onCloseMenu = this.onCloseMenu.bind(this);
  }

  onClickOptions = e =>
  {
    this.setState({
      anchorMenu: e.currentTarget
    });
  };

  onCloseMenu = e =>
  {
    this.setState({
      anchorMenu: null
    });
  };
}

export default _UserItem;
