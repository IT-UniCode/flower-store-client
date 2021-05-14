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
        marginBottom: '30px',

        '& td, th': {
          textAlign: 'center',
          border: '1px solid #000',
          padding: '5px 10px',
          maxWidth: '200px',

          '& .change-status_btn': {
            width: '100%',
            height: '100%'
          }
        },
      },
    },
  },
});

export default useStyles;
