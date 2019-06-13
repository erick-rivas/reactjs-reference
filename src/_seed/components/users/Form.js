/*
__Seed builder__v1.0
  (Read_only) Modify via models.json
*/

import * as React from 'react';

import * as DataUtil from 'util/DataUtil';

import styles from 'util/css/users/Form.module.css';

class _UserForm extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      user: {
      },
      filters: {
        user_id: this.getUserId(), 
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount()
  {
    this.loadData();
    this.loadFkData();
  }

  loadData = () =>
  {
    const { getUserDetails } = this.props;
    const userId = this.getUserId();
    if (userId != null) {
      const callback = res => 
      {
        const userId = this.getUserId();
        const user = DataUtil.getItem(this.props.users, userId);
        if (user.id != null)
          this.setState({
            user: Object.assign({}, this.state.user, user)
          })
      }
      getUserDetails(userId, callback);
    }
  }

  loadFkData = () => 
  {
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

  onSave(res) {}
  onError(error) {}


  /* Filters */

  getUserId()
  {
    const { user_id } = this.props.match.params;
    return user_id == 0 ? 
      sessionStorage.getItem('id') : null;
  }

  getUserId() 
  {
    const { user_id } = this.props.match.params;
    const { userId } = this.props;
    return user_id ? user_id : userId;
  }  


  /* Events */

  onSubmit(e)
  {
    e.preventDefault();
    this.saveData();
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

export default _UserForm;
