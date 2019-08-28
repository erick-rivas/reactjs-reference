# Components

Represents the UI module of the application

-  [Guidelines](#guidelines)
-  [Examples](#example)
    -  [List example](#list-example)
    -  [Form example](#form-example)
-  [References](#references)

## Guidelines

-  Start with render methods and continue with component logic
-  Use redux wrapper to include actions methods
-  Include .module.scss next to the component with the same name

## Examples

### List example

```javascript

class TeamList extends React.Component
{

  render()
  {
    /*
    * The dataset is automatically bind by redux via props
    * Example: this.props.users
    * See /actions/__guides.md to see dataset list
    */

    const { teams = [] } = this.props;

    const teamList = teams.map(item =>
        <div>item.name</div>
    );

    return (
    <div className={styles.module}>
      { teamList }
    </div>
    );
  }

  /*
  * Component logic
  */

  componentDidMount()
  {
    /*
    * Automatically action methods (requests) are bind by redux via props
    * Example: this.props.getTeamList
    * See /actions/__guides.md to see method list
    *
    * NOTE: If an action is added via actions it is also bind automatically
    * Example: this.props.getTopPlayers()
    */

    const { getTeamList } = this.props;
    getTeamList(this.state.filters);
  }
}

/*
* Use redux wrapper to bind action methods
*/
export default redux(Home);
```

### Form example

```javascript

class TeamForm extends React.Component
{
  render()
  {
    const { team = {} } = this.state;
    const teamId = this.props.teamId;
    if (team.id == null && teamId != null) return <Loading />;

    return (
      <div className={styles.module}>

      /**
      * Use formik to simplify event handling of inputs
      */

      <Formik
        initialValues={team}
        onSubmit={this.onSubmit}
        render={f => (

      <form onSubmit={f.handleSubmit}>

        {/* Name */}
        <label className={cx(styles.lbl, styles.nameLbl)}>Name</label><br/>
        <Field type="text" name="name" className={cx(styles.txt, styles.nameTxt)} />
        <br/>
        {/* Description */}
        <label className={cx(styles.lbl, styles.descriptionLbl)}>Description</label><br/>
        <Field component="textarea" name="description" type="text" rows="3" className={cx(styles.txa, styles.descriptionTxa)} />
        <br/>
        <button type="submit" className={styles.submit}>Send</button>
      </form>
      )}
      </Formik>
    </div>
    );
  }
  /*
  * Component logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount()
  {
    this.loadData();
  }

  /* Events */

  onSubmit(values)
  {
    /*
    * Create a team object based on form values
    */

    let team = this.state.team ? this.state.team : {};
    team.name = values.name;
    team.description = values.description;
    this.saveData(team);
  }

  /* Actions */

  loadData()
  {
    /*
    * Load data to set initial data (Modify requirements)
    * Those methods are also bind by redux
    */

    const { getTeamDetails } = this.props;
    const teamId = this.props.teamId;
    if (teamId != null) {
      const callback = res =>
      {
        const teamId = this.props.teamId;
        const team = DataUtil.getItem(this.props.teams, teamId);
        if (team.id != null)
          this.setState({
            team: Object.assign({}, this.state.team, team)
          })
      }
      getTeamDetails(teamId, callback);
    }
  }

  saveData(team)
  {
    /*
    * Save and set methods are also provided automatically by redux functions
    * See /actions/__guides.md to see method list
    */

    const teamId = this.props.teamId;
    const onSave = res =>
    {
      if (res.ok) this.onSave(res.body);
      else this.onError(res.body)
    };
    if (teamId == null)
      this.props.saveTeam(team, onSave)
    else
      this.props.setTeam(teamId, team, onSave);
  }

  onSave(res)
  {
    this.props.onClose();
  }

  onError(error)
  {
    this.setState({
      error: 'An error has occurred, try again'
    });
  }
}

export default redux(TeamForm);
```

## References

Formik reference: [https://jaredpalmer.com/formik/docs/overview](https://jaredpalmer.com/formik/docs/overview)
