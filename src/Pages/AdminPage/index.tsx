import useStyles from './style';

const AdminPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className="content">AdminPage</p>
    </div>
  );
};

export default AdminPage;
