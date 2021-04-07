# Views

Handle component rendering (DOM)
>    *An equivalent to view in MVC architecture*

## Examples

### List example

```javascript
const PlayerList = ({ players, pageNum = 1, totalPages = 0, onClickPage = () => {} }) =>
  <div>
  <ul class="list-group">
  {
    players.map((player) =>
      <li key={player.id} class="list-group-item">
        <div class="row align-items-center gx-2">
          <div class="col-auto">
            <img class="avatar avatar-xs avatar-4by3" src="/theme/svg/components/placeholder-img-format.svg" alt="Icon" />
          </div>

          <div class="col">
            <h5 class="mb-0">
              <Link to={`/${player.id}`}>PLAYER {player.id}</Link>
            </h5>
            <ul class="list-inline list-separator small">
              <li class="list-inline-item">{ JSON.stringify(player).substring(0,70) + "…" }</li>
              <li class="list-inline-item">{ new Date(player.createdAt).getDate() + "." + (new Date(player.createdAt).getMonth() + 1) + "." + new Date(player.createdAt).getFullYear() }</li>

            </ul>
          </div>

          <div class="col-auto">
            {/* Options */}
            <Link to={`/${player.id}`} className="btn btn-sm btn-white">
              <span class="d-none d-sm-inline-block mr-1">Details</span>
            </Link>
          </div>
        </div>
      </li>
    )
  }
  </ul>

  <nav class="mt-3">
    <ul class="pagination">
      <li onClick={() => onClickPage(pageNum -1 )} class="page-item" style={ { visibility: pageNum > 1 ? "visible" : "hidden"} }>
        <a class="page-link" aria-label="Previous"><span aria-hidden="true">«</span><span class="sr-only">Previous</span></a>
      </li>
      {
         Array(totalPages).fill(0).map((ignore, idx) =>
           <li onClick={() => onClickPage(idx+1)} key={idx} class={"page-item " + (idx == pageNum - 1 ? "active" : "")}>
             <a class="page-link">{idx + 1}</a>
           </li>
         )
      }
      <li onClick={() => onClickPage(pageNum + 1)} class="page-item" style={ { visibility: pageNum <= totalPages - 1 ? "visible" : "hidden"} }>
        <a class="page-link" aria-label="Next"><span aria-hidden="true">»</span><span class="sr-only">Next</span></a>
      </li>
    </ul>
  </nav>
  </div>;
```

### Form example

```javascript
const PlayerForm = ({ player= {}, teams= [], playerPositions= [], onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Player</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={player}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* Name */}
            <div class="form-group">
            <label class="input-label">Name</label>
            <Field type="text" name="name"
              class="form-control" />
            </div>
            {/* Photo */}
            <div class="form-group">
            <label class="input-label">Photo</label>
            <FileField name="photo"
              accept="image/*" setFieldValue={setFieldValue}
              class="form-control"  />
            { values.photo ?
              <img src={values.photo.url} class="card-img mt-2" alt="Preview" /> : null }
            </div>
            {/* Is active */}
            <div class="form-group">
            <Field type="checkbox" name="isActive"
              class="d-inline mr-2" />
            <label class="input-label d-inline">Is active</label>
            </div>
            {/* Team */}
            <div class="form-group">
            <div>
            <label class="input-label">Team</label>
            <Field component="select" name="team.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {teams.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
            </Field>
            </div>
            </div>
            {/* Position */}
            <div class="form-group">
            <div>
            <label class="input-label">Position</label>
            <Field component="select" name="position.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {playerPositions.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
            </Field>
            </div>
            </div>
            </div>
            {error ? <div class="alert alert-soft-danger">{error}</div> : null}
            <button type="submit" class="btn btn-block btn-primary">Send</button>
          </Form> }
          </Formik>
        </div>
      </div>
    </div>

  </div>;
```