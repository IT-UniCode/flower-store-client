import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    minHeight: "100vh",

    "& .page_title": {
      margin: "20px 0",
    },

    "& .ant-list-item-meta-avatar": {
      maxWidth: "200px",
      width: "100%",
      display: "flex",
      justifyContent: "center",

      "& .goods_img": {
        width: "100%",
        height: "100%",
      },
    },

    "& .goods_count": {
      fontSize: "16px",
      fontWeight: "500",
      marginRight: '20px',
      display: "flex",
      alignItems: 'center',

      '& .count_btn': {
        margin: '0 10px',
        fontSize: "20px",
        background: 'none',
        border: 'none',
        padding: '5px',
        cursor: 'pointer'
      }
    },
    "& .goods_price": {
      fontSize: "22px",
      fontWeight: "700",

      "& .goods_price-desc": {
        fontSize: "18px",
        fontWeight: "400",
      },
    },
    "& .ant-list-item-meta-title": {
      fontSize: "20px",
    },
    "& .ant-list-item-meta-description": {
      fontSize: "18px",
    },
  },
});

export default useStyles;
