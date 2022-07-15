import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  image: {
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  cursorPointer: {
    '&:hover': {
      cursor: 'pointer',
    }
  },
  model: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '60vw',
    maxHeight: '80vh',
    backgroundColor: 'white',
    border: '3px solid #000',
    borderRadius: '10px',
    boxShadow: '4px 4px 21px #000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'scroll',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      width: '70vw',
    }
  },
  modelImage: {
    maxWidth: '90%',
    margin: 'auto',
    maxHeight: 'auto',
    borderRadius: '10px'
  },
  title: {
    color: 'white',
    textAlign: 'center',
  }
}
));
