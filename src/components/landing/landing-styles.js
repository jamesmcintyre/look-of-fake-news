import base from '../../styles-library/base';

const LandingStyles = {
  color: '#545454',
  backgroundColor: `#e4e4e4`,
  paddingTop: '10vh',
  main: {
    fontSize: '3vmax',
    fontWeight: '200',
    width: '40%',
    backgroundColor: 'white',
    paddingLeft: '15px',
    paddingTop: '.7vmax',
    paddingBottom: '.7vmax'
  },
  message: {
    marginTop: '2vmax'
  },
  share: {
    textAlign: 'center',
    color: 'white',
    cursor: 'pointer',
    paddingTop: '3vh',
    button: {
      marginLeft: 'auto',
      marginRight: 'auto',
      height: '30px',
      paddingTop: '8px',
      backgroundColor: '#4267b2',
      borderRadius: '4px',
      display: 'inline-block',
      textAlign: 'left'
    },
    icon: {
      width: '16px',
      height: '16px',
      backgroundImage: `url('/facebook-logo.svg')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'inline-block',
      marginLeft: '12px',
      marginTop: '2px',
      float: 'left'
    },
    text: {
      display: 'inline',
      marginLeft: '10px',
      marginRight: '7px',
      fontSize: '.93rem',
      fontWeight: '300'
    },
    count: {
      float: 'right',
      marginRight: '9px'
    }
  }
};


export default Object.assign(LandingStyles, base);
