import React from 'react';
import Radium from 'radium';

import styles from './screenshot-styles';

const Screenshot = (props) => {

  props.preloadImages();

  const style = Object.assign(props.style, styles)

  return (
    <div
      style={style}
      onClick={() => window.open(`http://${props.source}`)}
      >
    </div>
  )
};

export default Radium(Screenshot);
