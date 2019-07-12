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

import styles from 'resources/css/templates/users/Form.module.css';

class UserForm extends React.Component
{
  render()
  {
    const { user = {} } = this.state;
    const { filters } = this.state;
    const userId = this.getUserId();
    if (user.id == null && userId != null) return <Loading />;
    
    return (
    <div className={styles.module}>
      <div className={styles.header}>
        User
      </div>

      <div className={styles.form}>
        <form  onSubmit={this.onSubmit}>

          {/* Suggested divs */}

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

  fillData = e =>
  {
    let user = this.state.user ? this.state.user : {};

    this.setState({
      user: user
    });
  }

  saveData = e =>
  {
    const { saveUser, setUser } = this.props;
    const userId = this.getUserId();
    const onSave = res => 
    {
      if (res.ok) this.onSave(res.body);
      else this.onError(res.body)
    };
    if (userId == null && saveUser != null)
      saveUser(this.state.user, onSave)
    if (userId != null && setUser != null)
      setUser(userId, this.state.user, onSave);
  }

  /* Args */

  getUserId() 
  {
    const { user_id } = this.props.match.params;
    const { userId } = this.props;
    return user_id ? user_id : userId;
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

  /* Events */

  onSubmit(e)
  {
    e.preventDefault();
    this.fillData(e);
    this.saveData(e);
  }
}

export default redux(UserForm);
