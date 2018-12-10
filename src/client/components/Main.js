import React from "react";
import "../../assets/style/stylish.css";

const Main = load => {
  console.log("MAIN");
  const data = load.data;
  const id = data.currId;

  if (id < data.questions.length + 1) {
    const ques = data.questions[id - 1];
    const answer = ques.userAnswer;
    let someButton = null;
    if (id === data.questions.length) {
      someButton = (
        <button onClick={() => data.computeScoreUser(id)}>Submit</button>
      );
    } else {
      someButton = (
        <button onClick={() => data.goNextQuestion(id)}>Next</button>
      );
    }
    return (
      <div className="App">
        <p>
          {ques.id + " "}
          {ques.question}
        </p>
        <form>
          {ques.options.map(option => {
            return (
              <div>
                <input
                  type="radio"
                  name="group"
                  className="radio1"
                  style={{ backgroundColor: "grey" }}
                  value={option}
                  checked={answer === option}
                  onChange={() => data.markAnswerQuestion(option)}
                />
                <label
                  id="labelRadioOne"
                  style={
                    answer === option
                      ? { backgroundColor: "green" }
                      : { backgroundColor: "grey" }
                  }
                >
                  {option}
                </label>
                <br />
                <br />
              </div>
            );
          })}
        </form>
        <br />
        <br />

        {someButton}
      </div>
    );
  } else {
    return <h1 className="Result">Your Score is {data.score}</h1>;
  }
};

export default Main;
