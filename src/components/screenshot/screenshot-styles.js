import Radium from 'radium';

const fadeInKeyFrames = Radium.keyframes({
  '0%': {opacity: '.05'},
  '100%': {opacity: '1'},
}, 'fadeIn');

export default {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  animationName: fadeInKeyFrames,
  animationDuration: '.3s',
  animationTimingFunction: 'ease-out'
};
