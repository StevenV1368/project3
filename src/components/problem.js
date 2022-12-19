import React from 'react';

const Problem = (props) => {
  return (<div>
    <p>
     return Error: {props.message}
    </p>
    <button onClick={props.resetState}>Back to List</button>
    </div>);
}

export default Problem
