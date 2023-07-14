import {
  Profile,
  Statistics,
  FriendsList,
  TransactionHistory,
} from './components';

import profileData from './user';
import statsData from './data';
import friendsData from './friends';
import transactionsList from './transactions';

function App() {
  return (
    <div className="App">
      <Profile {...profileData} />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendsList friends={friendsData} />
      <TransactionHistory items={transactionsList} />
    </div>
  );
}

export default App;
