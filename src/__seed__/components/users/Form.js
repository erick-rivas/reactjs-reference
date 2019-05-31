/*
__Seed builder__v1.0
*/

import * as React from 'react';

import * as Util from 'containers/helpers/Util'

class _UserForm extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      user: {
      }
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount()
  {
    this.loadData();
  }

  componentWillReceiveProps(nextProps)
  {
    if (nextProps.users != null){
      const userId = this.getUserId();
      const user = Util.getItem(nextProps.users, userId);
      if (user.id != null)
        this.setState({
          user: this.assignData(this.state.user, user)
        })
    }
  }

  assignData = (prevUser, user) =>
  {
    return Object.assign({}, prevUser, user)
  }

  loadData = () =>
  {
    const { getUserDetails } = this.props;
    const userId = this.getUserId();
    if (getUserDetails != null && userId != null)
      getUserDetails(userId);
  }

  saveData = () =>
  {
    const { saveUser, setUser } = this.props;
    const userId = this.getUserId()
    const onSave = res => 
    {
      if (res.ok) this.onSave(res.body);
      else this.onError(res.body)
    }
    if (userId == null && saveUser != null)
      saveUser(this.state.user, onSave)
    if (userId != null && setUser != null)
      setUser(userId, this.state.user, onSave);
  }


  /* Props */

  getUserId(){}  
  onSave(res) {}
  onError(error) {}


  /* Events */


  onSubmit(e)
  {
    e.preventDefault();
    this.saveData()
  }
  
}

export default _UserForm;
