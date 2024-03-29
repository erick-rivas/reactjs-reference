/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MatchDetailsView = ({ match, onClickDelete }) =>
  <div class="card">

    {/* Header */}
    <div class="profile-cover">
      <div class="profile-cover-img-wrapper">
        <img id="profileCoverImg" class="profile-cover-img"
          src="/theme/svg/components/abstract-bg-4.svg" alt="Cover" />
      </div>
    </div>
    <label class="avatar avatar-xxl avatar-circle avatar-border-lg profile-cover-avatar">
      <img id="avatarImg" class="avatar-img"
        src="/theme/svg/components/placeholder-img-format.svg" alt="Icon" style={ {width: "100%"} }/>
    </label>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h2>MATCH {match.id}</h2>
          <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" rows="12" style={ {fontFamily: "Courier New"} } disabled>
            { JSON.stringify(match, null, "    ") }
            </textarea>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div class="card-footer">
      <div class="d-flex justify-content-end">
        <Link to={`/${match.id}/edit`} class="btn btn-secondary mr-2">Edit match</Link>
        <button class="btn btn-danger" onClick={onClickDelete}>Delete match</button>
      </div>
    </div>
  </div>;

MatchDetailsView.propTypes = {
  match: PropTypes.object.isRequired,
  onClickDelete: PropTypes.func
};

export default MatchDetailsView;