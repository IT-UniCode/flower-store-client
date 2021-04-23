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

      "& .ant-avatar": {
        width: "100%",
        height: "100%",
      },
    },

      "& .goods_price": {
        fontSize: "22px",
        fontWeight: "700",
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
