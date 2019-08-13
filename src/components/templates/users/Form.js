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

import styles from 'resources/css/templates/users/Form.module.css';

class UserForm extends React.Component
{
  render()
  {
    const userId = this.getUserId();
    const user = Util.get(this.props.users, userId);
    const teams = Util.filter(this.props.teams, {})

    if (user.id == null && userId != null) return <Loading />;
    
    return (
      <div className={styles.module}>

        <div className={styles.header}>User</div>

        <div className={styles.form}>
          <Formik
            initialValues={user}
            onSubmit={this.onSubmit}>
          {({
            values, errors, setFieldValue, handleSubmit
          }) => (

          <form onSubmit={handleSubmit}>
            {/* teams */}
            <div>
            <label className={cx(styles.lbl, styles.teamsLbl)}>Teamses</label>
            <div className={cx(styles.mul, styles.teamsMul)}>
            <MultiField name="teams_ids"
              values={ teams.map((e, idx) => { return {value: e.id, label: e.id} }) }
              setFieldValue={setFieldValue} value={values.teams_ids} />
            </div>
            <br/>
            </div>
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
    return (error ? <div className={styles.error}>{error}</div> : null);
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

  onSubmit(values, { setSubmitting })
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
