import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  sidebarContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '220px',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100vw - 20px)',
    },
  },
  closeIcon: {
    width: 'fit-content',
    position: 'absolute !important',
    left: '20px',
    top: '10px',
  },
  logoContainer: {
    margin: 'auto',
    maxHeight: '200px',
    maxWidth: 'fit-content',
    width: 'fit-content',
    [theme.breakpoints.down('sm')]: {
      marginTop: '30px'
    },
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  subHeaders: {
    fontWeight: 'bold',
    fontSize: 'x-large',
    color: 'black !important',
  },
  sidebarCategories: {
    alignItems: 'start',
    '& a': {
      color: 'black !important',
      textDecoration: 'none',
    },
    '& span': {
      fontWeight: 'bold',
      fontSize: 'large',
    }
  },
  sidebarSubheader: {
    backgroundColor: '#e2e2e2 !important',
  },
  sidebarIcon: {
    color: 'black',
    backgroundColor: 'inherit!important',
    maxWidth: '50px',
  }
}

));




