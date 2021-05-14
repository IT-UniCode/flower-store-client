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
            width: '150px',
            height: '30px',
            '&:hover': {
              color: 'inherit',
            }
          },

          '& .change-status_btn_sended': {
            backgroundColor: '#1cc5dc',
            '&:hover': {
              borderColor: '#126e82'
            }
          },

          '& .change-status_btn_accepted': {
            backgroundColor: '#ffd56b',
            '&:hover': {
              borderColor: '#f58634'
            }
          },

          '& .change-status_btn_staffed': {
            backgroundColor: '#8fd9a8',
            '&:hover': {
              borderColor: '#28b5b5'
            }
          },

          '& .change-status_btn_isdone': {
            backgroundColor: '#fb3640',
            '&:hover': {
              borderColor: '#1b1717'
            }
          },
        },
      },
    },
  },
});

export default useStyles;
