/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';

import * as DataUtil from 'util/DataUtil';

import styles from 'util/css/matches/Form.module.css';

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

  saveData = () =>
  {
    const { saveMatch, setMatch } = this.props;
    const matchId = this.getMatchId()
    const onSave = res => 
    {
      if (res.ok) this.onSave(res.body);
      else this.onError(res.body)
    }
    if (matchId == null && saveMatch != null)
      saveMatch(this.state.match, onSave)
    if (matchId != null && setMatch != null)
      setMatch(matchId, this.state.match, onSave);
  }


  /* Props */

  onSave(res) {}
  onError(error) {}


  /* Filters */

  getUserId()
  {
    const { user_id } = this.props.match.params;
    return user_id == 0 ? 
      sessionStorage.getItem('id') : null;
  }

  getMatchId() 
  {
    const { match_id } = this.props.match.params;
    const { matchId } = this.props;
    return match_id ? match_id : matchId;
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
    this.saveData();
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
