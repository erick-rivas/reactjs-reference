/*
__Seed builder__v1.0
*/

import * as React from 'react';

import * as Util from 'containers/helpers/Util'

class _MatchForm extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      match: {
        local_id: this.getLocalId(),
        visitor_id: this.getVisitorId(),
      }
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
  }

  componentDidMount()
  {
    this.loadData();
  }

  componentWillReceiveProps(nextProps)
  {
    if (nextProps.matches != null){
      const matchId = this.getMatchId();
      const match = Util.getItem(nextProps.matches, matchId);
      if (match.id != null)
        this.setState({
          match: this.assignData(this.state.match, match)
        })
    }
  }

  assignData = (prevMatch, match) =>
  {
    match.local_id = match.local.id ? match.local.id : match.local;
    match.visitor_id = match.visitor.id ? match.visitor.id : match.visitor;
    return Object.assign({}, prevMatch, match)
  }

  loadData = () =>
  {
    const { getMatchDetails } = this.props;
    const matchId = this.getMatchId();
    if (getMatchDetails != null && matchId != null)
      getMatchDetails(matchId);
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

  getMatchId(){}
  getLocalId(){}
  getVisitorId(){}  
  onSave(res) {}
  onError(error) {}


  /* Events */


  onSubmit(e)
  {
    e.preventDefault();
    this.saveData()
  }
  
  onDateChange(e)
  {
    let match = this.state.match ? this.state.match : {}
    match.date = e.target.value  
    this.setState({
      match: match
    });
  }
  onTypeChange(e)
  {
    let match = this.state.match ? this.state.match : {}
    match.type = e.target.value  
    this.setState({
      match: match
    });
  }
}

export default _MatchForm;
