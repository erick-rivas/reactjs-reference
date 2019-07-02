/*
__Seed builder__v1.0

  Guidelines:
    - Parent component automatically handle data loading and CRUD operations
    - To filter data (fk) modify filters with router params or props
    - Modify ALL components if required MAINTAINING the structure of input fields.

  Fields:
    - id
    - username
    - first_name
    - last_name
    - email
    - is_active
    - teams

  Args:
    - user_id

  Filters:
    - user_id 
*/

import * as React from 'react';
import cx from 'classnames';

import _UserForm from '_seed/components/users/Form';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/users/Form.module.css';
import { getDateInput } from 'util/FormatUtil';

class UserForm extends _UserForm
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

  constructor(props)
  {
    super(props);
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

}

export default UserForm;
