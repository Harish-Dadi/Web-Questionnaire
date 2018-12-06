import React, { Component } from "react";
import { connect } from "react-redux";
import "../../assets/style/stylish.css";
import { markAnswer, showNext } from "../store/actions/userActions";

class App extends Component {
  render() {
    const id = this.props.currId;
    if (id < this.props.questions.length + 1) {
      const ques = this.props.questions[id - 1];
      const answer = ques.userAnswer;
      let someButton = null;
      if (id == this.props.questions.length) {
        someButton = (
          <button onClick={this.props.goNextQuestion(id)}>Submit</button>
        );
      } else {
        someButton = (
          <button onClick={this.props.goNextQuestion(id)}>Next</button>
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
                    checked={() => ques.userAnswer}
                    onChange={() => someButton}
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
    questions: state.user.questions
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
