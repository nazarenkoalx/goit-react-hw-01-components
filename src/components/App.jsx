import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import userData from '../user';
import data from '../data';
import friends from '../friends';
import transactions from '../transactions';
import { Main } from './Main/Main.styled';
import { Aside } from './Aside/Aside.styled';
import { Container } from './Container/Container.styled';

export const App = () => {
  return (
    <Container>
      <Aside>
        <Profile data={userData} />
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
