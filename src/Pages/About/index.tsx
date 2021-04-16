import useStyles from './style';

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className="content">About</p>
    </div>
  );
};

export default About;
