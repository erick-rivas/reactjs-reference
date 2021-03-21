# Views

Handle component rendering (DOM)
>    *An equivalent to view in MVC architecture*

## Examples

### List example

```javascript
const PlayerList = ({ players }) =>
  <div class={css.module}>
    <div class={css.header}>
      <Link to={`/new`}
        class={cx(css.btn, css.create)}>Create</Link>
    </div>
    <div class={css.content}>
      {
        players.map(player =>
          <NavLink
            key={player.id}
            to={`/${player.id}`}
            className={css.item}
            activeClassName={css.active}>
              <div class={css.title}>{player.id}</div>
              <div class={css.subtitle}>{JSON.stringify(player)}</div>
          </NavLink>
        )
      }
    </div>
  </div>
```

### Form example

```javascript
const PlayerForm = ({ player= {}, teams, playerPositions, error, onSubmit }) =>
  <div class={css.module}>
    <div class={css.header}>Player</div>
    <div class={css.form}>
      <Formik
          initialValues={player}
          onSubmit={onSubmit}>
     {({ values, setFieldValue}) =>
      <Form>
        <label class={css.lbl}>Name</label><br/>
        <Field type="text" name="name"
          class={css.txt} />
        <br/>
        <label class={css.lbl}>Photo</label><br/>
        <FileField name="photo"
          accept="image/*" setFieldValue={setFieldValue}
          class={css.fil}  />
        { values.photo ?
          <img src={values.photo.url} class={css.img} alt="Preview" /> : null }
        <label class={css.lbl}>Is active</label>
        <Field type="checkbox" name="isActive"
          class={css.chk} />
        <br/>
        <div>
        <label class={css.lbl}>Team</label>
        <Field component="select" name="team.id"
          class={css.ops} >
          <option value="">Select an option</option>
          {teams.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
        </Field>
        <br/>
        </div>
        <div>
        <label class={css.lbl}>Position</label>
        <Field component="select" name="position.id"
          class={css.ops} >
          <option value="">Select an option</option>
          {playerPositions.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
        </Field>
        <br/>
        </div>
        {error ? <div class={css.error}>{error}</div> : null}
        <button type="submit" class={css.submit}>Send</button>
      </Form> }
      </Formik>
    </div>
  </div>
```