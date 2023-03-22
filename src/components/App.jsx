import Profile from './Profile/Profile';
import Statistics from './Statistic/Statistics';
import FriendList from './Friends/FriendList';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
// import transactions from '../data/transactions.json';


export const App = () => {
  return (
    <div
      style={{
        height: '250vh',
        display: 'flex',
        // flexdirection: 'column',
        fontSize: 30,
        color: '#010101',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
    
    </div>
  );
};