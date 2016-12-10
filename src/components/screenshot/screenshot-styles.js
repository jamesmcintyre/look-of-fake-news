import Radium from 'radium';

const fadeInKeyFrames = Radium.keyframes({
  '0%': {opacity: '.05'},
  '25%': {opacity: '.10'},
  '100%': {opacity: '1'},
}, 'fadeIn');

export default {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  animationName: fadeInKeyFrames,
  animationDuration: '1s',
  animationTimingFunction: 'ease-in'
};
