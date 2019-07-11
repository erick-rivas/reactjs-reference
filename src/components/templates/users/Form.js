/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';

import { getDateInput } from 'seed/util/FormatUtil';
import Loading from 'components/helpers/Loading';

import Component from 'components/templates/users/Form.link';

import styles from 'resources/css/templates/users/Form.module.css';

class UserForm extends Component
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
}

export default UserForm;
