import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom"

import MatchPanel from "examples/matches/Panel";
import PlayerPanel from "examples/players/Panel";
import PlayerPositionPanel from "examples/player_positions/Panel";
import ScorePanel from "examples/scores/Panel";
import TeamPanel from "examples/teams/Panel";
import UserPanel from "examples/users/Panel";
import Sidenav from "examples/general/nav/Sidenav";
import Topnav from "examples/general/nav/Topnav";

import cx from "classnames";
import styles from "resources/css/examples/Home.module.css";

function Home(props)
{
  const { path } = props.match;

   useEffect(() => {
     const userId = sessionStorage.getItem("id");
     if (userId == null)
       return props.history.replace(`/examples/login`);
   });

  return (
    <div className={styles.module}>
      <div className={styles.drawer}>
        <div className={styles.sidenav}>
          <Route path={`${path}`}
            component={Sidenav} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.topnav}>
          <Route path={`${path}`}
            component={Topnav} />
        </div>
        <div className={styles.content}>
           <Switch>
             <Route path={`${path}/matches`}
               component={MatchPanel} />
             <Route path={`${path}/players`}
               component={PlayerPanel} />
             <Route path={`${path}/player_positions`}
               component={PlayerPositionPanel} />
             <Route path={`${path}/scores`}
               component={ScorePanel} />
             <Route path={`${path}/teams`}
               component={TeamPanel} />
             <Route path={`${path}/users`}
               component={UserPanel} />
           </Switch>
        </div>
      </div>
    </div>
   );
}

export default Home;
