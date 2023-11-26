import css from './friends.module.css';
import FriendListItem from './friend-list-item';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            status={isOnline}
            avatar={avatar}
            name={name}
          />
        );
      })}
    </ul>
  );
};
//
export default FriendList;
