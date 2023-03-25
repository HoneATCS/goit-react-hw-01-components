import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({ avatar, username, tag, location, stats }) {
  return (
    <div className={styles.profile_main}>
      <div className={styles.profile_description}>
        <img src={avatar} alt="User avatar" className={styles.profile_avatar} />
        <p className={styles.profile_username}>{username}</p>
        <p className={styles.profile_tag}>@{tag}</p>
        <p className={styles.profile_location}>{location}</p>
      </div>
      <ul className={styles.profile_stats}>
        <li>
          <span className={styles.profile_label}>Followers </span>
          <span className={styles.profile_quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.profile_label}>Views </span>
          <span className={styles.profile_quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.profile_label}>Likes </span>
          <span className={styles.profile_quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
