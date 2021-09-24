import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <span className={friend.isOnline ? s.isOnline : s.isOffline}></span>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendList;
