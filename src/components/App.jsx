import { Profile } from "./Profile/Profile";
import userData from '../user.json';
import { Statistics } from "./Statistics/Statistics";
import stats from '../data.json';
import { FriendList } from "./FriendList/FriendList";
import friends from '../friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile key={userData.username} avatar={userData.avatar} userName={userData.username} tag={userData.tag} location={userData.location}  countOfFollowers={userData.stats.followers} countOfViews={userData.stats.views} countOfLikes={userData.stats.likes}   />
      <Statistics 
      docx={stats[0].percentage}
      mp3={stats[2].percentage}
      pdf={stats[1].percentage}
      mp4={stats[4].percentage}
      />
      <FriendList
      friends={friends}
      />
    </div>
  );
};

