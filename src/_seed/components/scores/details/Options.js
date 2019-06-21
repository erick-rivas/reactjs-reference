/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';

import Modal from 'components/helpers/Modal';
import ScoreForm from 'containers/scores/Form';

class _ScoreDetailsOptions extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      score: {},
      is_editing: false
    };
    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
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
    const { deleteScore } = this.props;
    const scoreId = this.getScoreId();
    const onDelete = res => 
    {
      if (res.ok) this.onDelete(res.body);
      else this.onDeleteError(res.body);
    };
    deleteScore(scoreId, onDelete);
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




 /* Props */

  onDelete(res) {}
  onDeleteError(error) {}

  /* Args */

  getScoreId() 
  {
    const { score_id } = this.props.match.params;
    const { scoreId } = this.props;
    return score_id ? score_id : scoreId;
  }


  /* Components */

  renderModal()
  {
    return (
    <Modal
        match={this.props.match}
        onClose={this.onModalClose}>
        <ScoreForm />
      </Modal>
    );
  }
}

export default _ScoreDetailsOptions;
