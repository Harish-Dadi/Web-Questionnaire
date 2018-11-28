import React from "react";

export const Display = props => {
  return (
    <div>
      <div key={props.questions.id}>
        <p>
          {props.questions.id} {props.questions.question}
        </p>
        <input type="radio" name="group" value={props.questions.options[0]} />
        {props.questions.options[0]} <br />
        <input type="radio" name="group" value={props.questions.options[1]} />
        {props.questions.options[1]}
        <br />
        <input type="radio" name="group" value={props.questions.options[2]} />
        {props.questions.options[2]}
      </div>
    </div>
  );
};
