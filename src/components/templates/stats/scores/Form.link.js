/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';

import * as DataUtil from 'seed/util/DataUtil';

import styles from 'resources/css/templates/stats/scores/Form.module.css';

class _ScoreForm extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      score: {
        player_id: this.getPlayerId(),
        match_id: this.getMatchId(),
      },
      filters: {
        user_id: this.getUserId(),
        player_id: this.getPlayerId(),
        match_id: this.getMatchId(), 
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onMinChange = this.onMinChange.bind(this);
    this.onPlayerChange = this.onPlayerChange.bind(this);
    this.onMatchChange = this.onMatchChange.bind(this);
  }

  componentDidMount()
  {
    this.loadData();
    this.loadFkData();
  }

  /* Props */

  onSave(res)
  {
    //Suggested method
    this.props.onClose();
  }

  onError(error)
  {
    //Suggested method
    this.setState({
      error: 'An error has occurred, try again'
    });
  }

  loadData = () =>
  {
    const { getScoreDetails } = this.props;
    const scoreId = this.getScoreId();
    if (scoreId != null) {
      const callback = res => 
      {
        const scoreId = this.getScoreId();
        const score = DataUtil.getItem(this.props.scores, scoreId);
        if (score.id != null)
          this.setState({
            score: Object.assign({}, this.state.score, score)
          })
      }
      getScoreDetails(scoreId, callback);
    }
  }

  loadFkData = () => 
  {
    const { getPlayerList } = this.props;
    getPlayerList(this.state.filters);
    const { getMatchList } = this.props;
    getMatchList(this.state.filters);
  }

  fillData = e =>
  {
    let score = this.state.score ? this.state.score : {};
    score.min = score.min ? score.min : e.target.min.value;
    score.player_id = score.player_id ? score.player_id : e.target.player.value;
    score.match_id = score.match_id ? score.match_id : e.target.match.value;

    this.setState({
      score: score
    });
  }

  saveData = e =>
  {
    const { saveScore, setScore } = this.props;
    const scoreId = this.getScoreId();
    const onSave = res => 
    {
      if (res.ok) this.onSave(res.body);
      else this.onError(res.body)
    };
    if (scoreId == null && saveScore != null)
      saveScore(this.state.score, onSave)
    if (scoreId != null && setScore != null)
      setScore(scoreId, this.state.score, onSave);
  }

  /* Args */

  getScoreId() 
  {
    const { score_id } = this.props.match.params;
    const { scoreId } = this.props;
    return score_id ? score_id : scoreId;
  }

  /* Filters */

  getUserId()
  {
    const { user_id } = this.props.match.params;
    const { userId } = this.props;
    return user_id == 0 ? sessionStorage.getItem('id') : 
           user_id ? user_id : 
           userId;
  }
  getPlayerId()
  {
    const { player_id } = this.props.match.params;
    const { playerId } = this.props;
    return player_id ? player_id : playerId;
  }
  getMatchId()
  {
    const { match_id } = this.props.match.params;
    const { matchId } = this.props;
    return match_id ? match_id : matchId;
  }

  /* Events */

  onSubmit(e)
  {
    e.preventDefault();
    this.fillData(e);
    this.saveData(e);
  }
  
  onMinChange(e)
  {
    let score = this.state.score ? this.state.score : {};
    score.min = e.target.value;  
    this.setState({
      score: score
    });
  }
  
  onPlayerChange(e)
  {
    let score = this.state.score ? this.state.score : {};
    score.player_id = e.target.value;
    this.setState({
      score: score
    });
  }
  
  onMatchChange(e)
  {
    let score = this.state.score ? this.state.score : {};
    score.match_id = e.target.value;
    this.setState({
      score: score
    });
  }

  /* Components */

  renderError()
  {
    const { error } = this.state;
    return ( 
    error ? <div className={styles.error}>{error}</div> : null
    );
  }
}

export default _ScoreForm;