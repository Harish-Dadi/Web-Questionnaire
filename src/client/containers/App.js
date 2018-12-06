import React, { Component } from "react";
import { connect } from "react-redux";
import "../../assets/style/stylish.css";
import {
  markAnswer,
  showNext,
  computeScore
} from "../store/actions/userActions";

class App extends Component {
  render() {
    const id = this.props.currId;
    if (id < this.props.questions.length + 1) {
      const ques = this.props.questions[id - 1];
      const answer = ques.userAnswer;
      let someButton = null;
      if (id === this.props.questions.length) {
        someButton = (
          <button onClick={() => this.props.computeScoreUser(id)}>
            Submit
          </button>
        );
      } else {
        someButton = (
          <button onClick={() => this.props.goNextQuestion(id)}>Next</button>
        );
      }
      // console.log(this.props.displayNext);

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
                    onChange={() => this.props.markAnswerQuestion(option)}
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
      return <h1>{this.props.score}</h1>;
    }
  }
}

const mapStateToProps = state => {
  return {
    currId: state.user.currId,
    questions: state.user.questions,
    score: state.user.score
  };
};

const mapDispatchToProps = dispatch => {
  return {
    markAnswerQuestion: (answer, id) => {
      dispatch(markAnswer(answer, id));
    },
    goNextQuestion: id => {
      dispatch(showNext(id));
    },
    computeScoreUser: id => {
      dispatch(computeScore(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
