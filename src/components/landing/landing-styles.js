import base from '../../styles-library/base';

const LandingStyles = {
  color: '#545454',
  backgroundColor: `#e4e4e4`,
  overflow: 'auto',
  display: 'inline-block',
  main: {
    fontSize: '1.3rem',
    fontWeight: '200',
    width: '40%',
    backgroundColor: 'white',
    paddingLeft: '36px',
    paddingTop: '9px',
    paddingBottom: '9px',
    marginTop: '2.5rem'
  },
  message: {
  },
  share: {
    textAlign: 'center',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    maxWidth: '960px',
    color: 'white',
    cursor: 'pointer',
    paddingBottom: '2.5rem',
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
      backgroundImage: `url('facebook-logo.svg')`,
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
