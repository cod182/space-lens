import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  image: {
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  model: {
    position: 'absolute',
    top: '50%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '60vw',
    maxHeight: '60vh',
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
      left: '50%',
      width: '70vw',
    }
  },
  modelImage: {
    maxWidth: '90%',
    margin: 'auto',
    maxHeight: 'auto',
    borderRadius: '10px'
  }
}
));
