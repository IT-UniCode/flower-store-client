import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "200px",
    '&  .popover_title': {
      borderBottom: '1px solid #9e9d9d'
    }
  },
});

export default useStyles;
