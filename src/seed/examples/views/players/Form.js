import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import MultiField from "seed/helpers/MultiField";
import FileField from "seed/helpers/FileField";

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

PlayerForm.propTypes = {
  player: PropTypes.object,
  teams: PropTypes.array,
  
  playerPositions: PropTypes.array,
  
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default PlayerForm;