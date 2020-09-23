import React, { useEffect } from "react";
import cx from "classnames";
import { Switch, Route, Redirect } from "react-router-dom";
import Matches from "seed/examples/matches/Matches";
import Players from "seed/examples/players/Players";
import PlayerPositions from "seed/examples/player_positions/PlayerPositions";
import Scores from "seed/examples/scores/Scores";
import Teams from "seed/examples/teams/Teams";
import Users from "seed/examples/users/Users";
import Sidenav from "seed/examples/nav/Sidenav";
import Topnav from "seed/examples/nav/Topnav";
import styles from "resources/css/seed/examples/Home.module.css";

function Home(props) {

  const { path } = props.match;
   useEffect(() => {
     const userId = sessionStorage.getItem("id");
     if (userId == null)
       return props.history.replace("/examples/login");
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
               component={Matches } />
             <Route path={`${path}/players`}
               component={Players } />
             <Route path={`${path}/player_positions`}
               component={PlayerPositions } />
             <Route path={`${path}/scores`}
               component={Scores } />
             <Route path={`${path}/teams`}
               component={Teams } />
             <Route path={`${path}/users`}
               component={Users } />
           </Switch>
        </div>
      </div>
    </div>
   );
}

export default Home;
