import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "black"
    }
  },
  roversContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
    margin: '30px 0'
  },
  roverContainer: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column !important',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    margin: '20px 0 !important',
    backgroundColor: 'black',
    border: '1px solid white',
    maxHeight: '400px !importnat',
    maxWidth: '400px !important',
    borderRadius: '10px',
    overflow: 'hidden',
    position: 'relative',
    "&:hover": {
      cursor: 'pointer',
      backgroundColor: 'white',
      color: 'black',
      "& $roverInfoContainer": {
        transform: 'translateY(7%)',
        transition: 'all 300ms ease-in-out',

      },
    },
  },
  roverInfoContainer: {
    position: 'absolute',
    backgroundColor: '#ffffff8c',
    width: '100%',
    height: '88%',
    transform: 'translateY(110%)',
    transition: 'all 300ms ease-in-out',
  },

  statsContainer: {
    padding: '15px 15px',
    textTransform: 'capitalize',
  },
  green: { color: '#21ff21' },
  red: { color: 'red' },

  roverImage: {
    maxWidth: '100%',
    objectFit: 'cover',
    display: 'flex'
  },
  loadingModal: {
    position: 'absolute',
    top: '50%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('md')]: {
      left: '50%',
    },
    width: 400,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    height: '400px',
    alignItems: 'center',
    backgroundColor: '#ffffff7d',
    borderRadius: '50%',
  }
}));
