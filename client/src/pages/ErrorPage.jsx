import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Button } from 'reactstrap';
import { Navigate } from 'react-router-dom';

function Error() {
  return (
    <Helmet title="Somthing went rough" className="m-96">
     <img style={{objectFit:"cover",objectPosition:"center",width:"60%",margin:"10% 20%"}} src="https://static.vecteezy.com/system/resources/thumbnails/023/152/240/original/delivery-break-404-error-animation-fast-food-restaurant-worker-empty-state-4k-concept-footage-with-alpha-channel-transparency-colorful-page-not-found-flash-message-for-ui-ux-web-design-video.jpg" alt="" />
     <a href="/home"><div>
  <Button style={{left: "46%",
   
    top: "48rem"}} className="position-absolute hover:bg-red-300"
    color="warning"
    size="lg"
   
  >
    Go To Home
  </Button>
</div></a>
    </Helmet>
   
  );
}

export default Error;
