/*
__Seed builder__v1.0
*/

import * as React from 'react';
import UserList from 'containers/users/List'
import UserDetails from 'containers/users/Details'
import UserForm from 'containers/users/Form'
import TeamList from 'containers/teams/List'
import TeamDetails from 'containers/teams/Details'
import TeamForm from 'containers/teams/Form'
import PlayerList from 'containers/players/List'
import PlayerDetails from 'containers/players/Details'
import PlayerForm from 'containers/players/Form'
import MatchList from 'containers/matches/List'
import MatchDetails from 'containers/matches/Details'
import MatchForm from 'containers/matches/Form'
import MatchDelete from 'containers/matches/Delete'
import ScoreList from 'containers/scores/List'
import ScoreDetails from 'containers/scores/Details'
import ScoreForm from 'containers/scores/Form'

class Demo extends React.Component
{
  render()
  {
    return (
        <div>
        <div>===== user =====</div><br/>
        <div>=== list ===</div>
        <div><UserList /></div>
        <br/>
        <div>=== details ===</div>
        <div><UserDetails userId={1} /></div>
        <br/>
        <div>=== form ===</div>
        <div>=== new ===</div>
        <div><UserForm /></div>
        <div>=== set ===</div>
        <div><UserForm userId={1} /></div>
        <br/>
        <br/><br/>
        <div>===== team =====</div><br/>
        <div>=== list ===</div>
        <div><TeamList /></div>
        <br/>
        <div>=== details ===</div>
        <div><TeamDetails teamId={1} /></div>
        <br/>
        <div>=== form ===</div>
        <div>=== new ===</div>
        <div><TeamForm /></div>
        <div>=== set ===</div>
        <div><TeamForm teamId={1} /></div>
        <br/>
        <br/><br/>
        <div>===== player =====</div><br/>
        <div>=== list ===</div>
        <div><PlayerList /></div>
        <br/>
        <div>=== details ===</div>
        <div><PlayerDetails playerId={1} /></div>
        <br/>
        <div>=== form ===</div>
        <div>=== new ===</div>
        <div><PlayerForm teamId={1} /></div>
        <div>=== set ===</div>
        <div><PlayerForm playerId={1} teamId={1} /></div>
        <br/>
        <br/><br/>
        <div>===== match =====</div><br/>
        <div>=== list ===</div>
        <div><MatchList /></div>
        <br/>
        <div>=== details ===</div>
        <div><MatchDetails matchId={1} /></div>
        <br/>
        <div>=== form ===</div>
        <div>=== new ===</div>
        <div><MatchForm localId={1} visitorId={1} /></div>
        <div>=== set ===</div>
        <div><MatchForm matchId={1} localId={1} visitorId={1} /></div>
        <br/>
        <div>=== delete ===</div>
        <br/>
        <br/><br/>
        <div>===== score =====</div><br/>
        <div>=== list ===</div>
        <div><ScoreList /></div>
        <br/>
        <div>=== details ===</div>
        <div><ScoreDetails scoreId={1} /></div>
        <br/>
        <div>=== form ===</div>
        <div>=== new ===</div>
        <div><ScoreForm playerId={1} matchId={1} /></div>
        <div>=== set ===</div>
        <div><ScoreForm scoreId={1} playerId={1} matchId={1} /></div>
        <br/>
        <br/><br/>
        </div>
    );
  }
}

export default Demo;
