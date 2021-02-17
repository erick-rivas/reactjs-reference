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
        <Route path={`${props.path}`}
          component={Sidenav} />
      </div>
    </div>
    <div class={css.container}>
      <div class={css.topnav}>
        <Route path={`${props.path}`}
          component={Topnav} />
      </div>
      <div class={css.content}>
          <Switch>
            <Route path={`${props.path}/matches`}
              component={Matches } />
            <Route path={`${props.path}/players`}
              component={Players } />
            <Route path={`${props.path}/player_positions`}
              component={PlayerPositions } />
            <Route path={`${props.path}/scores`}
              component={Scores } />
            <Route path={`${props.path}/teams`}
              component={Teams } />
            <Route path={`${props.path}/users`}
              component={Users } />
          </Switch>
      </div>
    </div>
  </div>;

export default Home;