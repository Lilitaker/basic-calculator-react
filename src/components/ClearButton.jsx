import React from 'react';
import '../stylesheets/ClearButton.css'

const ClearButton = (props) => (
  <button className='clear-btn'>
      {props.children}
  </button>
);

export default ClearButton;

/* 
Step 5:
- Add class
- Use props and props.children

Clue: We could use the text (clear) here directly instead of props because this value won't change if we create different instances
*/