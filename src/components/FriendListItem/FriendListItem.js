import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
import { Avatar, Info, FriendName, FriendItem } from './FriendListItem.styled';

export const FriendListItem = ({ key, avatar, name, isOnline }) => {
  return (
    <FriendItem key={key}>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Info>
        <span className={css[isOnline]}></span>
        <FriendName>{name}</FriendName>
      </Info>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
