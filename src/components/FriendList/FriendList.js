import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { FriendListStyled, FriendWrapper } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      <p
        style={{
          paddingTop: '10px',
          marginBottom: '10px',
          color: 'white',
          textAlign: 'center',
          borderTop: '1px solid white',
        }}
      >
        Friends: {friends.length}
      </p>
      <FriendWrapper>
        {friends.map(friend => {
          const { name, avatar, id, isOnline } = friend;
          return (
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
      </FriendWrapper>
    </FriendListStyled>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
  ).isRequired,
};
