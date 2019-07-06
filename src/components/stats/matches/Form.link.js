/*
__Seed builder__v1.0
*/

import * as React from 'react';

import * as DataUtil from 'util/DataUtil';

import styles from 'resources/css/stats/matches/Form.module.css';

class _MatchForm extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      match: {
        local_id: this.getLocalId(),
        visitor_id: this.getVisitorId(),
      },
      filters: {
        user_id: this.getUserId(),
        local_id: this.getLocalId(),
        visitor_id: this.getVisitorId(), 
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onLocalChange = this.onLocalChange.bind(this);
    this.onVisitorChange = this.onVisitorChange.bind(this);
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
    const { getMatchDetails } = this.props;
    const matchId = this.getMatchId();
    if (matchId != null) {
      const callback = res => 
      {
        const matchId = this.getMatchId();
        const match = DataUtil.getItem(this.props.matches, matchId);
        if (match.id != null)
          this.setState({
            match: Object.assign({}, this.state.match, match)
          })
      }
      getMatchDetails(matchId, callback);
    }
  }

  loadFkData = () => 
  {
    const { getTeamList } = this.props;
    getTeamList(this.state.filters);
  }

  fillData = e =>
  {
    let match = this.state.match ? this.state.match : {};
    match.date = match.date ? match.date : e.target.date.value;
    match.type = match.type ? match.type : e.target.type.value;
    match.local_id = match.local_id ? match.local_id : e.target.local.value;
    match.visitor_id = match.visitor_id ? match.visitor_id : e.target.visitor.value;

    this.setState({
      match: match
    });
  }

  saveData = e =>
  {
    const { saveMatch, setMatch } = this.props;
    const matchId = this.getMatchId();
    const onSave = res => 
    {
      if (res.ok) this.onSave(res.body);
      else this.onError(res.body)
    };
    if (matchId == null && saveMatch != null)
      saveMatch(this.state.match, onSave)
    if (matchId != null && setMatch != null)
      setMatch(matchId, this.state.match, onSave);
  }

  /* Args */

  getMatchId() 
  {
    const { match_id } = this.props.match.params;
    const { matchId } = this.props;
    return match_id ? match_id : matchId;
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
  getLocalId()
  {
    const { local_id } = this.props.match.params;
    const { localId } = this.props;
    return local_id ? local_id : localId;
  }
  getVisitorId()
  {
    const { visitor_id } = this.props.match.params;
    const { visitorId } = this.props;
    return visitor_id ? visitor_id : visitorId;
  }

  /* Events */

  onSubmit(e)
  {
    e.preventDefault();
    this.fillData(e);
    this.saveData(e);
  }
  
  onDateChange(e)
  {
    let match = this.state.match ? this.state.match : {};
    match.date = e.target.value;  
    this.setState({
      match: match
    });
  }
  
  onTypeChange(e)
  {
    let match = this.state.match ? this.state.match : {};
    match.type = e.target.value;  
    this.setState({
      match: match
    });
  }
  
  onLocalChange(e)
  {
    let match = this.state.match ? this.state.match : {};
    match.local_id = e.target.value;
    this.setState({
      match: match
    });
  }
  
  onVisitorChange(e)
  {
    let match = this.state.match ? this.state.match : {};
    match.visitor_id = e.target.value;
    this.setState({
      match: match
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

export default _MatchForm;
