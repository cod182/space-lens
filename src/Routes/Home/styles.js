import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  homeImage: {
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  homeInfoContainer: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    '& p': {
      margin: '10px',
    },
    [theme.breakpoints.down('md')]: {
      width: 'auto'
    },
  },
}
));




