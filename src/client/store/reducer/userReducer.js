const initialState = {
  currId: 1,
  displayNext: false,
  resetSelected: false,
  questions: [
    {
      id: 1,
      question: "How many months do we have in a year?",
      options: ["10", "11", "12"],
      answer: "12",
      userAnswer: 0
    },
    {
      id: 2,
      question: "How many days do we have in a week?",
      options: ["5", "6", "7"],
      answer: "7",
      userAnswer: 0
    },
    {
      id: 3,
      question: "How many days are there in a year?",
      options: ["355", "365", "375"],
      answer: "365",
      userAnswer: 0
    },
    {
      id: 4,
      question: "How many colors are there in a rainbow?",
      options: ["5", "6", "7"],
      answer: "7",
      userAnswer: 0
    }
  ]
};
export default function(state = initialState, action) {
  switch (action.type) {
    case "SHOW_NEXT":
      return {
        ...state,
        currId: action.payload[0],
        displayNext: action.payload[1],
        resetSelected: action.payload[2]
      };
    case "MARK_ANSWER":
      console.log(state.questions);
      return {
        ...state,
        displayNext: action.payload[1],
        resetSelected: action.payload[2],
        questions: state.questions.map(question =>
          question.id === state.currId
            ? { ...question, userAnswer: action.payload[0] }
            : question
        )
      };
    default:
      return state;
  }
}
