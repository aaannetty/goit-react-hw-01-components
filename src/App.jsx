import {
  Profile,
  Statistics,
  FriendsList,
  TransactionHistory,
} from './components';

import profileData from './user.json';
import statsData from './data.json';
import friendsData from './friends.json';
import transactionsList from './transactions.json';

function App() {
  return (
    <div className="App">
      <Profile {...profileData} />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendsList friends={friendsData} />
      <TransactionHistory transactions={transactionsList} />
    </div>
  );
}

export default App;
