import React, { useState } from "react";
import { usePagination } from "seed/gql";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/scores/List";

function ScoreList() {
  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqScores = usePagination(`
  {
    scorePagination {
      totalPages
      scores {
        min
        createdAt
        player { }
        match { }
      }
    }
  }`, pageNum, pageSize);

  if (reqScores.loading) return <Loading />;
  if (reqScores.error) return "Error";
  const { scores = [], totalPages = 0 } = reqScores.data.scorePagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    scores={scores}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

ScoreList.propTypes = {};

export default ScoreList;