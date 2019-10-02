/*
__Seed builder__v1.0
*/

import React, {useState} from 'react';
import { useSave, useSet, useQuery, useDetail } from 'seed/gql'
import * as queries from 'seed/gql/queries'
import { Formik, Field } from 'formik';

import MultiField from 'seed/components/helpers/MultiField'
import FileField from 'seed/components/helpers/FileField'
import Loading from 'seed/components/helpers/Loading';

import cx from 'classnames';
import styles from 'resources/css/examples/players/Form.module.css';

const TEAMS  = `
{
  teams {
    id
  }
}
`
const PLAYER_POSITIONS  = `
{
  playerPositions {
    id
  }
}
`

function PlayerForm(props)
{
   const { url } = props.match;
   const { player_id }  = props.match.params;
   const editMode = player_id != null

  const [state, setState] = useState({})

  const saveOptions = {
    onCompleted: data =>
    {
      const backUrl = url.substring(0, url.lastIndexOf('/'));
      props.history.push(backUrl);
    },
    onError: error => setState({ error: 'An error has occurred, try again' })
  }
  const [callSave, qSave] = useSave(queries.SAVE_PLAYER, saveOptions)
  const [callSet, qSet] = useSet(queries.SET_PLAYER, saveOptions)

  const qPlayer = useDetail(queries.PLAYER, player_id);
  const qTeams = useQuery(TEAMS);
  const qPlayerPositions = useQuery(PLAYER_POSITIONS);

  if (editMode && qPlayer.loading) return <Loading />;
  if (editMode && qPlayer.error) return "Error";

  const onSubmit = values =>
  {
    values.id = player_id;
    if (editMode) callSet(values)
    else callSave(values)
  }

  const { player = {} } = qPlayer.data ? qPlayer.data : {}
  const { teams = [] } = qTeams.data ? qTeams.data : {}
  const { playerPositions = [] } = qPlayerPositions.data ? qPlayerPositions.data : {}

  return (
    <div className={styles.module}>

      <div className={styles.header}>Player</div>

      <div className={styles.form}>

        <Formik
           initialValues={player}
           onSubmit={onSubmit}
           render={f => (

        <form onSubmit={f.handleSubmit}>
          
          {/* name */}
          <label className={cx(styles.lbl, styles.nameLbl)}>Name</label><br/>
          <Field type="text" name="name"
            className={cx(styles.txt, styles.nameTxt)} />
          <br/>
          
          {/* photo */}
          <label className={cx(styles.lbl, styles.photoLbl)}>Photo</label><br/>
          <FileField name="photo"
            accept="image/*" setFieldValue={f.setFieldValue}
            className={cx(styles.fil, styles.photoFil)}  />
          { f.values.photo ?
            <img src={f.values.photo.url} className={cx(styles.img, styles.photoImg)} /> : null }
          
          {/* is_active */}
          <label className={cx(styles.lbl, styles.isActiveLbl)}>Is active</label>
          <Field type="checkbox" name="isActive"
            className={cx(styles.chk, styles.isActiveChk)} />
          <br/>
          
          {/* team */}
          <div>
          <label className={cx(styles.lbl, styles.teamLbl)}>Team</label>
          <Field component="select" name="team.id"
            className={cx(styles.ops, styles.teamOps)} >
            <option value="">Select an option</option>
            { teams.map((e, idx) => <option value={e.id}>{e.id}</option>) }
          </Field>
          <br/>
          </div>
          
          {/* position */}
          <div>
          <label className={cx(styles.lbl, styles.positionLbl)}>Position</label>
          <Field component="select" name="position.id"
            className={cx(styles.ops, styles.positionOps)} >
            <option value="">Select an option</option>
            { playerPositions.map((e, idx) => <option value={e.id}>{e.id}</option>) }
          </Field>
          <br/>
          </div>
          {state.error ?
            <div className={styles.error}>{state.error}</div> : null}
          <button type="submit" className={styles.submit}>Send</button>
        </form>
        )}
        />
      </div>
    </div>
  );
}

export default PlayerForm;
