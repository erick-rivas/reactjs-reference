/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';
import { Formik, Field } from 'formik';

import MultiField from 'seed/components/helpers/MultiField'
import FileField from 'seed/components/helpers/FileField'
import Loading from 'seed/components/helpers/Loading';

import c from 'resources/css/templates/users/Form.module.css';

class UserForm extends React.Component
{
  render()
  {
    const userId = this.getUserId();
    const user = Util.get(this.props.users, userId);
    const teams = Util.filter(this.props.teams, {})

    if (user.id == null && userId != null) return <Loading />;
    
    return (
      <div className={c.module}>

        <div className={c.header}>User</div>

        <div className={c.form}>

          <Formik
             initialValues={user}
             onSubmit={this.onSubmit}
             render={f => (

          <form onSubmit={f.handleSubmit}>
            {/* teams */}
            <div>
            <label className={cx(c.lbl, c.teamsLbl)}>Teams</label>
            <div className={cx(c.mul, c.teamsMul)}>
            <MultiField name="team_ids"
              values={ teams.map((e, idx) => { return {value: e.id, label: e.id} }) }
              setFieldValue={f.setFieldValue} value={f.values.team_ids} />
            </div>
            <br/>
            </div>
            {this.renderError()}
            <button type="submit" className={c.submit}>Send</button>
          </form>
          )}
          />
        </div>
      </div>
    );
  }

  renderError()
  {
    const { error } = this.state;
    return (error ? <div className={c.error}>{error}</div> : null);
  }

  /*
  * Component logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount()
  {
    const userId = this.getUserId();
    if (userId != null) 
      this.loadData();
    this.loadFkData();
  }

  /* Events */

  onSubmit(values)
  {
    const onSave = res =>
    {
      if (res.ok) this.onSave(res.body);
      else this.onError(res.body)
    };
    const userId = this.getUserId();
    if (userId == null) this.props.saveUser(values, onSave)
    else this.props.setUser(userId, values, onSave);
  }

  onSave(res)
  {
    const { url } = this.props.match
    const backUrl = url.substring(0, url.lastIndexOf('/'));
    this.props.history.push(backUrl);
  }

  onError(error)
  {
    this.setState({
      error: 'An error has occurred, try again'
    });
  }

  /* Actions */

  loadData()
  {
    const userId = this.getUserId();
    this.props.getUserDetails(userId);
  }

  loadFkData() 
  {
    this.props.getTeamList({});
  }

  /* Args */

  getUserId() 
  {
    return this.props.userId ?
      this.props.userId :
      this.props.match.params.user_id;
  }
}

export default redux(UserForm);
