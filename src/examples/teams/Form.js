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
   const { url } = props.match;
   const { team_id }  = props.match.params;
   const editMode = team_id != null

  const [state, setState] = useState({})

  const saveOptions = {
    onCompleted: data =>
    {
      const backUrl = url.substring(0, url.lastIndexOf('/'));
      props.history.push(backUrl);
    },
    onError: error => setState({ error: 'An error has occurred, try again' })
  }
  const [callSave, qSave] = useSave(queries.SAVE_TEAM, saveOptions)
  const [callSet, qSet] = useSet(queries.SET_TEAM, saveOptions)

  const qTeam = useDetail(queries.TEAM, team_id);
  const qTeams = useQuery(TEAMS);

  if (editMode && qTeam.loading) return <Loading />;
  if (editMode && qTeam.error) return "Error";

  const onSubmit = values =>
  {
    values.id = team_id;
    if (editMode) callSet(values)
    else callSave(values)
  }

  const { team = {} } = qTeam.data ? qTeam.data : {}
  const { teams = [] } = qTeams.data ? qTeams.data : {}

  return (
    <div className={styles.module}>

      <div className={styles.header}>Team</div>

      <div className={styles.form}>

        <Formik
           initialValues={team}
           onSubmit={onSubmit}
           render={f => (

        <form onSubmit={f.handleSubmit}>
          
          {/* name */}
          <label className={cx(styles.lbl, styles.nameLbl)}>Name</label><br/>
          <Field type="text" name="name"
            className={cx(styles.txt, styles.nameTxt)} />
          <br/>
          
          {/* logo */}
          <label className={cx(styles.lbl, styles.logoLbl)}>Logo</label><br/>
          <FileField name="logo"
            accept="image/*" setFieldValue={f.setFieldValue}
            className={cx(styles.fil, styles.logoFil)}  />
          { f.values.logo ?
            <img src={f.values.logo.url} className={cx(styles.img, styles.logoImg)} /> : null }
          
          {/* description */}
          <label className={cx(styles.lbl, styles.descriptionLbl)}>Description</label><br/>
          <Field type="text" name="description"
            component="textarea" rows="3"
            className={cx(styles.txa, styles.descriptionTxa)} />
          <br/>
          
          {/* market_value */}
          <label className={cx(styles.lbl, styles.marketValueLbl)}>Market value</label><br/>
          <Field type="number" name="marketValue"
            className={cx(styles.txt, styles.marketValueTxt)} />
          <br/>
          
          {/* rival */}
          <div>
          <label className={cx(styles.lbl, styles.rivalLbl)}>Rival</label>
          <Field component="select" name="rival.id"
            className={cx(styles.ops, styles.rivalOps)} >
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
