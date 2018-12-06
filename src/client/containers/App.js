import React, { Component } from "react";
import { connect } from "react-redux";
import "../../assets/style/stylish.css";
import { markAnswer, showNext } from "../store/actions/userActions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: [0, 0, 0, 0]
    };
    this.Changed = this.Changed.bind(this);
  }

  Changed(option, id) {
    let ques = this.props.questions[this.props.currId - 1];
    if (ques.answer === option) {
      this.state.score[this.props.currId - 1] = 1;
    } else {
      this.state.score[this.props.currId - 1] = 0;
    }
    this.props.markAnswerQuestion(option, id);
  }
  render() {
    const id = this.props.currId;

    if (id < 5) {
      const ques = this.props.questions[id - 1];
      const answer = ques.userAnswer;
      let someButton = null;
      console.log(this.props.displayNext);
      if (this.props.displayNext && id === 4) {
        someButton = (
          <button onClick={() => this.props.goNextQuestion(id)}>Submit</button>
        );
      } else if (this.props.displayNext) {
        someButton = (
          <button
            className="nextButton"
            id="nextButton"
            onClick={() => this.props.goNextQuestion(id, answer)}
          >
            Next
          </button>
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
                    onChange={this.Changed(option, id)}
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
      console.log(this.props.score);
      let score = this.props.score;
      return <h1 className="Result"> {score}</h1>;
    }
  }
}

const mapStateToProps = state => {
  return {
    currId: state.user.currId,
    questions: state.user.questions,
    displayNext: state.user.displayNext,
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
