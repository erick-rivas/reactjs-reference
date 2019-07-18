/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Formik, Field } from 'formik';

import FileField from 'seed/components/helpers/FileField'
import Loading from 'seed/components/helpers/Loading';

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

          <Formik
            initialValues={score}
            validate={this.onValidate}
            onSubmit={this.onSubmit}>
          {({
            values,
            errors,
            setFieldValue,
            handleSubmit
          }) => (

          <form onSubmit={handleSubmit}>

            {/* Suggested divs */}
            <label className={cx(styles.lbl, styles.minLbl)}>Min</label><br/>
            <Field type="number" name="min" className={cx(styles.txt, styles.minTxt)} />
            <br/>
            {filters.player_id == null ?
                <div>
                <label className={cx(styles.lbl, styles.playerLbl)}>Player</label>
                <Field component="select" name="player_id" className={cx(styles.ops, styles.playerOps)} >
                  <option value="">Select an option</option>
                  { players.map((e, idx) => <option value={e.id}>{e.id}</option>) }
                </Field>
                <br/>
                </div> : null}
            {filters.match_id == null ?
                <div>
                <label className={cx(styles.lbl, styles.matchLbl)}>Match</label>
                <Field component="select" name="match_id" className={cx(styles.ops, styles.matchOps)} >
                  <option value="">Select an option</option>
                  { matches.map((e, idx) => <option value={e.id}>{e.id}</option>) }
                </Field>
                <br/>
                </div> : null}

            {this.renderError()}

            <button type="submit" className={styles.submit}>Send</button>

          </form>
          )}
          </Formik>
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
  * Component logic
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
    this.onValidate = this.onValidate.bind(this);
  }

  componentDidMount()
  {
    this.loadData();
    this.loadFkData();
  }

  /* Events */

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

  onSubmit(values, { setSubmitting })
  {
    let score = this.state.score ? this.state.score : {};
    
    score.min = values.min;

    score.player_id = values.player_id;
    score.match_id = values.match_id;
    
    this.setState({
      score: score
    });
    this.saveData();
  }

  onValidate()
  {
  }

  /* Actions */

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

  saveData = () =>
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
}

export default redux(ScoreForm);
