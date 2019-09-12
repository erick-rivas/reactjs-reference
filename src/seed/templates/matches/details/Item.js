/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import Svg from 'react-svg';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import cls from 'resources/css/seed/templates/matches/details/Item.module.css';

class MatchItem extends React.Component
{
  render()
  {
    const match = this.props.match;
    return (
      <div className={cls.module}>
        <div className={cls.title}>{match.id}</div>
        <div className={cls.subtitle}>{JSON.stringify(match)}</div>
        <Svg className={cls.options}
          src={require('resources/icons/ic_expand.svg')}
          onClick={this.onClickOptions} />
        <Menu
          anchorEl={this.state.optionMenu}
          open={Boolean(this.state.optionMenu)}
          onClose={this.onCloseMenu}>
          <MenuItem onClick={this.onClickDelete}>Delete</MenuItem>
        </Menu>
      </div>
    );
  }

  /*
  * Component logic
  */

  constructor(props)
  {
    super(props);
    this.state = {
      optionMenu: null
    }
    this.onClickOptions = this.onClickOptions.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onCloseMenu = this.onCloseMenu.bind(this);
  }

  /* Events */

  onClickOptions(e)
  {
    e.preventDefault();
    this.setState({
      optionMenu: e.currentTarget
    });
  }

  onClickDelete(e)
  {
    e.preventDefault();
    this.props.deleteMatch(this.props.match.id);
  }

  onCloseMenu(e)
  {
    e.preventDefault();
    this.setState({
      optionMenu: null
    });
  }
}

export default redux(MatchItem);
