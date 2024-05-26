import css from './HowItWorks.module.css';

import backgroundImg from '../../../assets/images/addressbackground.jpg';
import bookIcon from '../../../assets/icons/book.png';
import bikeIcon from '../../../assets/icons/bike.png';
import packageIcon from '../../../assets/icons/package.png';

import Card5 from '../../../utils/Cards/card5/Card5';

let HowItWorks = () => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.div1}>
                <div className={css.imgBox}>
                    <img className={css.img} src={backgroundImg} alt="background image" />
                </div>
            </div>
            <div className={css.div2}>
                <div className={css.title}>How it works?</div>
                <div className={css.cards}>
                    <Card5 step='1' title='Create your page on Tasty Route' tag='Help users discover your place by creating a listing on Tasty Route' img={bookIcon} color='#FFFCF1' />
                    <Card5 step='2' title='Register for online ordering' tag='And deliver orders to millions of customers with ease' img={bikeIcon} color='#FFF5F6' />
                    <Card5 step='3' title='Start receiving orders online' tag='Manage orders on our partner app, web dashboard or API partners' img={packageIcon} color='#FFF9F1' />
                </div>
            </div>
        </div>
    </div>
}

export default HowItWorks;