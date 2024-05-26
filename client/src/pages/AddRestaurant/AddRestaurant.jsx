import AddRestaurantHeader from '../../components/AddRestaurantComponents/AddRestaurantHeader/AddRestaurantHeader';
import WhyShouldYouPWZ from '../../components/AddRestaurantComponents/WhyShouldYouPWZ/WhyShouldYouPWZ';
import HowItWorks from '../../components/AddRestaurantComponents/HowItWorks/HowItWorks';
import SearchListedRestaurant from '../../components/AddRestaurantComponents/SearchListedRestaurant/SearchListedRestaurant';
import SmallBannerCard from '../../utils/Cards/SmallBannerCard/SmallBannerCard';
import FrequentlyAskedQues from '../../components/HomeComponents/FrequentlyAskedQues/FrequentlyAskedQues';
import AddRestaurantSec from '../../components/AddRestaurantComponents/AddRestaurantSec/AddRestaurantSec';


import css from './AddRestaurant.module.css'
import Helmet from '../../components/Helmet/Helmet';

let AddRestaurant = () => {
    return <Helmet title="Register your Resturant and expand your Bussiness">
        <AddRestaurantHeader />
        <WhyShouldYouPWZ />
        <HowItWorks />
        <SearchListedRestaurant />
        <SmallBannerCard />
        <FrequentlyAskedQues />
        <AddRestaurantSec />
    </Helmet>
}

export default AddRestaurant;