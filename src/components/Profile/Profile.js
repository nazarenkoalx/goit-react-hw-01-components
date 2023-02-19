import PropTypes from 'prop-types';
import {
  Stats,
  Item,
  Label,
  Quantity,
  Description,
  AvatarImage,
  Name,
  Tag,
  Location,
  ProfileWrapper,
} from './Profile.styled';

export const Profile = ({ data }) => {
  const { username, avatar, tag, location, stats } = data;
  return (
    <ProfileWrapper>
      <Description className="description">
        <AvatarImage src={avatar} alt={username} />
        <Name className="name">{username}</Name>
        <Tag>{tag}</Tag>
        <Location className="location">{location}</Location>
      </Description>
      <Stats>
        <Item>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </Stats>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object,
  }).isRequired,
};
