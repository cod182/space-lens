import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  sidebarContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '240px',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
    },
  },
  logoContainer: {
    margin: 'auto',
  },
  logo: {
    width: 'fit-content',
    height: '200px',
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
    backgroundColor: 'inherit !important',
  },
  sidebarIcon: {
    color: 'black',
    backgroundColor: 'inherit!important',
    maxWidth: '50px',
  }
}

));




