const initialState = {
  currId: 1,
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
  ],
  score: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SHOW_NEXT":
      return {
        ...state,
        currId: Math.min(action.payload + 1, state.questions.length)
      };
    case "MARK_ANSWER":
      return {
        ...state,
        questions: state.questions.map(question =>
          question.id === state.currId
            ? { ...question, userAnswer: action.payload }
            : question
        )
      };
    case "COMPUTE_SCORE":
      let scr = 0;
      for (let i = 0; i < action.payload; i++) {
        let q = state.questions[i];
        if (q.userAnswer === q.answer) scr += 1;
      }
      return {
        ...state,
        score: scr,
        currId: action.payload + 1
      };
    default:
      return state;
  }
}
