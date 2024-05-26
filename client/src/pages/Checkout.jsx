import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Checkout = (pros) => {
  return (
    <Helmet title="Checkout your order">
      <div className="checkoutMessage mt-80">
        <div className="checkoutTitleContainer">
          <AiFillCheckCircle className="checkoutIcon" />
          <h3>Thank you for your order!</h3>
        </div>
        <span>
          Your order is being processed and will be delivered as fast as
          possible.
        </span>
      </div>
    </Helmet>
  );
};

export default Checkout;
