import css from "./Profile.module.css"
import propTypes from 'prop-types'

export const Profile = ({avatar, userName, tag, location, countOfFollowers, countOfViews, countOfLikes}) => {
    return <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt="User avatar"
    className={css.avatar}
      />
      <p className={css.name}>{userName}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{countOfFollowers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{countOfViews}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
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