import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../data/user';
import data from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';
import { Main } from './Main/Main.styled';
import { Aside } from './Aside/Aside.styled';
import { Container } from './Container/Container.styled';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <Container>
      <Aside>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <FriendList friends={friends} />
      </Aside>
      <Main>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
        <TransactionHistory items={transactions} />
      </Main>
    </Container>
  );
};
