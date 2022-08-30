import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    width: '100%',
    minHeight: '400px',
    maxHeight: '500px'
  },
  image: {
    width: '100%',
    minHeight: '400px',
    maxHeight: '500px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  titleContainer: {
    position: 'absolute',
    bottom: '40px',
    left: '40px',
    color: 'white',
    backgroundColor: '#80808078',
    borderRadius: '10px',
    padding: '0 10px 0 10px',
  },
}
));




