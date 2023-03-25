import PropTypes from 'prop-types';
import React from 'react';
import styles from './Statistics.module.css';

function randColor() {
  const r = () => Math.floor(Math.random() * 256);
  const colorBack = 'rgb(' + r() + ',' + r() + ',' + r() + ',' + 0.3 + ')';
  return colorBack;
}

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics_main}>
      <h2 className={styles.statistics_title}>
        {title && <h2>{title}</h2>}

        <ul className={styles.statistics_list}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                className={styles.statistics_item}
                key={id}
                style={{ backgroundColor: randColor() }}
              >
                <span className={styles.statistics_label}>{label}</span>
                <span className={styles.statistics_percentage}>
                  {percentage}
                </span>
              </li>
            );
          })}
        </ul>
      </h2>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.string,
};

export default Statistics;
