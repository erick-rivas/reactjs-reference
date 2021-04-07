import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import MatchDetails from "seed/examples/components/matches/Details";
import MatchList from "seed/examples/components/matches/List";
import MatchFormSave from "seed/examples/components/matches/FormSave";
import MatchFormSet from "seed/examples/components/matches/FormSet";
import { ModalRoute } from "seed/helpers";

const Matches = () =>
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
      component={MatchFormSave} />
    <ModalRoute
      path="/:matchId(\d+)/edit"
      component={MatchFormSet} />

    </div>
  </BrowserRouter>;

Matches.propTypes = {};

export default Matches;