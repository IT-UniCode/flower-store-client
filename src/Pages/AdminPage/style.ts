import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    '& .page_title': {
      margin: '20px 0',
    },
    
    '& .basket-list_wrapper': {
      display: 'flex',
      justifyContent: 'center',

      '& .basket-list': {
        borderCollapse: 'collapse',
        maxWidth: '1000px',
        width: '100%',

        '& td, th': {
          textAlign: 'center',
          maxWidth: '200px',
          border: '1px solid #000',
        },
      },
    },
  },
});

export default useStyles;
