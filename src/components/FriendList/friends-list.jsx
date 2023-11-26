import css from './friends.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friendItem => {
        const isOnline = friendItem.isOnline ? 'green' : 'red';
        return (
          <li key={friendItem.id} className={css.item}>
            <span
              className={css.status}
              style={{
                background: isOnline,
              }}
            >
              {friendItem.isOnline}
            </span>
            <img
              className={css.avatar}
              src={friendItem.avatar}
              alt={friendItem.name}
              width="48"
            />
            <p className={css.name}>{friendItem.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
//
export default FriendList;
