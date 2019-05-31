/*
__Seed builder__v1.0
*/

import * as React from 'react';

import * as Util from 'containers/helpers/Util'

class _ScoreForm extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      score: {
        player_id: this.getPlayerId(),
        match_id: this.getMatchId(),
      }
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onMinChange = this.onMinChange.bind(this);
  }

  componentDidMount()
  {
    this.loadData();
  }

  componentWillReceiveProps(nextProps)
  {
    if (nextProps.scores != null){
      const scoreId = this.getScoreId();
      const score = Util.getItem(nextProps.scores, scoreId);
      if (score.id != null)
        this.setState({
          score: this.assignData(this.state.score, score)
        })
    }
  }

  assignData = (prevScore, score) =>
  {
    score.player_id = score.player.id ? score.player.id : score.player;
    score.match_id = score.match.id ? score.match.id : score.match;
    return Object.assign({}, prevScore, score)
  }

  loadData = () =>
  {
    const { getScoreDetails } = this.props;
    const scoreId = this.getScoreId();
    if (getScoreDetails != null && scoreId != null)
      getScoreDetails(scoreId);
  }

  saveData = () =>
  {
    const { saveScore, setScore } = this.props;
    const scoreId = this.getScoreId()
    const onSave = res => 
    {
      if (res.ok) this.onSave(res.body);
      else this.onError(res.body)
    }
    if (scoreId == null && saveScore != null)
      saveScore(this.state.score, onSave)
    if (scoreId != null && setScore != null)
      setScore(scoreId, this.state.score, onSave);
  }


  /* Props */

  getScoreId(){}
  getPlayerId(){}
  getMatchId(){}  
  onSave(res) {}
  onError(error) {}


  /* Events */


  onSubmit(e)
  {
    e.preventDefault();
    this.saveData()
  }
  
  onMinChange(e)
  {
    let score = this.state.score ? this.state.score : {}
    score.min = e.target.value  
    this.setState({
      score: score
    });
  }
}

export default _ScoreForm;
