import React from "react";
import "../stylesheets/Button.css";

function Button(props) {
  
  const isOperator = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
    //If all conditions are true, it returns true
  };

  return (
    <button className={`btn-container ${isOperator(props.children) ? "operator" : ""}`.trim()} onClick={() => props.manageClick(props.children)}>
      {props.children}
    </button>
  );
  
}

export default Button;

/* 
Step 1:
- Put props for the function and add props.children inside the div
- Add a class or two depending on the condition
- Create the isOperator function that we need for the condition

Step 8:
- We add the onClick event to the button. props.children -> When we click any button we want to add to the screen its value
- In order to avoid the console error (expected a function and received a string) we have to add () => before the props
  - props.manageClick(props.children) --> Call of the function and returns the result
  - () => props.manageClick(props.children) --> We write an anonimous function that calls another function
*/
