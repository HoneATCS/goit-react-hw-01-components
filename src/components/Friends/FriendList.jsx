import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendList.module.css';

function FriendList({ friends }) {
    console.log(friends);
     return (
    <section className={css.friends_main}>
      <ul className={css.friends__list}>
        {friends.map(({ id, avatar, name, isOnline }) => {
          // console.log(clsx({ className: false }));
          console.log(id);
          return (
            <li key={id} className={css.friends_item}>
              <span
                className={clsx({
                  'css.friends_on': isOnline,
                  'css .friends_off': !isOnline,
                })}
              ></span>
              <img
                className={css.friends_avatar}
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className={css.friends_name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
FriendList.propTypes = {
  // id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;