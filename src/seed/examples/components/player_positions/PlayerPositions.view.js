/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import PlayerPositionDetails from "seed/examples/components/player_positions/PlayerPositionDetails";
import PlayerPositionList from "seed/examples/components/player_positions/PlayerPositionList";
import PlayerPositionFormCreate from "seed/examples/components/player_positions/PlayerPositionFormCreate";
import PlayerPositionFormEdit from "seed/examples/components/player_positions/PlayerPositionFormEdit";
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
      component={PlayerPositionFormCreate} />
    <ModalRoute
      path="/:playerPositionId(\d+)/edit"
      component={PlayerPositionFormEdit} />

    </div>
  </BrowserRouter>;

PlayerPositionsView.propTypes = {};

export default PlayerPositionsView;