import Profile from "./components/Profile/Profile";
import userData from "./components/Profile/userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./components/FriendList/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/TransactionHistory/transactions.json";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
