import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  homeImageContainer: {
    marginTop: '40px',
    marginBottom: '20px',
    maxHeight: '40%',
    maxWidth: '40%',
    borderRadius: '10px',
    [theme.breakpoints.down('md')]: {
      maxHeight: '100%',
      maxWidth: '100%',
    }
  },
  homeImage: {
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  homeImageInfoContainer: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: '10px',
    padding: '10px',
    '& p': {
      marginTop: '20px',
      marginBottom: '10px',
    },
    [theme.breakpoints.down('md')]: {
      width: 'auto'
    },
  },
}
));




