import { Profile } from "./Profile/Profile";
import userData from '../user.json';
import { Statistics } from "./Statistics/Statistics";
import stats from '../data.json';
import { FriendList } from "./FriendList/FriendList";
import friends from '../friends.json';
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
       flexWrap: 'wrap',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        width: '1200px',
    padding: '20px',
    margin: '0 auto',
      }}
    >
          
      <Profile key={userData.username} avatar={userData.avatar} userName={userData.username} tag={userData.tag} location={userData.location}  countOfFollowers={userData.stats.followers} countOfViews={userData.stats.views} countOfLikes={userData.stats.likes}   />
      <FriendList
    friends={friends}
    />
      
      <Statistics 
      docx={stats[0].percentage}
      mp3={stats[2].percentage}
      pdf={stats[1].percentage}
      mp4={stats[4].percentage}
      />
      
        <TransactionHistory
        transactions = {transactions}
    />
    </div>

  );
};

