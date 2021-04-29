import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    '& .ant-pagination-item-link, .ant-pagination-item': {
      backgroundColor: 'transparent',
      borderColor: 'transparent',

      '&:hover, a:hover': {
        color: '#39313C',
        borderColor: '#39313C',
      }
    },
    '& .ant-pagination-item-active a': {
      color: '#39313C',
      fontWeight: '700',
      fontSize: '16px',
    }
  },
});

export default useStyles;
