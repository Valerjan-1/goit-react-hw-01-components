import css from './friend-item.module.css';

const FriendListItem = ({ id, name, avatar, status }) => {
  return (
    <li key={id} className={css.item}>
      <span
        className={css.status}
        style={{
          background: status ? 'green' : 'red',
        }}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
export default FriendListItem;
