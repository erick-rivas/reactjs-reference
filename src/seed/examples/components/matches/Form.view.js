/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const MatchFormView = ({ match= {}, teams= [], onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Match</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={match}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* Date */}
            <div class="form-group">
            <label class="input-label">Date</label>
            <Field type="date" name="date"
              class="form-control" />
            </div>
            {/* Type */}
            <div class="form-group">
            <label class="input-label">Type</label>
            <Field as="select" name="type"
              class="form-control"  >
              <option value="">Select an option</option>
              <option value="FRIENDSHIP">Friendship</option>
              <option value="LEAGUE">League</option>
              <option value="CUP">Cup</option>
            </Field>
            </div>
            {/* Local */}
            <div class="form-group">
            <div>
            <label class="input-label">Local</label>
            <Field as="select" name="local.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {teams.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
            </Field>
            </div>
            </div>
            {/* Visitor */}
            <div class="form-group">
            <div>
            <label class="input-label">Visitor</label>
            <Field as="select" name="visitor.id"
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

MatchFormView.propTypes = {
  match: PropTypes.object,
  teams: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default MatchFormView;