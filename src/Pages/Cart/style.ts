import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    minHeight: "100vh",

    "& .page_title": {
      margin: "20px 0",
    },
    "& .ant-list-items ": {
      marginBottom: '10px' ,

      "& .ant-list-item ": {
        position: "relative",

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

        "& .ant-list-item-meta-content": {
          maxWidth: "450px",
          width: "100%",
        },

        "& .ant-list-item-meta-title": {
          fontSize: "20px",
          marginBottom: '10px',
        },
        "& .ant-list-item-meta-description": {
          fontSize: "18px",
        },

        "& .goods_count": {
          fontSize: "16px",
          fontWeight: "500",
          maxWidth: "100px",
          width: "100%",
          display: "flex",
          alignItems: "center",

          "& .count_btn": {
            margin: "0 5px",
            background: "none",
            boxShadow: "none",
            transition: "border 300ms ease-in",
            borderColor: "transparent",

            "&:hover": {
              color: "#39133C",
              borderColor: "#6A5975",
            },
            "&:focus": {
              color: "#000",
              border: "none",
            },
          },
        },

        "& .goods_price": {
          fontSize: "22px",
          fontWeight: "700",
          maxWidth: "150px",
          width: "100%",

          "& .goods_price-desc": {
            fontSize: "18px",
            fontWeight: "400",
          },
        },

        "& .del_btn": {
          position: "absolute",
          top: "10px",
          right: "5px",
          backgroundColor: "#6A5975",
          color: "#E2DBD4",
          border: "#E2DBD4",
          transition: "background-color 300ms ease-in",

          "&:hover": {
            backgroundColor: "#483d4d",
          },
        },
      },
    },
  },
});

export default useStyles;
