import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    minHeight: "100vh",

    "& .page_title": {
      marginTop: "20px",
    },

    "& .catalogue_wrapper": {
      display: "flex",
      justifyContent: "space-between",
      padding: "30px 0 100px",
    },
  },
});

export default useStyles;
