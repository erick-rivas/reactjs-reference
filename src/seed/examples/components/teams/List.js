/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/teams/List.view";

function TeamList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqTeams = usePagination(`
  {
    teamPagination {
      totalPages
      teams {
        name
        description
        marketValue
        createdAt
        logo { }
        rival { }
        identityDocs { }
        players { }
      }
    }
  }`, pageNum, pageSize);

  if (reqTeams.loading) return <Loading />;
  if (reqTeams.error) return "Error";
  const { teams = [], totalPages = 0 } = reqTeams.data.teamPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    teams={teams}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

TeamList.propTypes = {};

export default TeamList;