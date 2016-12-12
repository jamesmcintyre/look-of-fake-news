import React from 'react';
import Radium from 'radium';

import { FacebookButton, FacebookCount } from "react-social";
import styles from './landing-styles';

const Landing = (props) => {

  const style = Object.assign(props.style, styles);

  const {
    main, block, bold,
    message, p, share
  } = style;

  const open = (key) => {
    const map = {
      wiki: 'https://en.wikipedia.org/wiki/Fake_news_website',
      bs: 'http://bsdetector.tech/',
      li: 'https://github.com/bs-detector/bs-detector/blob/dev/ext/data/data.json'
    };
    return () => window.open(map[key]);
  };

  return (
    <div style={style}>
      <div style={main}>
        <span style={block}>the look of</span>
        <span style={{...block, ...bold, marginTop: '-.4vmax' }}>fake news</span>
      </div>
      <div style={message}>
        <p style={message.heading}> </p>
        <p style={p}>Fake news is disinformation or propaganda disguised to look and
          feel like real news. Below you’ll find screenshots of
          <a href={'#'} onClick={open('li')}>~700 web sites</a> which are known to
          serve up fake news. These ~700 sites were pulled from Brian Sieradski’s
          <a onClick={open('bs')} href={'#'}>B.S Detector</a> Chrome extension which
          warns users when they’re visiting one of these sites. I cannot vouch for the
          process or criteria Sieradski used when compiling this list but it is one of
          the largest lists I’ve come across and I believe it serves well here to put
          on display… the look of fake news. <a href={'#'} onClick={open('wiki')}>
          (Learn More about Fake News.)</a></p>
      </div>
      <div style={share}>
        <FacebookButton style={share.button} className={'share-button'} element='a' url={'http://jamesmcintyre.github.io/look-of-fake-news'} appId={'392888414380274'}>
            <div style={share.icon}></div>
            <div style={share.text}>Share</div>
            <FacebookCount style={share.count} url={'http://jamesmcintyre.github.io/look-of-fake-news'}/>
        </FacebookButton>
      </div>
    </div>
  )
};

export default Radium(Landing);
