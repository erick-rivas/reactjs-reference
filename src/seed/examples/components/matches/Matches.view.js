/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import MatchDetails from "seed/examples/components/matches/MatchDetails";
import MatchList from "seed/examples/components/matches/MatchList";
import MatchFormCreate from "seed/examples/components/matches/MatchFormCreate";
import MatchFormEdit from "seed/examples/components/matches/MatchFormEdit";
import { ModalRoute } from "seed/helpers";

const MatchesView = () =>
  <BrowserRouter basename="/examples/matches">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Matches</h1>
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
    <MatchList />

    {/* Modals */}
    <ModalRoute
        path="/:matchId(\d+)"
        component={MatchDetails} />
    <ModalRoute
      path="/create"
      component={MatchFormCreate} />
    <ModalRoute
      path="/:matchId(\d+)/edit"
      component={MatchFormEdit} />

    </div>
  </BrowserRouter>;

MatchesView.propTypes = {};

export default MatchesView;