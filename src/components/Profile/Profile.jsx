import css from "./Profile.module.css"
import propTypes from 'prop-types'

export const Profile = ({avatar, userName, tag, location, countOfFollowers, countOfViews, countOfLikes}) => {
    return <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt="User avatar"
    className={css.avatarImg}
      />
      <div className={css.userInfo}>
      <p className={css.name}>{userName}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
      </div>
    </div>
  
    <ul className={css.stats}>
      <li className={css.itemOfStat}>
        <span className={css.label}>Followers</span> <br/>
        <span className={css.quantity}>{countOfFollowers}</span>
      </li>
      <li className={css.itemOfStat}>
        <span className={css.label}>Views</span> <br/>
        <span className={css.quantity}>{countOfViews}</span>
      </li>
      <li className={css.itemOfStat}>
        <span className={css.label}>Likes</span> <br/>
        <span className={css.quantity}>{countOfLikes}</span>
      </li>
    </ul>
  </div>
}

Profile.propTypes = {
    avatar: propTypes.string.isRequired, 
    userName: propTypes.string.isRequired, 
    tag: propTypes.string.isRequired, 
    location: propTypes.string.isRequired, 
    countOfFollowers: propTypes.number.isRequired, 
    countOfViews: propTypes.number.isRequired, 
    countOfLikes: propTypes.number.isRequired}