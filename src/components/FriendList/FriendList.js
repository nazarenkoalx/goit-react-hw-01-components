import PropTypes from 'prop-types';
import {
  FriendListStyled,
  FriendItem,
  Avatar,
  FriendName,
  Info,
} from './FriendList.styled';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div>
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
      <FriendListStyled>
        {friends.map(friend => {
          const { avatar, name, id, isOnline } = friend;
          return (
            <FriendItem key={id}>
              <Avatar src={avatar} alt={avatar} width="48" />
              <Info>
                <span className={css[isOnline]}></span>
                <FriendName>{name}</FriendName>
              </Info>
            </FriendItem>
          );
        })}
      </FriendListStyled>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
