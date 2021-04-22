import {createUseStyles} from 'react-jss';

const useStyles =createUseStyles({
  root: {

    '& .tag_item': {
      display: 'inline-block',
      margin: '2px',

      '& .ant-btn': {
        borderColor: '#6A5975',
      },
      '& .ant-btn:focus, .tag_item-selected': {
        backgroundColor: '#6A5975',
        color: '#FFF'
      },
      '& .ant-btn:hover': {
        backgroundColor: '#9574a1',
        color: '#FFF',
      },

    }
  }
})

export default useStyles;
