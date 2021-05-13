import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',

    '& .offer': {
      fontFamily: '"Playfair Display", serif',
      margin: '80px 0 200px',
      maxWidth: '400px',
      width: '100%',
    },
    '& .offer_title': {
      fontSize: '42px',
      maxWidth: '250px',
      width: '100%',
      marginBottom: "30px",
    },
    '& .offer_text': {
      fontSize: '20px',
      marginBottom: '45px',
    },
    '& .offer_btn': {
      fontSize: '20px',
      color: '#E2DBD4',
      backgroundColor: '#6A5975',
      padding: '10px 45px',
      borderRadius: '25px',
      boxShadow: "0px 0px 6px 1px rgba(106, 89, 117, 0.89)",
    },
    '& .offer_img': {
      width: '496px',
      heigh: '496px',
      margin: 'auto 0'
    },
  },
});

export default useStyles;
