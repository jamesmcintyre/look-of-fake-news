import React from 'react';
import Radium from 'radium';

import styles from './landing-styles';

const Landing = (props) => {

  const style = Object.assign(props.style, styles);

  return (
    <div style={style}>
      <div className={'heading'}>
        <span className={'super-script'}>THE LOOK OF</span>
        <span className={'main-script'}>FAKE NEWS</span>
        <span className={'slogan-script'}></span>
        <p>John Doe built a browser extension that warns people when they’re visiting a site known to be a source of “fake news”. I’ve borrowed that same list to compile screenshots of each site in order to put on display for all to see... the look of fake news.</p>
        <p>HINT: Keep an eye out for commonalities, you’ll quickly find that they all feature horrible web design, click-bait headlines, provocative imagery and names or slogans which appeal to visitors with tribalistic tendancies.</p>
      </div>
      <div className={'share'}>
        share
      </div>
    </div>
  )
};

export default Radium(Landing);
