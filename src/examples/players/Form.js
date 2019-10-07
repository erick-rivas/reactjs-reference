/*
__Seed builder__v0.1.7
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
  const [state, setState] = useState({});

  const { url } = props.match;
  const { player_id }  = props.match.params;
  const editMode = player_id != null;

  const saveOptions = {
    onCompleted: data =>
    {
      const backUrl = url.substring(0, url.lastIndexOf('/'));
      props.history.push(backUrl);
    },
    onError: error => setState({ error: 'An error has occurred, try again' })
  };

  const [callSave, qSave] = useSave(queries.SAVE_PLAYER, saveOptions);
  const [callSet, qSet] = useSet(queries.SET_PLAYER, saveOptions);

  const qPlayer = useDetail(queries.PLAYER, player_id);
  const qTeams = useQuery(TEAMS);
  const qPlayerPositions = useQuery(PLAYER_POSITIONS);

  if (editMode && qPlayer.loading) return <Loading />;
  if (editMode && qPlayer.error) return "Error";

  const onSubmit = values =>
  {
    values.id = player_id;
    if (editMode) callSet(values);
    else callSave(values);
  }

  const { player = {} } = qPlayer.data;
  const { teams = [] } = qTeams.data;
  const { playerPositions = [] } = qPlayerPositions.data;

  return (
    <div className={styles.module}>
      <div className={styles.header}>Player</div>
      <div className={styles.form}>
        <Formik
           initialValues={player}
           onSubmit={onSubmit}
           render={f => (

        <form onSubmit={f.handleSubmit}>
          
          <label className={styles.lbl}>Name</label><br/>
          <Field type="text" name="name"
            className={styles.txt} />
          <br/>
          
          <label className={styles.lbl}>Photo</label><br/>
          <FileField name="photo"
            accept="image/*" setFieldValue={f.setFieldValue}
            className={styles.fil}  />
          { f.values.photo ?
            <img src={f.values.photo.url} className={styles.img} /> : null }
          
          <label className={styles.lbl}>Is active</label>
          <Field type="checkbox" name="isActive"
            className={styles.chk} />
          <br/>
          
          <div>
          <label className={styles.lbl}>Team</label>
          <Field component="select" name="team.id"
            className={styles.ops} >
            <option value="">Select an option</option>
            { teams.map((e, idx) => <option value={e.id}>{e.id}</option>) }
          </Field>
          <br/>
          </div>
          
          <div>
          <label className={styles.lbl}>Position</label>
          <Field component="select" name="position.id"
            className={styles.ops} >
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
