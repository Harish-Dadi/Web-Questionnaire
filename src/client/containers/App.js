import React, { Component } from "react";
import Main from "../components/Main";
import { connect } from "react-redux";
import {
  markAnswer,
  showNext,
  computeScore
} from "../store/actions/userActions";

class App extends Component {
  render() {
    const data = this.props;
    return (
      <div>
        <Main data={data} />
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
