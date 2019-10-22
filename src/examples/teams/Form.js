/*
__Seed builder__v0.1.8
*/

import React, {useState} from 'react';
import { useSave, useSet, useQuery, useDetail } from 'seed/gql'
import * as queries from 'seed/gql/queries'
import { Formik, Field } from 'formik';

import MultiField from 'seed/components/helpers/MultiField'
import FileField from 'seed/components/helpers/FileField'
import Loading from 'seed/components/helpers/Loading';

import cx from 'classnames';
import styles from 'resources/css/examples/teams/Form.module.css';

const TEAMS  = `
{
  teams {
    id
  }
}
`

function TeamForm(props)
{
  const [state, setState] = useState({});

  const { url } = props.match;
  const { team_id }  = props.match.params;
  const editMode = team_id != null;

  const saveOptions = {
    onCompleted: data =>
    {
      const backUrl = url.substring(0, url.lastIndexOf('/'));
      props.history.push(backUrl);
    },
    onError: error => setState({ error: 'An error has occurred, try again' })
  };

  const [callSave, qSave] = useSave(queries.SAVE_TEAM, saveOptions);
  const [callSet, qSet] = useSet(queries.SET_TEAM, saveOptions);

  const qTeam = useDetail(queries.TEAM, team_id);
  const qTeams = useQuery(TEAMS);

  if (editMode && qTeam.loading) return <Loading />;
  if (editMode && qTeam.error) return "Error";

  const onSubmit = values =>
  {
    values.id = team_id;
    if (editMode) callSet(values);
    else callSave(values);
  }

  const { team = {} } = qTeam.data;
  const { teams = [] } = qTeams.data;

  return (
    <div className={styles.module}>
      <div className={styles.header}>Team</div>
      <div className={styles.form}>
        <Formik
           initialValues={team}
           onSubmit={onSubmit}
           render={f => (

        <form onSubmit={f.handleSubmit}>
          
          <label className={styles.lbl}>Name</label><br/>
          <Field type="text" name="name"
            className={styles.txt} />
          <br/>
          
          <label className={styles.lbl}>Logo</label><br/>
          <FileField name="logo"
            accept="image/*" setFieldValue={f.setFieldValue}
            className={styles.fil}  />
          { f.values.logo ?
            <img src={f.values.logo.url} className={styles.img} /> : null }
          
          <label className={styles.lbl}>Description</label><br/>
          <Field type="text" name="description"
            component="textarea" rows="3"
            className={styles.txa} />
          <br/>
          
          <label className={styles.lbl}>Market value</label><br/>
          <Field type="number" name="marketValue"
            className={styles.txt} />
          <br/>
          
          <div>
          <label className={styles.lbl}>Rival</label>
          <Field component="select" name="rival.id"
            className={styles.ops} >
            <option value="">Select an option</option>
            { teams.map((e, idx) => <option value={e.id}>{e.id}</option>) }
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

export default TeamForm;
