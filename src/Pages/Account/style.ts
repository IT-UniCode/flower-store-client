import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .page_title": {
      margin: "20px 0",
    },
    "& .userData": {
      border: "1px solid rgba(57, 49, 60, 0.3)",
      width: "100%",
      padding: '10px',
      marginBottom: '10px',
      
      "& .userData_items": {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 30px',

        "& .userData_item": {
          textAlign: 'center',
          width: '200px',

          "& .userData_item-title": {
            fontWeight: '700'
          }
        },
      }
    },
  },
});

export default useStyles;
