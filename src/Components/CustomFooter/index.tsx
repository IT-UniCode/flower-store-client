import { Layout } from "antd";

import useStyles from './style';

const { Footer } = Layout;

const CustomFooter = () => {
  const classes = useStyles();

  return (
    <Footer className={classes.root}>
      <div className='container'>
        Flower store ©2021 Created by UniCode
      </div>
    </Footer>
  );
};

export default CustomFooter;
