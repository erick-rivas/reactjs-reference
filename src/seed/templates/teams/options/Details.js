/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import Svg from 'react-svg';
import { Link } from 'react-router-dom';

import cls from 'resources/css/seed/templates/teams/options/Details.module.css';

class TeamDetailsOptions extends React.Component
{
  render()
  {
    const { url } = this.props.match;
    
    return (
      <div className={cls.module}>
        <Svg className={cls.back}
          src={require('resources/icons/ic_arrow_back.svg')}
          onClick={this.onClickBack} />
         <div className={cls.options}>
          <Link to={`${url}/edit`} className={cx(cls.btn, cls.edit)}>Edit</Link>
          <button className={cx(cls.btn, cls.delete)} onClick={this.onClickDelete}>Delete</button>
        </div>
      </div>
    );
  }

  constructor(props)
  {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
  }

  /* Events */

  onClickBack()
  {
    const { url } = this.props.match
    const backUrl = url.substring(0, url.lastIndexOf('/'));
    this.props.history.push(backUrl);
  }

  onClickDelete()
  {
    const onDelete = res =>
    {
      if (res.ok) this.onDelete(res.body);
      else this.onDeleteError(res.body);
    };
    const teamId = this.getTeamId();
    this.props.deleteTeam(teamId, onDelete);
  }

  onDelete(res)
  {
    const { url } = this.props.match
    const backUrl = url.substring(0, url.lastIndexOf('/'));
    this.props.history.push(backUrl);
  }

  onDeleteError(error) {}

  /* Args */

  getTeamId() 
  {
    return this.props.match.params.team_id;
  }
}

export default redux(TeamDetailsOptions);
