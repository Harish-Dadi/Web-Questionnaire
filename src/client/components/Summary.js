import React, { Component } from "react";
import "../../assets/style/stylish.css";
import { connect } from "react-redux";
import { computeScore } from "../store/actions/userActions";
class Summary extends Component {
  render() {
    const id = this.props.currId;
    this.props.computeScoreUser(id - 1);

    let i = 0;
    let lis = [];

    for (let i = 0; i < id - 1; i++) {
      const quest = this.props.questions[i];
      lis.push(
        <ui>
          <h3>{quest.question}</h3>
          <p>userAnswer: {quest.userAnswer}</p>
          <p>Correct Answer: {quest.answer}</p>
        </ui>
      );
    }
    console.log(lis);
    return (
      <div className="Summary">
        <form>{lis}</form>
        {id > 1 ? (
          <h2>Current Score :{this.props.score}</h2>
        ) : (
          "No Question Answered"
        )}
      </div>
    );
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
    computeScoreUser: id => {
      dispatch(computeScore(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);
