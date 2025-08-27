/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { Route } from "seed/helpers"
import { ScriptTag } from "seed/helpers";
import Matches from "seed/examples/components/matches/Matches";
import Players from "seed/examples/components/players/Players";
import PlayerPositions from "seed/examples/components/player_positions/PlayerPositions";
import Scores from "seed/examples/components/scores/Scores";
import Teams from "seed/examples/components/teams/Teams";
import Users from "seed/examples/components/users/Users";
import Sidenav from "seed/examples/components/nav/Sidenav";
import Topnav from "seed/examples/components/nav/Topnav";

const HomeView = () =>
  <div>
    <Topnav />
    <Sidenav />

    <main id="content" role="main" class="main">
    <Switch>
      <Route path="/matches" component={Matches } />
      <Route path="/players" component={Players } />
      <Route path="/player_positions" component={PlayerPositions } />
      <Route path="/scores" component={Scores } />
      <Route path="/teams" component={Teams } />
      <Route path="/users" component={Users } />
    </Switch>
      <div class="footer">
        <div class="row justify-content-between align-items-center">
          <div class="col">
            <p class="font-size-sm mb-0">
                &copy; SeedProject. <span class="d-none d-sm-inline-block">2021.</span>
             </p>
          </div>
        </div>
      </div>

    </main>

    <ScriptTag content={`
         // Builder toggle invoker
        $('.js-navbar-vertical-aside-toggle-invoker').click(function () {
          $('.js-navbar-vertical-aside-toggle-invoker i').tooltip('hide');
        });

        // Initialization of navbar vertical navigation
        var sidebar = $('.js-navbar-vertical-aside').hsSideNav();

        // Initialization of tooltip in navbar vertical menu
        $('.js-nav-tooltip-link').tooltip({ boundary: 'window' })

        $(".js-nav-tooltip-link").on("show.bs.tooltip", function(e) {
          if (!$("body").hasClass("navbar-vertical-aside-mini-mode")) {
            return false;
          }
        });

        // Initialization of unfold
        $('.js-hs-unfold-invoker').each(function () {
          var unfold = new HSUnfold($(this)).init();
        });
    `} />
  </div>;

HomeView.propTypes = {};

export default HomeView;