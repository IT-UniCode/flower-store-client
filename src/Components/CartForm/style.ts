import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& .order_inner-left': {
      maxWidth: '600px',
      width: '100%',

      '& .check_address.ant-input': {
        borderColor: 'red',
        '&::placeholder': {
          color: 'red',
        },
      },
      '& .order_comment': {
        margin: '20px 0',
      },
    },
    '& .order_inner-right': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0px 40px',
      maxWidth: '200px',
      width: '100%',

      '& .order_total-price': {
        marginBottom: '10px',
        fontSize: '18px',
        fontWeight: '700',
        textAlign: 'center',
      },
      '& .order_btn': {
        backgroundColor: '#6A5975',
        fontSize: '16px',
        color: '#fff',
        padding: '6px 15px 8px',
        maxHeight: '40px',
        maxWidth: '180px',
        width: '100%',
        height: '100%',
        borderColor: '#6A5975',
      },
      '& .ant-result': {
        padding: '0px',

        '& .ant-result-icon ': {
          margin: '10px 0px 0px',

          '&> .anticon': {
            fontSize: '36px',
          },
        },
        '& .ant-result-title': {
          fontSize: '18px',
        },
      },
    },
  },
});

export default useStyles;
