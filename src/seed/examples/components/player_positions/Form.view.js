/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const PlayerPositionFormView = ({ playerPosition= {}, onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Player position</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={playerPosition}
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
            {/* Code */}
            <div class="form-group">
            <label class="input-label">Code</label>
            <Field type="text" name="code"
              as="textarea" rows="3"
              class="form-control" />
            </div>
            {/* Stats */}
            <div class="form-group">
            <label class="input-label">Stats</label>
            <Field type="text" name="stats"
              as="textarea" rows="3"
              class="form-control" />
            </div>
            {/* Details */}
            <div class="form-group">
            <label class="input-label">Details</label>
            <Field type="text" name="details"
              as="textarea" rows="3"
              class="form-control" />
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

PlayerPositionFormView.propTypes = {
  playerPosition: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default PlayerPositionFormView;