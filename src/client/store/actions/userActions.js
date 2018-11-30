export function showNext(id) {
  return {
    type: "SHOW_NEXT",
    payload: [Math.min(5, id + 1), false, true]
  };
}

export function markAnswer(answer, id) {
  return {
    type: "MARK_ANSWER",
    payload: [answer, true, false]
  };
}
