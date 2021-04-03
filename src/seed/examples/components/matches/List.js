import React from "react";
import { useQuery } from "seed/gql";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/matches/List";

function MatchList() {
  const reqMatches = useQuery(`
  {
    matches {
      date
      type
      createdAt
      local { }
      visitor { }
      scores { }
    }
  }`);

  if (reqMatches.loading) return <Loading />;
  if (reqMatches.error) return "Error";
  const { matches = [] } = reqMatches.data;
  return <View
    matches={matches}
  />;
}

MatchList.propTypes = {}

export default MatchList;