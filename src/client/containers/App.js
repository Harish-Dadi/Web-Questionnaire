import React, { Component } from "react";
// import { Main } from "../components/Main";
// import { Display } from "../components/Display";
import { connect } from "react-redux";
import * as userActions from "../store/actions/userActions";
import { bindActionCreators } from "redux";

import {
  showNext,
  showPrevious,
  markAnswer
} from "../store/actions/userActions";

class App extends Component {
  componentWillMount() {
    showNext(0);
  }
  render() {
    console.log(this.props);
    const id = this.props.currId;
    const ques = this.props.questions[id - 1];
    return (
      <div className="App">
        <p>{ques.question}</p>
        <form>
          <input
            type="radio"
            name="group"
            value={ques.options[0]}
            onChange={() => markAnswer(1)}
          />
          {ques.options[0]}
          <br />
          <input
            type="radio"
            name="group"
            value={ques.options[1]}
            onChange={() => markAnswer(2)}
          />
          {ques.options[1]}
          <br />
          <input
            type="radio"
            name="group"
            value={ques.options[2]}
            onChange={() => markAnswer(3)}
          />
          {ques.options[2]} <br />
        </form>
        <button onClick={() => showPrevious(this.props.currId)}>
          Show Previous
        </button>
        <button onClick={() => showNext(this.props.currId)}> Show Next</button>
      </div>
    );
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
    actions: bindActionCreators(userActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
