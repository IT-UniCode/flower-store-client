import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    minHeight: "100vh",

    "& .signInForm_wrapper": {
      display: "flex",
      justifyContent: "center",
      marginTop: "50px",

      "& .signInForm": {
        maxWidth: "500px",
        width: "100%",
        backgroundColor: "#CFC3C6",
        padding: "30px",

        "& .ant-form-item-label": {
          width: '100px',
        },
        "& .form_item-input": {
          maxWidth: "340px",
          width: "100%",
          float: "right",
        },
        "& .signInForm_btns": {
          display: "flex",
          flexDirection: "column  ",
          alignItems: "center",

          "& .signInForm_btns_isSignIn": {
            width: "200px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            "& p": {
              fontSize: "12px",
              display: "inline",
            },
            "& button": {
              backgroundColor: "#6A5975",
              borderColor: "#6A5975",
            },
          },
          "& .signInForm_signInBtn": {
            width: "200px",
            backgroundColor: "#29bb89",
            borderColor: "#29bb89",
            marginBottom: "10px",
          },
        },
      },
    },
  },
});

export default useStyles;
