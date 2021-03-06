import React from "react";
import { useQuery } from "seed/gql";
import { NavLink } from "react-router-dom";
import Loading from "seed/components/helpers/Loading";
import View from "seed/examples/views/matches/List.js";

function MatchList(props){
  const { url } = props.match;

  const qMatches = useQuery(`
  {
    matches {
      date
      type
      local { }
      visitor { }
      scores { }
    }
  }
  `);
  if (qMatches.loading) return <Loading />;
  if (qMatches.error) return "Error";
  const { matches } = qMatches.data;

  return <View
    matches={matches}
  />;
}

export default MatchList;