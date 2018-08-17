import React from "react";

const Form = props => (
  <form onSubmit={props.getTimer}>
    <input type="text" name="date" placeholder="Date..." />
    <button>GoGoGo</button>
  </form>
);

export default Form;
