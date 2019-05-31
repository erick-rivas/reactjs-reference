/*
__Seed builder__v1.0
*/

import * as React from 'react';

import * as Util from 'containers/helpers/Util'

class _PlayerForm extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      player: {
        team_id: this.getTeamId(),
      }
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onPhotoUrlChange = this.onPhotoUrlChange.bind(this);
    this.onIsActiveChange = this.onIsActiveChange.bind(this);
  }

  componentDidMount()
  {
    this.loadData();
  }

  componentWillReceiveProps(nextProps)
  {
    if (nextProps.players != null){
      const playerId = this.getPlayerId();
      const player = Util.getItem(nextProps.players, playerId);
      if (player.id != null)
        this.setState({
          player: this.assignData(this.state.player, player)
        })
    }
  }

  assignData = (prevPlayer, player) =>
  {
    player.team_id = player.team.id ? player.team.id : player.team;
    return Object.assign({}, prevPlayer, player)
  }

  loadData = () =>
  {
    const { getPlayerDetails } = this.props;
    const playerId = this.getPlayerId();
    if (getPlayerDetails != null && playerId != null)
      getPlayerDetails(playerId);
  }

  saveData = () =>
  {
    const { savePlayer, setPlayer } = this.props;
    const playerId = this.getPlayerId()
    const onSave = res => 
    {
      if (res.ok) this.onSave(res.body);
      else this.onError(res.body)
    }
    if (playerId == null && savePlayer != null)
      savePlayer(this.state.player, onSave)
    if (playerId != null && setPlayer != null)
      setPlayer(playerId, this.state.player, onSave);
  }


  /* Props */

  getPlayerId(){}
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
    let player = this.state.player ? this.state.player : {}
    player.name = e.target.value  
    this.setState({
      player: player
    });
  }
  onPhotoUrlChange(e)
  {
    let player = this.state.player ? this.state.player : {}
    player.photo_url = e.target.value  
    this.setState({
      player: player
    });
  }
  onIsActiveChange(e)
  {
    let player = this.state.player ? this.state.player : {}
    player.is_active = e.target.checked  
    this.setState({
      player: player
    });
  }
}

export default _PlayerForm;
