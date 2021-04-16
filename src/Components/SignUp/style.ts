import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    minHeight: "100vh",

    "& .signUpForm_wrapper": {
      display: "flex",
      justifyContent: "center",
      marginTop: "50px",

      "& .signUpForm": {
        maxWidth: "500px",
        width: "100%",
        backgroundColor: "#CFC3C6",
        padding: "30px",

        "& .ant-form-item-label": {
          width: '150px',
        },
        "& .ant-input-affix-wrapper": {
          maxWidth: "300px",
          width: "100%",
          float: "right",
        },
        "& .signUpForm_btns": {
          display: "flex",
          flexDirection: "column  ",
          alignItems: "center",

          "& .signUpForm_btns_isSignUp": {
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
          "& .signUpForm_signUpBtn": {
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
