import React from 'react';
import { createRoot } from 'react-dom/client';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';
import FriendList from './FriendsList/FriendList';
import friends from './FriendsList/friends.json';
import TransactionHistory from './Transactions/TransactionHistory';
import transactions from './Transactions/transactions.json';
import '../index.css';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />;
    <TransactionHistory items={transactions} />;
  </React.StrictMode>
);



