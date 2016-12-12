import Radium from 'radium';

const fadeButtonIn = Radium.keyframes({
  '0%': {opacity: '0'},
  '100%': {opacity: '1'},
}, 'fadeButtonIn');

export default {
  app: {
    fontFamily: `'Nunito Sans', sans-serif`,
    backgroundColor: `rgb(66, 66, 66)`,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  scrollUp: {
    width: '100%',
    position: 'fixed',
    bottom: '0',
    textAlign: 'center'
  },
  scrollButton: {
    cursor: 'pointer',
    fontFamily: `'Nunito Sans', sans-serif`,
    color: 'white',
    animationName: fadeButtonIn,
    animationDuration: '1s',
    animationTimingFunction: 'ease-in',
    backgroundColor: `rgba(0, 0, 0, 0.62)`,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: '960px',
    height: '35px',
    paddingTop: '15px'
  }
};
