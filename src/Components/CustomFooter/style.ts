import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    backgroundColor: '#39313C',
    display: 'flex',
    justifyContent: 'center',

    "& .container": {
      maxWidth: "1200px",
      width: '100%',
      height: '60px',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#E2DBD4',
    }
  }
});

export default useStyles;
