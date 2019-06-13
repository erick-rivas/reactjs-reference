/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via models.json
    - Only override existing methods if required

  Methods:
    - getScoreList(filters, callback)
    - getScoreDetails(scoreId, callback)
    - saveScore(score, callback)
    - setScore(scoreId, score, callback)
    - deleteScore(scoreId, callback)
*/

import _Scores from '_seed/actions/scores';

class Scores extends _Scores {}

export default Scores;