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

import styles from 'resources/css/templates/teams/Form.module.css';

class TeamForm extends React.Component
{
  render()
  {
    const { team = {} } = this.state;
    const { teams = [] } = this.props;
    const { filters } = this.state;
    const teamId = this.getTeamId();
    if (team.id == null && teamId != null) return <Loading />;
    
    return (
      <div className={styles.module}>

        <div className={styles.header}>
          Team
        </div>

        <div className={styles.form}>

          <Formik
            initialValues={team}
            validate={this.onValidate}
            onSubmit={this.onSubmit}>
          {({
            values,
            errors,
            setFieldValue,
            handleSubmit
          }) => (

          <form onSubmit={handleSubmit}>

            {/* Suggested divs */}
            <label className={cx(styles.lbl, styles.nameLbl)}>Name</label><br/>
            <Field type="text" name="name" className={cx(styles.txt, styles.nameTxt)} />
            <br/>
            <label className={cx(styles.lbl, styles.logoLbl)}>Logo</label><br/>
            <FileField name="logo" className={cx(styles.fil, styles.logoFil)} accept="image/*" setFieldValue={setFieldValue}/>
            { values.logo ?
              <img src={values.logo.url} className={cx(styles.img, styles.logoImg)} /> : null }
            <label className={cx(styles.lbl, styles.descriptionLbl)}>Description</label><br/>
            <Field component="textarea" name="description" type="text" rows="3" className={cx(styles.txa, styles.descriptionTxa)} />
            <br/>
            <label className={cx(styles.lbl, styles.marketValueLbl)}>Market value</label><br/>
            <Field type="number" name="market_value" className={cx(styles.txt, styles.marketValueTxt)} />
            <br/>
            {filters.rival_id == null ?
                <div>
                <label className={cx(styles.lbl, styles.rivalLbl)}>Rival</label>
                <Field component="select" name="rival_id" className={cx(styles.ops, styles.rivalOps)} >
                  <option value="">Select an option</option>
                  { teams.map((e, idx) => <option value={e.id}>{e.id}</option>) }
                </Field>
                <br/>
                </div> : null}

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
    return ( 
    error ? <div className={styles.error}>{error}</div> : null
    );
  }

  /*
  * Component logic
  */

  constructor(props)
  {
    super(props);
    this.state = {
      team: {
        rival_id: this.getRivalId(),
      },
      filters: {
        user_id: this.getUserId(),
        rival_id: this.getRivalId(), 
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onValidate = this.onValidate.bind(this);
  }

  componentDidMount()
  {
    this.loadData();
    this.loadFkData();
  }

  /* Events */

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

  onSubmit(values, { setSubmitting })
  {
    let team = this.state.team ? this.state.team : {};
    
    team.name = values.name;
    team.logo_id = values.logo.id;
    team.description = values.description;
    team.market_value = values.market_value;

    team.rival_id = values.rival_id;
    
    this.setState({
      team: team
    });
    this.saveData();
  }

  onValidate()
  {
  }

  /* Actions */

  loadData = () =>
  {
    const { getTeamDetails } = this.props;
    const teamId = this.getTeamId();
    if (teamId != null) {
      const callback = res => 
      {
        const teamId = this.getTeamId();
        const team = DataUtil.getItem(this.props.teams, teamId);
        if (team.id != null)
          this.setState({
            team: Object.assign({}, this.state.team, team)
          })
      }
      getTeamDetails(teamId, callback);
    }
  }

  loadFkData = () => 
  {
    const { getTeamList } = this.props;
    getTeamList(this.state.filters);
  }

  saveData = () =>
  {
    const { saveTeam, setTeam } = this.props;
    const teamId = this.getTeamId();
    const onSave = res => 
    {
      if (res.ok) this.onSave(res.body);
      else this.onError(res.body)
    };
    if (teamId == null && saveTeam != null)
      saveTeam(this.state.team, onSave)
    if (teamId != null && setTeam != null)
      setTeam(teamId, this.state.team, onSave);
  }

  /* Args */

  getTeamId() 
  {
    const { team_id } = this.props.match.params;
    const { teamId } = this.props;
    return team_id ? team_id : teamId;
  }

  /* Filters */

  getUserId()
  {
    const { user_id } = this.props.match.params;
    const { userId } = this.props;
    return user_id == 0 ? sessionStorage.getItem('id') : 
           user_id ? user_id : 
           userId;
  }
  getRivalId()
  {
    const { rival_id } = this.props.match.params;
    const { rivalId } = this.props;
    return rival_id ? rival_id : rivalId;
  }  
}

export default redux(TeamForm);
