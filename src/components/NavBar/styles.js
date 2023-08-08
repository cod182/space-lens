import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  appBar: {
    backgroundColor: '#847d7d !important',
    height: '80px',
    justifyContent: 'center',

  },
  mobileNavContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  greyBackground: {
    backgroundColor: '#e2e2e28a !important',
    borderRadius: '30px !important',
    margin: '10px !important',
    height: '-webkit-fill-available !important'
  },
  logo: {
    maxHeight: '70px'
  }
}));
