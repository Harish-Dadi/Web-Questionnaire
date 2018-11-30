import React, { Component } from "react";
import { connect } from "react-redux";
import "../../assets/style/stylish.css";
import { markAnswer, showNext } from "../store/actions/userActions";

class App extends Component {
  constructor() {
    super();
    this.changebackground = this.changebackground.bind(this);
    this.changebackgroundOne = this.changebackgroundOne.bind(this);
    this.changebackgroundTwo = this.changebackgroundTwo.bind(this);
    this.changebackgroundThree = this.changebackgroundThree.bind(this);
  }
  changebackground() {
    const colorThree = document.getElementById("labelRadioThree");
    const colorOne = document.getElementById("labelRadioOne");
    const colorTwo = document.getElementById("labelRadioTwo");
    colorOne.style.background = "grey";
    colorTwo.style.background = "grey";
    colorThree.style.background = "grey";
  }
  changebackgroundOne() {
    console.log("Hey there");
    const colorThree = document.getElementById("labelRadioThree");
    const colorOne = document.getElementById("labelRadioOne");
    const colorTwo = document.getElementById("labelRadioTwo");
    colorOne.style.background = "green";
    colorTwo.style.background = "grey";
    colorThree.style.background = "grey";
  }
  changebackgroundTwo() {
    const colorThree = document.getElementById("labelRadioThree");
    const colorOne = document.getElementById("labelRadioOne");
    const colorTwo = document.getElementById("labelRadioTwo");
    colorTwo.style.background = "green";
    colorOne.style.background = "grey";
    colorThree.style.background = "grey";
  }
  changebackgroundThree() {
    const colorThree = document.getElementById("labelRadioThree");
    const colorOne = document.getElementById("labelRadioOne");
    const colorTwo = document.getElementById("labelRadioTwo");
    colorThree.style.background = "green";
    colorOne.style.background = "grey";
    colorTwo.style.background = "grey";
  }
  submit(id) {
    let score = 0;
    for (let i = 0; i < 4; i++) {
      let q = this.props.questions[i];
      if (q.userAnswer !== 0) {
        score += q.options[q.userAnswer - 1] === q.answer;
      }
    }
    let showScore = document.getElementById("show_score");
    showScore.innerHTML = score;
  }
  render() {
    if (this.props.resetSelected) {
      this.changebackground();
    }
    const id = this.props.currId;

    if (id < 5) {
      const ques = this.props.questions[id - 1];
      const answer = ques.userAnswer;
      let someButton = null;
      console.log(this.props.displayNext);
      if (this.props.displayNext && id === 4) {
        someButton = (
          <button
            className="submitButton"
            onClick={() => this.props.goNextQuestion(id)}
          >
            Submit
          </button>
        );
      } else if (this.props.displayNext) {
        someButton = (
          <button
            className="nextButton"
            id="nextButton"
            onClick={() => this.props.goNextQuestion(id)}
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
            <input
              type="radio"
              name="group"
              className="radio1"
              style={{ backgroundColor: "grey" }}
              value={ques.options[0]}
              onClick={this.changebackgroundOne}
              checked={answer === 1}
              onChange={() => this.props.markAnswerQuestion(1, id)}
            />
            <label id="labelRadioOne">{ques.options[0]}</label>
            <br />
            <br />
            <input
              type="radio"
              name="group"
              style={{ backgroundColor: "grey" }}
              value={ques.options[1]}
              onClick={this.changebackgroundTwo}
              checked={answer === 2}
              onChange={() => this.props.markAnswerQuestion(2, id)}
            />
            <label id="labelRadioTwo">{ques.options[1]}</label>
            <br />
            <br />
            <input
              type="radio"
              name="group"
              value={ques.options[2]}
              onClick={this.changebackgroundThree}
              style={{ backgroundColor: "grey" }}
              checked={answer === 3}
              onChange={() => this.props.markAnswerQuestion(3, id)}
            />
            <label id="labelRadioThree">{ques.options[2]}</label> <br />
          </form>
          <br />
          <br />
          {someButton}
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
      return <h1 className="Result">Your Score is {score}</h1>;
    }
  }
}

const mapStateToProps = state => {
  return {
    currId: state.user.currId,
    questions: state.user.questions,
    displayNext: state.user.displayNext,
    resetSelected: state.user.resetSelected
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
