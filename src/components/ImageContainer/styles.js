import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  image: {
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  offlineImage: {
    objectFit: 'cover',
    borderRadius: '10px',
    height: '230px',
    width: '100%'
  },
  cursorPointer: {
    '&:hover': {
      cursor: 'pointer',
    }
  },
  title: {
    color: 'white',
    textAlign: 'center',
    minHeight: '50px',
  }
}
));
