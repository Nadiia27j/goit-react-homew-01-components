import PropTypes from 'prop-types';
import css from './FriendList.module.css';



export default function FriendList({ friends }) {
    return <ul className={css.friendList}>
       {friends.map(({ avatar, id, isOnline, name}) => (
        <li className={css.item} key={id} >
          <span className={isOnline ? css.statusTrue : css.statusFalse}></span>
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
        </li>
        ))}
  </ul>
  
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};



