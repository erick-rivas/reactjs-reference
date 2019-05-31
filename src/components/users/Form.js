/*
__Seed builder__v1.0
Fields:
    - id
    - username
    - first_name
    - last_name
    - email
    - is_active
    - teams
*/

import * as React from 'react';

import _UserForm from '__seed__/components/users/Form';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/users/Form.module.css';
import { getDateInput } from 'util/Format';

class UserForm extends _UserForm
{
  render()
  {
    const { user = {} } = this.state;
    const userId = this.getUserId();

    if (user.id == null && userId != null) return <Loading />
    return (
      <div className={styles.module}>
        <form onSubmit={this.onSubmit}>

          {/* Suggested divs */}
          <button type="submit" className={styles.submit}>Send</button>

        </form>
      </div>
    );
  }

  getUserId() 
  {
    //Suggested id
    return this.props.userId;
  } 

  onSave(res)
  {
  }

  onError(error)
  {
  }
}

export default UserForm;
