import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    minHeight: "100vh",

    "& .page_title": {
      margin: "20px 0",
    },
    "& .ant-avatar": {
      width: "150px",
      height: "150px",
    },
    "& .ant-list-item-meta-title": {
      fontSize: "20px",
    },

    "& .order_wrapper": {
      display: "flex",
      alignItems: "center",
      justifyContent: 'center',

      "& .order_comment": {
        margin: "20px 0",
      },
      "& .order_inner": {
        margin: "20px 40px",
        
        "& .order_total-price": {
          marginBottom: "10px",
          fontWeight: '700'
        },
        "& .order_btn": {
          backgroundColor: '#6A5975',
          fontSize: '16px',
          color: '#fff',
          padding: '6px 15px 8px',
          maxHeight: '40px',
          maxWidth: '180px',
          width: '100%',
          height: '100%',
          borderColor: '#6A5975'
        },
      },
    },
  },
});

export default useStyles;
