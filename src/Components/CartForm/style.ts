import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& .check_address.ant-input": {
      borderColor: "red",
      "&::placeholder": {
        color: "red",
      },
    },
    "& .order_comment": {
      margin: "20px 0",
    },
    "& .order_inner": {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: "0px 40px",
      
      "& .order_total-price": {
        marginBottom: "10px",
        fontWeight: "700",
      },
      "& .order_btn": {
        backgroundColor: "#6A5975",
        fontSize: "16px",
        color: "#fff",
        padding: "6px 15px 8px",
        maxHeight: "40px",
        maxWidth: "180px",
        width: "100%",
        height: "100%",
        borderColor: "#6A5975",
      },
      '& .ant-result': {
        padding: '0px',

        '& .ant-result-icon': {
          margin: '0px',
          fontSize: '28px',
        },
        '& .ant-result-title': {
          fontSize: '18px',
        }
      }
    },
  },
});

export default useStyles;
