import React, { useState, useEffect } from "react";
import "./Food.css";
import { useNavigate } from "react-router-dom";

var timer;
const Carousel = (props) => {
  const [nowIndex, setNowIndex] = useState(0);
  const history = useNavigate()

  useEffect(() => {
    if (props.autoplay) {
      autoPlay();
    }

    return () => clearInterval(timer);
  }, []);

  const autoPlay = () => {
    timer = setInterval(() => {
      changeImagePosition(1);
    }, props.delay * 1000);
  };

  const conputedLeft = () => {
    const { carouselPostWidth, carouselPostMargin } = props;
    let leftSpan = -nowIndex * (parseInt(carouselPostWidth) + 2 * carouselPostMargin);
    return {
      left:
        carouselPostWidth.toString().match(/[%vw]/) !== null
          ? `calc(${leftSpan}% - ${carouselPostMargin * 2 * nowIndex}px)`
          : `${leftSpan}px`,
    };
  };

  const changeImagePosition = (step) => {
    const { dataArray } = props;
    setNowIndex((nowIndex + step + dataArray.length) % dataArray.length);
  };

  const { dataArray, carouselPostMargin, carouselPostWidth, carouselPostHeight } = props;

  return (
    <div className="carouselContainer">
      <div className="carouselArea">
        <div style={conputedLeft()} className="carouselPosts">
          {dataArray.map((item, index) => (
            <div
              key={index}
              style={{
                width: carouselPostWidth,
                cursor:"pointer",
                height: carouselPostHeight,
                margin: `0px ${carouselPostMargin}px`,
                ...props.carouselPostStyle,
              }}
              className="carouselPostBox" onClick={()=>{history('/food')}}
            >
              {props.children(item, index)}
            </div>
          ))}
        </div>
      </div>
      <div onClick={() => changeImagePosition(-1)} className="controlLeft">
        <i className="fa fa-angle-left" />
      </div>
      <div onClick={() => changeImagePosition(1)} className="controlRight">
        <i className="fa fa-angle-right" />
      </div>
    </div>
  );
};

const Container = () => {
  const renderChildrenView = (item, index) => {
    return (
      <div className="contentBox" key={index}>
        <div className="cardBox">
          <div className="col-sm-6 col-md-4 col-xl mb-5 overflow-hidden h-100">
            <div className="card card-span h-100 rounded-3">
              <img className="img-fluid rounded-3 h-100" src={item.image} alt="..." />
              <div className="card-body ps-0">
                <h5 className="fw-bold text-1000 text-truncate mb-1">{item.title}</h5>
                <div>
                  <span className="text-warning me-2">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <span className="text-primary">{item.context}</span>
                </div>
                <span className="text-1000 fw-bold">₹{item.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const imageArray = [
    {
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dunodvswg5nttqsl39kr",
      title: "Chiken Soup",
      context: "Cafe 555 & Aqeeq Restaurant",
      price:124
    },
    {
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cxvuxxwpkicbqo3nkqiy",
      title: "Chiken Lolipop",
      context: "Meridian Restaurant",
      price:180
    },
    {
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/4/4c4ce474-1ae6-4ef8-978e-c62230622ac7_234589.jpg",
      title: "Lucky Restaurant",
      context: "Grili9",
      price:250
    },
    {
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/l3aclqvjxrk0trt1r5ph",
      title: "Special 4M Biryani",
      context: "4M Biryani House",
      price:230
    },
    {
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eiigt5dg1dduxo76b8il",
      title: "Shah Ghouse Hotel & Restaurant",
      context: "Gobi Curry",
      price:420
    },
    {
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/smfhai0o8rnjuzp3ngxu",
      title: "chiken Guptugu",
      context: "Bawarchi",
      price:199
    },
    {
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bbe978c0cb1581d3456551b33499964e",
      title: "Biriyani",
      context: "Mehfil",
      price:130
    },
    {
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/acwvb2nr6kriqnb5finh",
      title: "chiken Labaz",
      context: "Hotel Paradice",
      price:240
    },
    {
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xoz3o1xpuyreuyj6nzjh",
      title: "chiken Biriyani",
      context: "Lajawab Resturant",
      price:199
    },{
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cxvuxxwpkicbqo3nkqiy",
      title: "Chiken Lolipop",
      context: "Meridian Restaurant",
      price:180
    },
    {
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/4/4c4ce474-1ae6-4ef8-978e-c62230622ac7_234589.jpg",
      title: "Lucky Restaurant",
      context: "Grili9",
      price:250
    },
    {
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/l3aclqvjxrk0trt1r5ph",
      title: "Special 4M Biryani",
      context: "4M Biryani House",
      price:230
    },
    {
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eiigt5dg1dduxo76b8il",
      title: "Shah Ghouse Hotel & Restaurant",
      context: "Gobi Curry",
      price:420
    },  {
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bbe978c0cb1581d3456551b33499964e",
      title: "Biriyani",
      context: "Mehfil",
      price:130
    },
    {
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/acwvb2nr6kriqnb5finh",
      title: "chiken Labaz",
      context: "Hotel Paradice",
      price:240
    },
    {
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xoz3o1xpuyreuyj6nzjh",
      title: "chiken Biriyani",
      context: "Lajawab Resturant",
      price:199
    },
  ];

  return (
    <React.Fragment>
      <Carousel
        dataArray={imageArray}
        autoplay={true}
        delay={10}
        carouselPostWidth={"400px"}
        carouselPostHeight={150}
        carouselPostMargin={10}
      >
        {renderChildrenView}
      </Carousel>
    </React.Fragment>
  );
};

export default Container;
