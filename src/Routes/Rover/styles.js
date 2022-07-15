import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "black"
    }
  },
  container: {
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageContainerTop: {
    maxWidth: '230px',

  },
  imageContainerX: {
    display: 'flex',
    flexDirection: 'row',
  }
}));
