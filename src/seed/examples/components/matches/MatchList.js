/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/matches/MatchList.view";

function MatchList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqMatches = usePagination(`
  {
    matchPagination {
      totalPages
      matches {
        date
        type
        createdAt
        local { }
        visitor { }
        scores { }
      }
    }
  }`, pageNum, pageSize);

  if (reqMatches.loading) return <Loading />;
  if (reqMatches.error) return "Error";
  const { matches = [], totalPages = 0 } = reqMatches.data.matchPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    matches={matches}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

MatchList.propTypes = {};

export default MatchList;