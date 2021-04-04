import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import PlayerDetails from "seed/examples/components/players/Details";
import PlayerList from "seed/examples/components/players/List";
import PlayerFormSave from "seed/examples/components/players/FormSave";
import PlayerFormSet from "seed/examples/components/players/FormSet";
import ModalRoute from "seed/helpers/ModalRoute";

const Players = () =>
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
      component={PlayerFormSave} />
    <ModalRoute
      path="/:playerId(\d+)/edit"
      component={PlayerFormSet} />

    </div>
  </BrowserRouter>;

Players.propTypes = {};

export default Players;