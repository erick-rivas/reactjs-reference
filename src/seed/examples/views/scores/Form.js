import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import MultiField from "seed/helpers/MultiField";
import FileField from "seed/helpers/FileField";

const ScoreForm = ({ score= {}, players= [], matches= [], onSubmit, error }) =>

  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Score</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={score}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* Min */}
            <div class="form-group">
            <label class="input-label">Min</label>
            <Field type="number" name="min"
              class="form-control" />
            </div>
            {/* Player */}
            <div class="form-group">
            <div>
            <label class="input-label">Player</label>
            <Field component="select" name="player.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {players.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
            </Field>
            </div>
            </div>
            {/* Match */}
            <div class="form-group">
            <div>
            <label class="input-label">Match</label>
            <Field component="select" name="match.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {matches.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
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

ScoreForm.propTypes = {
  score: PropTypes.object,
  
  players: PropTypes.array,
  
  matches: PropTypes.array,
  
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default ScoreForm;