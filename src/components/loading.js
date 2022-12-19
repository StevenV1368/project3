import React from 'react';
import './loading.css';

const Loading = () => {
  return (
    <div class='text-white d-flex justify-content-center align-self-center'>
      <p class = 'text-white text-center lds-hourglass'>Loading...</p>
    </div>
  );
}

export default Loading
