import css from "./FriendListItem.module.css"
import propTypes from 'prop-types'


export const FriendListItem = ({avatar, name, isOnline}) => {
    return <li className={css.item}>
      {isOnline === true && (<span className={css.statusOnline}><svg width = "20" height = "20"><circle r = "5" cx = "5" cy = "5" fill = "green" /></svg></span>)}
      {isOnline === false && (<span className={css.statusOffline}><svg width = "20" height = "20"><circle r = "5" cx = "5" cy = "5" fill = "red" /></svg></span>)}
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>
}

FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired, 
    name: propTypes.string.isRequired, 
     
    }