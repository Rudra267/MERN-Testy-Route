import React, { useState, useEffect } from "react";
import "./Round.css";
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
        <div style={conputedLeft()} className="carouselPosts" >
          {dataArray.map((item, index) => (
            <div
              key={index} onClick={()=>{history('/food')}} 
              style={{
                width: carouselPostWidth,
                height: carouselPostHeight,
                
                margin: `0px ${carouselPostMargin}px`,
                ...props.carouselPostStyle,
              }}
              className="carouselPostBox"
            >
              {props.children(item, index)}
            </div>
          ))}
        </div>
      </div>
      <div onClick={() => changeImagePosition(-1)} className="controlL">
        <i className="fa fa-angle-left" />
      </div>
      <div onClick={() => changeImagePosition(1)} className="controlR">
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
        <div class="col-sm-6 col-md-4 col-xl mb-5 h-100" style={{cursor:"pointer"}}>
                        <div class="card card-span h-100 rounded-circle"><img class="img-fluid rounded-circle h-100" src={item.image} alt="..." />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">{item.title}</h5>
                          </div>
                        </div>
                      </div>
        </div>
      </div>
    );
  };

  const imageArray = [
    {
      image: "assets/img/gallery/search-pizza.png",
      title: "pizza",
    },
    {
      image: "assets/img/gallery/burger.png",
      title: "Burger",
    },
    {
      image: "assets/img/gallery/noodles.png",
      title: "Noodles",
    },
    {
      image: "assets/img/gallery/sub-sandwich.png",
      title: "Sub-sandwiches",

    },
    {
      image: "assets/img/gallery/chowmein.png",
      title: "Chowmein",
     
    },
    {
      image: "assets/img/gallery/steak.png",
      title: "Steak",
      
    },
    {
      image: "assets/img/gallery/sub-sandwich.png",
      title: "Dancake",
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
