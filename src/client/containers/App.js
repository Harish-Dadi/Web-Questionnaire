import React, { Component } from "react";
import { connect } from "react-redux";
import "../../assets/style/stylish.css";
import { markAnswer } from "../store/actions/userActions";

class App extends Component {
  render() {
    const id = this.props.currId;
    if (id < 5) {
      const ques = this.props.questions[id - 1];
      const answer = ques.userAnswer;
      return (
        <div className="App">
          <h1 style={{ fontSize: 150 }}>Quiz</h1>
          <h3>
            {ques.id + " "}
            {ques.question}
          </h3>
          <form>
            <input
              type="radio"
              name="group"
              value={ques.options[0]}
              checked={answer === 1}
              onChange={() => this.props.markAnswerQuestion(1, id)}
            />
            {ques.options[0]}
            <br />
            <br />
            <input
              type="radio"
              name="group"
              value={ques.options[1]}
              checked={answer === 2}
              onChange={() => this.props.markAnswerQuestion(2, id)}
            />
            {ques.options[1]}
            <br />
            <br />
            <input
              type="radio"
              name="group"
              value={ques.options[2]}
              checked={answer === 3}
              onChange={() => this.props.markAnswerQuestion(3, id)}
            />
            {ques.options[2]} <br />
          </form>
        </div>
      );
    } else {
      let score = 0;
      for (let i = 0; i < 4; i++) {
        let q = this.props.questions[i];
        if (q.userAnswer !== 0) {
          score += q.options[q.userAnswer - 1] === q.answer;
        }
      }
      return (
        <h1 className="Result">
          Your score is <p />
          {score}
        </h1>
      );
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
