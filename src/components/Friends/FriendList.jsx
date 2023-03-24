import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './FriendList.module.css';
import React from 'react';


function FriendList({ friends }) {
     return (
    <section className={styles.friends_main}>
      <ul className={styles.friends__list}>
        {friends.map(({ id, avatar, name, isOnline }) => {
          return (
            <li key={id} className={styles.friends_item}>
              <span
                className={clsx({
                  'css.friends_on': isOnline,
                  'css .friends_off': !isOnline,
                })}
              ></span>
              <img
                className={styles.friends_avatar}
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className={styles.friends_name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;