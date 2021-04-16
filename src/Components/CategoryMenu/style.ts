import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .category-menu": {
      maxWidth: "250px",
      width: "100%",

      "& .category-menu_title": {
        fontSize: "20px",
      },
      "& .ant-menu-item-selected, .ant-menu-item-active": {
        backgroundColor: "transparent",
        fontWeight: "700",
        color: "#39313C",
      },
      "& ul": {
        backgroundColor: "transparent",
        border: "none",
        "& .category-menu_item": {
          fontSize: "16px",
        },
        "& .ant-menu-item-selected:before": {
          content: '""',
          position: "absolute",
          left: "0",
          top: "16px",
          width: "8px",
          height: "8px",
          borderRadius: "25px",
          backgroundColor: "#39313C",
          zIndex: "3",
        },
      },
    },
  },
});

export default useStyles;
