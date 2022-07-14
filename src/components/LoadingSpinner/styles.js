import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  spinner: {
    position: 'relative',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    '& ::before': {
      content: "",
      position: 'absolute',
      borderRadius: 'inherit',
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(0deg, rgb(193, 236, 255) 0%, rgb(229, 194, 234) 100%)',
      animation: '$spin 0.5s infinite linear',
    },
    '& ::after': {
      content: "",
      position: 'absolute',
      borderRadius: 'inherit',
      width: '85%',
      height: '85%',
      backgroundColor: 'black',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
  '@keyframes spin': {
    to: {
      transform: 'rotate(360deg)',
    }
  },
}
));




