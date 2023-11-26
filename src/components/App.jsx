import user from './Profile/user.json';
import Profile from './Profile/profile';

import data from './Statistics/data.json';
import Statistics from './Statistics/statistics';

import friends from './FriendList/friends.json';
import FriendList from './FriendList/friends-list';

import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/transactions-history';

import css from './App.module.css';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <div className={css.container}>
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};
