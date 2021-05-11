import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .category-menu": {
      maxWidth: "320px",
      width: "100%",

      "& .category-menu_title, .tags_title": {
        fontSize: "20px",
        minWidth: '240px',
        maxWidth: '250px',
        marginBottom: '10px',
      },
      "& .ant-menu-item-selected, .ant-menu-item-active": {
        backgroundColor: "transparent",
        color: "#39313C",
      },
      '& .ant-menu-item-active, .selected_category': {
        fontWeight: "700",
      },
      "& ul": {
        backgroundColor: "transparent",
        border: "none",
        "& .category-menu_item": {
          fontSize: "16px",
        },
        "& .selected_category:before": {
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
      '& .clearBtn': {
        marginTop: '20px',
        backgroundColor: '#61436b',
        borderColor: '#61436b',
      }
    },
  },
});

export default useStyles;
