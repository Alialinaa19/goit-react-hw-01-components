import css from "./FriendList.module.css"
import propTypes from 'prop-types'
import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = ({friends}) => {
    console.console.log(friends);
return (<ul className="friend-list">
    {friends.map(friend =>(<FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name}/>))}
    
</ul>)
}
