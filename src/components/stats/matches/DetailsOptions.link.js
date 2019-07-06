/*
__Seed builder__v1.0
*/

import * as React from 'react';

import Modal from 'components/helpers/Modal';
import MatchForm from 'containers/stats/matches/Form';

class _MatchDetailsOptions extends React.Component
{
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

export default _MatchDetailsOptions;
