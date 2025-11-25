/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import TeamDetails from "seed/examples/components/teams/TeamDetails";
import TeamList from "seed/examples/components/teams/TeamList";
import TeamFormCreate from "seed/examples/components/teams/TeamFormCreate";
import TeamFormEdit from "seed/examples/components/teams/TeamFormEdit";
import { ModalRoute } from "seed/helpers";

const TeamsView = () =>
  <BrowserRouter basename="/examples/teams">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Teams</h1>
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
    <TeamList />

    {/* Modals */}
    <ModalRoute
        path="/:teamId(\d+)"
        component={TeamDetails} />
    <ModalRoute
      path="/create"
      component={TeamFormCreate} />
    <ModalRoute
      path="/:teamId(\d+)/edit"
      component={TeamFormEdit} />

    </div>
  </BrowserRouter>;

TeamsView.propTypes = {};

export default TeamsView;