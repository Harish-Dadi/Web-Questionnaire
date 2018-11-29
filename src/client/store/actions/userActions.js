export function markAnswer(answer, id) {
  return {
    type: "SHOW_NEXT",
    payload: [id + 1, answer]
  };
}
