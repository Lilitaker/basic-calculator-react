import React from "react";
import '../stylesheets/Button.css'

function Button(props) {

  const isOperator = (value) => {
    return isNaN(value) && (value !== '.') && (value !== '=');
    //If all conditions are true, it returns true
  };

  return(
    <div className={`btn-container ${isOperator(props.children) ? 'operator' : ''}`.trim()}>
      {props.children}
    </div>
  )
}

export default Button;

/* 
Step 1:
- Put props for the function and add props.children inside the div
- Add a class or two depending on the condition
- Create the isOperator function that we need for the condition
*/
