import {useContext, useState} from "react"

import css from './UserHero.module.css'

import HeroBanner from '../../../assets/images/profilebanner.jpg'
import user from '../../../assets/icons/biryaniC.png'
import edit from '../../../assets/icons/edit.png'
import location from '../../../assets/icons/location.png'

import EditProfileModal from '../../../Modals/EditProfileModal/EditProfileModal'
import { LoginContext } from './../../../components/ContextProvider/Context';

const UserHero = () => {
  const [modal, setModal] = useState(false)
  const { logindata, setLoginData } = useContext(LoginContext);

  const imageProfile = logindata.ValidUserOne && (
    logindata.ValidUserOne.google_ac_image ||
    logindata.ValidUserOne.LocalImage ||
    "https://cdn3.iconfinder.com/data/icons/avatars-29/100/Avatar-17-1024.png"
  );

  return <>
    <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.imgSec}>
                <img className={css.bannerImg} src={HeroBanner} alt="User Hero Section Image" />
            </div>
            <div className={css.txtBox}>
              <div className={css.leftBox}>
                <div className={css.profileImgBox}>
                  <img className={css.profileImg} src={imageProfile} alt='user image' />
                </div>
                <div className={css.profileDetails}>
                  <div className={css.name}>Rudranarayan Roul</div>
                  <span className={css.location}> <img src={location} className={css.locationIcon} /> Morinda,Punjab</span>
                </div>
              </div>
              <div className={css.rightBox}>
                <div className={css.editBtn} onClick={() => setModal(val => !val)}><span className={css.editProfileIconBox}><img src={edit} alt='edit icon' className={css.editProfileIcon} /></span>Edit Profile</div>
      
              </div>
            </div>
        </div>
    </div>
    {modal ? <EditProfileModal setModal={setModal} /> : "" }
  </>
}

export default UserHero