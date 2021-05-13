import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    '& .goods_items': {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      minWidth: '840px',
      width: '100%',

      '& .ant-card': {
        maxWidth: '250px',
        width: '100%',
        backgroundColor: '#CFC3C6',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '20px 0',
        border: 'none',
        borderRadius: '5px',
        margin: '0 10px 20px',

        '& .ant-card-body': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: '"Open sans", sans-serif',
          padding: '10px 10px 30px',
          position: 'relative',

          '& .goods_card-imgBlock': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxWidth: '200px',
            width: '100%',
            height: '250px',

            '& .goods_card-img': {
              width: '100%',
            },
          },
          '& .popover': {
            cursor: 'pointer',
            marginBottom: '45px',

            '& .goods_card-title, .goods_card-desc': {
              textAlign: 'center',
              maxWidth: '230px',
              width: '100%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            '& .goods_card-title': {
              margin: '10px 0',
              fontSize: '18px',
            },
            '& .goods_card-desc': {
              padding: '0 15px',
            },
          },
          '& .goods_card-price': {
            position: 'absolute',
            bottom: '40px',
            fontSize: '18px',
            fontWeight: '500',
          },
          '& .goods_card-btn': {
            position: 'absolute',
            bottom: '0',
            outline: 'none',
            border: 'none',
            borderRadius: '25px',
            padding: '3px 50px 5px',
            color: '#ffffff',
            fontSize: '16px',
            backgroundColor: '#6A5975',
            boxShadow: '0px 0px 6px 1px rgba(106, 89, 117, 0.89)',
          },
        },
      },
    },
  },
});

export default useStyles;
