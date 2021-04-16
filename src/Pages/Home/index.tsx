import useStyles from "./style";
import offerImg from '../../assets/img/offer_img.png';
const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="offer">
        <h1 className="offer_title">Цветы на любой вкус</h1>
        <p className="offer_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tempore nemo debitis modi at. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        <a href="/" className="offer_btn">
          Заказать букет
        </a>
      </div>
      <img src={offerImg} className='offer_img' alt='bouquet'/>
    </div>
  );
};

export default HomePage;
