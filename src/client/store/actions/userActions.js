export function showPrevious(id) {
  return {
    type: "SHOW_PREVIOUS",
    payload: id - 1
  };
}

export function showNext(id) {
  return {
    type: "SHOW_NEXT",
    payload: id + 1
  };
}

export function markAnswer(id) {
  return {
    type: "MARK_ANSWER",
    payload: id
  };
}
