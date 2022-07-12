/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import PlayerPositionDetails from "seed/examples/components/player_positions/Details";
import PlayerPositionList from "seed/examples/components/player_positions/List";
import PlayerPositionFormSave from "seed/examples/components/player_positions/FormSave";
import PlayerPositionFormSet from "seed/examples/components/player_positions/FormSet";
import { ModalRoute } from "seed/helpers";

const PlayerPositionsView = () =>
  <BrowserRouter basename="/examples/player_positions">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Player positions</h1>
        </div>

        <div class="col-sm-auto">
          <div class="btn-group" role="group">
            <Link to="/create" className="btn btn-primary">
              <i class="tio-add mr-1"></i>Create
            </Link>
          </div>
        </div>

      </div>
    </div>

    {/* List */}
    <PlayerPositionList />

    {/* Modals */}
    <ModalRoute
        path="/:playerPositionId(\d+)"
        component={PlayerPositionDetails} />
    <ModalRoute
      path="/create"
      component={PlayerPositionFormSave} />
    <ModalRoute
      path="/:playerPositionId(\d+)/edit"
      component={PlayerPositionFormSet} />

    </div>
  </BrowserRouter>;

PlayerPositionsView.propTypes = {};

export default PlayerPositionsView;