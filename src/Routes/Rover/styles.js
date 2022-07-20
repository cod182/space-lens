import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "black"
    }
  },
  pageTitle: {
    color: 'white',
    textAlign: 'center',
    marginBottom: '10px !important'
  },
  title: {
    color: 'white'
  },
  container: {
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  infoContainer: {
    margin: '50px 0 0 0',
    backgroundColor: '#808080bf',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    width: 'fit-content',
  },
  FlexRowCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: { flexDirection: 'row', },
  imageContainerTop: {
    maxWidth: '230px !important',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainerX: {
    display: 'flex',
    flexDirection: 'row',
  },
  green: { color: 'green' },
  red: { color: 'red' },
  dateInput: {
    height: '50px',
    width: '200px',
    textAlign: 'center',
    fontSize: '20px',
    margin: '10px',
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