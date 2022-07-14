import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    margin: '0 !important',
    height: '100%',
    width: '100vw',

  },
  toolbar: {
    height: '90px',
    [theme.breakpoints.up('sm')]: {
      height: '10px',
    },
  },
  content: {
    margin: '0 10px 0 10px',
    [theme.breakpoints.up('sm')]: {
      margin: '0 10px 0 250px',
    },
  }
}));
