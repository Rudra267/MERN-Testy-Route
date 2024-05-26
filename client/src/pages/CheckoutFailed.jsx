import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";
import { AiFillCloseCircle } from "react-icons/ai";

const CheckoutFailed = (pros) => {
  return (
    <Helmet title="Checkout your order">
      <div className="checkoutMessage mt-80">
        <div className="checkoutTitleContainer">
          <AiFillCloseCircle className="FailedIcon" />
          <h3> your order Failed please go back try again..!</h3>
        </div>
        <span>
          Sorry your order is not being processed, Something is rough
        </span>
      </div>
    </Helmet>
  );
};

export default CheckoutFailed;
