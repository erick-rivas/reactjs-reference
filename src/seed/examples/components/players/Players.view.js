/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import PlayerDetails from "seed/examples/components/players/PlayerDetails";
import PlayerList from "seed/examples/components/players/PlayerList";
import PlayerFormCreate from "seed/examples/components/players/PlayerFormCreate";
import PlayerFormEdit from "seed/examples/components/players/PlayerFormEdit";
import { ModalRoute } from "seed/helpers";

const PlayersView = () =>
  <BrowserRouter basename="/examples/players">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Players</h1>
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
    <PlayerList />

    {/* Modals */}
    <ModalRoute
        path="/:playerId(\d+)"
        component={PlayerDetails} />
    <ModalRoute
      path="/create"
      component={PlayerFormCreate} />
    <ModalRoute
      path="/:playerId(\d+)/edit"
      component={PlayerFormEdit} />

    </div>
  </BrowserRouter>;

PlayersView.propTypes = {};

export default PlayersView;