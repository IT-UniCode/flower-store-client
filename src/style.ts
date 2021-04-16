import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    backgroundColor: '#E2DBD4',
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: '400',
    fontSize: '16px',
    color: '#39313C',

    '& h1, h2, h3, h4, h5, h6, p':{
      margin: '0',
    },
    '& a':{
      textDecoration: 'none',
    },

    "& .ant-layout": {
      backgroundColor: '#E2DBD4',
    }
  }
});

export default useStyles;
