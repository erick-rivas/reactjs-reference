/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil';
import cx from 'classnames';
import redux from 'seed/helpers/redux';

import { getDateInput } from 'seed/util/FormatUtil';
import Loading from 'components/helpers/Loading';

import styles from 'resources/css/templates/stats/scores/Form.module.css';

class ScoreForm extends React.Component
{
  render()
  {
    const { score = {} } = this.state;
    const { players = [] } = this.props;
    const { matches = [] } = this.props;
    const { filters } = this.state;
    const scoreId = this.getScoreId();
    if (score.id == null && scoreId != null) return <Loading />;
    
    return (
    <div className={styles.module}>
      <div className={styles.header}>
        Score
      </div>

      <div className={styles.form}>
        <form  onSubmit={this.onSubmit}>

          {/* Suggested divs */}
          <label className={cx(styles.lbl, styles.minLbl)}>Min</label><br/>
          <input type="number" name="min" className={cx(styles.txt, styles.minTxt)} value={score.min} onChange={this.onMinChange} required></input>
          <br/>
          {filters.player_id == null ?
              <div>
              <label className={cx(styles.lbl, styles.playerLbl)}>Player</label>
              <select name="player" className={cx(styles.ops, styles.playerOps)} value={score.player_id} onChange={this.onPlayerChange}>
              { players.map(e => <option value={e.id}>{e.id}</option>) }
              </select>
              <br/>
              </div> : null}
          {filters.match_id == null ?
              <div>
              <label className={cx(styles.lbl, styles.matchLbl)}>Match</label>
              <select name="match" className={cx(styles.ops, styles.matchOps)} value={score.match_id} onChange={this.onMatchChange}>
              { matches.map(e => <option value={e.id}>{e.id}</option>) }
              </select>
              <br/>
              </div> : null}

          {this.renderError()}

          <button type="submit" className={styles.submit}>Send</button>

        </form>
      </div>
    </div>
    );
  }

  renderError()
  {
    const { error } = this.state;
    return ( 
    error ? <div className={styles.error}>{error}</div> : null
    );
  }

  /*
  * Business logic
  */

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
}

export default redux(ScoreForm);
