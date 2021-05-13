import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    maxWidth: '1200px', 
    width: "100%", 
    margin: '0 auto',
    padding: "60px 20px 0",
    minHeight: 'calc(100vh - 108px)',
  }
});

export default useStyles;
