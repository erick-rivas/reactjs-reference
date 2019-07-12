/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';
import redux from 'seed/helpers/redux'
import { Link } from 'react-router-dom';

import Loading from 'components/helpers/Loading';
import Modal from 'components/helpers/Modal';
import MatchForm from 'components/templates/stats/matches/Form';

import styles from 'resources/css/templates/stats/matches/options/Details.module.css';

class MatchDetailsOptions extends React.Component
{
  render()
  {
    const { url } = this.props.match;
    const { is_editing } = this.state;
    const editModal = is_editing ? this.renderModal() : null;
    
    return (
    <div className={styles.module}>
      <Svg className={styles.back} 
        src={require('resources/icons/ic_arrow_back.svg')}
        onClick={this.onBackClick} />
       <div className={styles.options}>
        <button className={cx(styles.btn, styles.edit)} type="button" 
          onClick={this.onEditClick}>Edit</button>
         <button className={cx(styles.btn, styles.delete)} type="button" 
          onClick={this.onDeleteClick}>Delete</button>
      </div>
      {editModal}
    </div>
    );
  }

  /*
  * Business logic
  */

  constructor(props)
  {
    super(props);
    this.state = {
      match: {},
      is_editing: false
    };
    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }

  /* Props */

  onDelete(res)
  {
    //Suggested method
    const { url } = this.props.match
    const backUrl = url.substring(0, url.lastIndexOf('/'));
    this.props.history.push(backUrl);
  }

  onDeleteError(error)
  {
    //Suggested method
    const { url } = this.props.match
    const backUrl = url.substring(0, url.lastIndexOf('/'));
    this.props.history.push(backUrl);
  }

  /* Events */

  onEditClick()
  {
    this.setState({
      is_editing: true
    })
  }

  onDeleteClick()
  {
    const { deleteMatch } = this.props;
    const matchId = this.getMatchId();
    const onDelete = res => 
    {
      if (res.ok) this.onDelete(res.body);
      else this.onDeleteError(res.body);
    };
    deleteMatch(matchId, onDelete);
  }

  onModalClose()
  {
    this.setState({
      is_editing: false
    })
  }

  onBackClick()
  {
    const { url } = this.props.match
    const backUrl = url.substring(0, url.lastIndexOf('/'));
    this.props.history.push(backUrl);
  }

  /* Args */

  getMatchId() 
  {
    const { match_id } = this.props.match.params;
    const { matchId } = this.props;
    return match_id ? match_id : matchId;
  }

  /* Components */

  renderModal()
  {
    return (
    <Modal
        match={this.props.match}
        onClose={this.onModalClose}>
        <MatchForm />
      </Modal>
    );
  }
}

export default redux(MatchDetailsOptions);
