/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Formik, Field } from 'formik';

import FileField from 'seed/components/helpers/FileField'
import Loading from 'seed/components/helpers/Loading';

import styles from 'resources/css/templates/users/Form.module.css';

class UserForm extends React.Component
{
  render()
  {
    const { user = {} } = this.state;
    const userId = this.getUserId();
    if (user.id == null && userId != null) return <Loading />;
    
    return (
      <div className={styles.module}>

        <div className={styles.header}>User</div>

        <div className={styles.form}>
          <Formik
            initialValues={user}
            validate={this.onValidate}
            onSubmit={this.onSubmit}>
          {({
            values, errors, setFieldValue, handleSubmit
          }) => (

          <form onSubmit={handleSubmit}>
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
    this.state = {
      user: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onValidate = this.onValidate.bind(this);
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
    const userId = this.getUserId();
    const onSave = res =>
    {
      if (res.ok) this.onSave(res.body);
      else this.onError(res.body)
    };
    if (userId == null) this.props.saveUser(values, onSave)
    else this.props.setUser(userId, values, onSave);
  }

  onValidate(){}

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
    const callback = res => 
    {
      const user = DataUtil.getItem(this.props.users, userId);
      if (user.id != null)
        this.setState({
          user: Object.assign({}, this.state.user, user)
        })
    }
    this.props.getUserDetails(userId, callback);
  }

  loadFkData() 
  {
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
