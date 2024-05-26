import css from './User.module.css'

// import Navbar from '../../components/Navbars/NavigationBar2/NavigationBar2'
import UserProfileRightsideBar from '../../components/UserProfileComponents/UserProfileRightsideBar/UserProfileRightsideBar'

import UserHero from '../../utils/UserProfileUtils/UserHero/UserHero'
import LeftSideCardPanel from '../../utils/Cards/LeftSideCardPanel/LeftSideCardPanel'
import SuggestedFollowCard from '../../utils/UserProfileUtils/SuggestedFollowCard/SuggestedFollowCard'
import ProfileWidget from '../../utils/UserProfileUtils/ProfileWidget/ProfileWidget'

import userImg from '../../assets/images/koushil.jpg';

import Helmet from '../../components/Helmet/Helmet'

const User = () => {

    let data1 = [ 
        {title: "Reviews", hash: "reviews"},
        {title: "Photos", hash: "photos"},
        {title: "Followers", hash: "followers"},
        {title: "Recently Viewed", hash: "recently-viewed"},
        {title: "Bookmarks", hash: "bookmarks"},
        {title: "Blog Posts", hash: "blog-posts"}
    ];
    let data2 = [ 
        {title: "Order History", hash: "order-history"},
        {title: "My Address", hash: "my-address"},
        {title: "Favorite Orders", hash: "favorite-orders"},
    ];
    let data5 = [ 
        {title: "Yours Booking", hash: "bookings"},
    ];

    let data3 = [
        {userId: 123, imgSrc:"https://th.bing.com/th/id/OIP.omm53WkbsDmkBzZHsEepagAAAA?rs=1&pid=ImgDetMain", userName: "Ram Kumar Singh", reviews: 150, followers: "200"},
        {userId: 123, imgSrc:"https://i.pinimg.com/originals/b5/81/bf/b581bfac5a9a79fb06947f3b22dee67d.jpg", userName: "Prashant kumar Singh", reviews: 89, followers: "129"},
        {userId: 123, imgSrc:"https://th.bing.com/th/id/OIP.oFt8eTdnkyOievQkPqK5uQHaFr?w=884&h=678&rs=1&pid=ImgDetMain", userName: "Udbhav Ojha", reviews: 50, followers: "1000"},
        {userId: 123, imgSrc:"https://k-popped.com/kpopped2012/wp-content/uploads/2015/11/the_time_we_were_not_in_love_2.jpeg", userName: "Laxman Kumar Sahoo", reviews: 200, followers: "160"}
    ]

    let data4 = {
      profilePic: userImg,
      userName: "Koushil",
      reviews: 1,
      photos: 1,
      followers: 200
    }

  return (

    
  
  <div className={css.outerDiv}>
    
    <div className={css.box}>
      <UserHero />
      <div className={css.mainbody}>
        <div className={css.leftBox}>
          {/* <LeftSideCardPanel name='ACTIVITY' data={data1} /> */}
          <LeftSideCardPanel name='ONLINE ORDERING' data={data2} />
          {/* <LeftSideCardPanel name='TABLE BOOKING' data={data5} /> */}
          <SuggestedFollowCard name='SUGGESTED FOODIES TO FOLLOW' data={data3} />
          {/* <ProfileWidget name='ZOMATO PROFILE WIDGET' tag="Showcase your Zomato profile on your blog." data={data4} /> */}
        </div>
        <div className={css.rightBox}>
          <UserProfileRightsideBar />
        </div>
      </div>
    </div>
  </div>)
}

export default User