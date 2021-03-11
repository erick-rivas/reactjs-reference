import React from "react";
import cx from "classnames";
import { Switch, Route, Redirect } from "react-router-dom";
import Matches from "seed/examples/components/matches/Matches";
import Players from "seed/examples/components/players/Players";
import PlayerPositions from "seed/examples/components/player_positions/PlayerPositions";
import Scores from "seed/examples/components/scores/Scores";
import Teams from "seed/examples/components/teams/Teams";
import Users from "seed/examples/components/users/Users";
import Sidenav from "seed/examples/components/nav/Sidenav";
import Topnav from "seed/examples/components/nav/Topnav";
import css from "resources/css/seed/examples/Home.module.css";

const Home = (props) =>
  <div class={css.module}>
    <div class={css.drawer}>
      <div class={css.sidenav}>
        <Sidenav />
      </div>
    </div>
    <div class={css.container}>
      <div class={css.topnav}>
        <Topnav />
      </div>
      <div class={css.content}>
          <Switch>
            <Route path="/examples/matches" component={Matches } />
            <Route path="/examples/players" component={Players } />
            <Route path="/examples/player_positions" component={PlayerPositions } />
            <Route path="/examples/scores" component={Scores } />
            <Route path="/examples/teams" component={Teams } />
            <Route path="/examples/users" component={Users } />
          </Switch>
      </div>
    </div>
  </div>;

export default Home;