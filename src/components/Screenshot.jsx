import React from 'react';

export default (props) => {

  props.preloadImages();

  return (
    <div
      className={'screenshot'}
      style={props.style}
      >
    </div>
  )
}
