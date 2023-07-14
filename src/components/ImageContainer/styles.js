import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({

  imageContainer: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
  },
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
  },
}
));
