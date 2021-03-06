import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    backgroundColor: "#39313c",
    border: "none",
    position: "fixed",
    zIndex: "2000",
    width: "100%",

    "& .header_inner": {
      maxWidth: "1200px",
      padding: "0 20px",
      width: "100%",
      margin: "0 auto",
      display: "flex",
      height: "60px",
      justifyContent: "space-between",
      alignItems: "center",
    },

    "& .ant-menu": {
      margin: "0",
      padding: "0",
      width: "100%",
      position: "relative",
      backgroundColor: "#39313c",
      border: "none",
      lineHeight: "0px",
      display: "flex",
      alignItems: "center",

      "& .logo_link": {
        width: "40px",
        height: "40px",
        margin: "6px auto 0",
        display: "inline-block",
      },

      "& .ant-menu-item": {
        display: "inline-block",
        color: "#ffffff",
        lineHeight: "0px",
        padding: "0",
        marginRight: "40px",
        cursor: "default",
      },

      "& .menu_link": {
        display: "inline-block",
        lineHeight: "50px",
        color: "#ffffff",
        fontSize: "16px",
        textDecoration: "none",
      },

      "& .menu_item_right": {
        marginRight: "0",
        marginLeft: "40px",
        position: "absolute",
        right: "0px",
      },

      "& .menu_item_cart": {
        right: "125px",
        bottom: "-8px",

        "& .ant-badge": {
          position: "fixed",

          "& .cart_btn": {
            background: "none",
            border: "none",
            outline: "none",

            '&:focus': {
              color: '#'
            },

            "& .anticon": {
              color: "#fff",

              "& svg": {
                width: "30px",
                height: "30px",
              },
            },
          },
        },
      },

      "& .menu_item_contact": {
        right: "215px",
      },

      "& .ant-menu-item-selected": {
        backgroundColor: "transparent",

        "& .menu_link": {
          position: "relative",
        },
        "& .menu_link:after": {
          content: '""',
          width: "100%",
          height: "2px",
          bottom: "11px",
          left: "0",
          backgroundColor: "#ffffff",
          position: "absolute",
        },
      },

      "& .ant-menu-item-active": {
        backgroundColor: "transparent",

        "& .menu_link": {
          position: "relative",
        },
        "& .menu_link:after": {
          content: '""',
          width: "100%",
          height: "2px",
          bottom: "11px",
          left: "0",
          backgroundColor: "#ffffff",
          position: "absolute",
        },
      },
    },
  },
});

export default useStyles;
