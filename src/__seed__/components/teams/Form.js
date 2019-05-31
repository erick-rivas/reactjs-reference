/*
__Seed builder__v1.0
*/

import * as React from 'react';

import * as Util from 'containers/helpers/Util'

class _TeamForm extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      team: {
      }
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onLogoUrlChange = this.onLogoUrlChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onMarketValueChange = this.onMarketValueChange.bind(this);
  }

  componentDidMount()
  {
    this.loadData();
  }

  componentWillReceiveProps(nextProps)
  {
    if (nextProps.teams != null){
      const teamId = this.getTeamId();
      const team = Util.getItem(nextProps.teams, teamId);
      if (team.id != null)
        this.setState({
          team: this.assignData(this.state.team, team)
        })
    }
  }

  assignData = (prevTeam, team) =>
  {
    return Object.assign({}, prevTeam, team)
  }

  loadData = () =>
  {
    const { getTeamDetails } = this.props;
    const teamId = this.getTeamId();
    if (getTeamDetails != null && teamId != null)
      getTeamDetails(teamId);
  }

  saveData = () =>
  {
    const { saveTeam, setTeam } = this.props;
    const teamId = this.getTeamId()
    const onSave = res => 
    {
      if (res.ok) this.onSave(res.body);
      else this.onError(res.body)
    }
    if (teamId == null && saveTeam != null)
      saveTeam(this.state.team, onSave)
    if (teamId != null && setTeam != null)
      setTeam(teamId, this.state.team, onSave);
  }


  /* Props */

  getTeamId(){}  
  onSave(res) {}
  onError(error) {}


  /* Events */


  onSubmit(e)
  {
    e.preventDefault();
    this.saveData()
  }
  
  onNameChange(e)
  {
    let team = this.state.team ? this.state.team : {}
    team.name = e.target.value  
    this.setState({
      team: team
    });
  }
  onLogoUrlChange(e)
  {
    let team = this.state.team ? this.state.team : {}
    team.logo_url = e.target.value  
    this.setState({
      team: team
    });
  }
  onDescriptionChange(e)
  {
    let team = this.state.team ? this.state.team : {}
    team.description = e.target.value  
    this.setState({
      team: team
    });
  }
  onMarketValueChange(e)
  {
    let team = this.state.team ? this.state.team : {}
    team.market_value = e.target.value  
    this.setState({
      team: team
    });
  }
}

export default _TeamForm;
