import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "black"
    }
  },
  loadingModal: {
    position: 'absolute',
    top: '50%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('md')]: {
      left: '50%',
    },
  },
}
));




