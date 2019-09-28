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

import styles from 'resources/css/seed/examples/player_types/Form.module.css';

class PlayerTypeForm extends React.Component
{
  render()
  {
    const playerTypeId = this.getPlayerTypeId();
    const playerType = Util.get(this.props.playerTypes, playerTypeId);

    if (playerType.id == null && playerTypeId != null) return <Loading />;
    
    return (
      <div className={styles.module}>

        <div className={styles.header}>Player type</div>

        <div className={styles.form}>

          <Formik
             initialValues={playerType}
             onSubmit={this.onSubmit}
             render={f => (

          <form onSubmit={f.handleSubmit}>
            
            {/* name */}
            <label className={cx(styles.lbl, styles.nameLbl)}>Name</label><br/>
            <Field type="text" name="name"
              className={cx(styles.txt, styles.nameTxt)} />
            <br/>
            {this.state.error ?
              <div className={styles.error}>{this.state.error}</div> : null}
            <button type="submit" className={styles.submit}>Send</button>
          </form>
          )}
          />
        </div>
      </div>
    );
  }

  constructor(props)
  {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount()
  {
    const playerTypeId = this.getPlayerTypeId();
    if (playerTypeId != null) 
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
    const playerTypeId = this.getPlayerTypeId();
    if (playerTypeId == null) this.props.savePlayerType(values, onSave)
    else this.props.setPlayerType(playerTypeId, values, onSave);
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
    const playerTypeId = this.getPlayerTypeId();
    this.props.getPlayerTypeDetails(playerTypeId);
  }

  loadFkData() 
  {
  }

  /* Args */

  getPlayerTypeId() 
  {
    return this.props.match.params.player_type_id;
  }
}

export default redux(PlayerTypeForm);
