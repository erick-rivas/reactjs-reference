import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import MultiField from "seed/helpers/MultiField";
import FileField from "seed/helpers/FileField";

const TeamForm = ({ team= {}, teams= [], onSubmit, error }) =>

  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Team</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={team}
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
            {/* Logo */}
            <div class="form-group">
            <label class="input-label">Logo</label>
            <FileField name="logo"
              accept="image/*" setFieldValue={setFieldValue}
              class="form-control"  />
            { values.logo ?
              <img src={values.logo.url} class="card-img mt-2" alt="Preview" /> : null }
            </div>
            {/* Description */}
            <div class="form-group">
            <label class="input-label">Description</label>
            <Field type="text" name="description"
              component="textarea" rows="3"
              class="form-control" />
            </div>
            {/* Market value */}
            <div class="form-group">
            <label class="input-label">Market value</label>
            <Field type="number" name="marketValue"
              class="form-control" />
            </div>
            {/* Rival */}
            <div class="form-group">
            <div>
            <label class="input-label">Rival</label>
            <Field component="select" name="rival.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {teams.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
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

TeamForm.propTypes = {
  team: PropTypes.object,
  teams: PropTypes.array,
  
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default TeamForm;