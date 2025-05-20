/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import ScoreDetails from "seed/examples/components/scores/ScoreDetails";
import ScoreList from "seed/examples/components/scores/ScoreList";
import ScoreFormCreate from "seed/examples/components/scores/ScoreFormCreate";
import ScoreFormEdit from "seed/examples/components/scores/ScoreFormEdit";
import { ModalRoute } from "seed/helpers";

const ScoresView = () =>
  <BrowserRouter basename="/examples/scores">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Scores</h1>
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
    <ScoreList />

    {/* Modals */}
    <ModalRoute
        path="/:scoreId(\d+)"
        component={ScoreDetails} />
    <ModalRoute
      path="/create"
      component={ScoreFormCreate} />
    <ModalRoute
      path="/:scoreId(\d+)/edit"
      component={ScoreFormEdit} />

    </div>
  </BrowserRouter>;

ScoresView.propTypes = {};

export default ScoresView;