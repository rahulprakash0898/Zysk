import React from 'react';
import styles from './Delivery.module.css';

const Delivery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <span>2</span>
        </div>
        <h3 className={styles.cardTitle}>Share team inboxes</h3>
        <p className={styles.cardDescription}>
          Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
        </p>
        <a href="#" className={styles.learnMore}>Learn more →</a>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}>
          <span>4</span>
        </div>
        <h3 className={styles.cardTitle}>Deliver instant answers</h3>
        <p className={styles.cardDescription}>
          An all-in-one customer service platform that helps you balance everything your customers need to be happy.
        </p>
        <a href="#" className={styles.learnMore}>Learn more →</a>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}>
          <span>
            <img src="https://www.untitled.us/static/media/icon-reports.98c2f310.svg" alt="report icon" />
          </span>
        </div>
        <h3 className={styles.cardTitle}>Manage your team with reports</h3>
        <p className={styles.cardDescription}>
          Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
        </p>
        <a href="#" className={styles.learnMore}>Learn more →</a>
      </div>
    </div>
  );
}

export default Delivery;
