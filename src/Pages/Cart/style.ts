import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    minHeight: '100vh',

    '& .page_title': {
      margin: '20px 0'
    }
    
  },
});

export default useStyles;
