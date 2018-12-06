export function showNext(id) {
  return {
    type: "SHOW_NEXT",
    payload: id
  };
}

export function markAnswer(answer) {
  return {
    type: "MARK_ANSWER",
    payload: answer
  };
}

export function computeScore(id) {
  return {
    type: "COMPUTE_SCORE",
    payload: id
  };
}
