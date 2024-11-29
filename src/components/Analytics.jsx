import React from 'react';
import styles from './Analytics.module.css';

const Analytics = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Analytics that feels like it's from the future</h2>
      <p className={styles.description}>
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <i className="fa fa-bell"></i>
          </div>
          <h3 className={styles.featureTitle}>Share team inboxes</h3>
          <p className={styles.featureDescription}>
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <i className="fa fa-bolt"></i>
          </div>
          <h3 className={styles.featureTitle}>Deliver instant answers</h3>
          <p className={styles.featureDescription}>
            An all-in-one customer service platform that helps you balance everything your customers need to be happy.
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <i className="fa fa-file-image-o"></i>
          </div>
          <h3 className={styles.featureTitle}>Manage your team with reports</h3>
          <p className={styles.featureDescription}>
            Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <i className="fa fa-comments"></i>
          </div>
          <h3 className={styles.featureTitle}>Connect with customers</h3>
          <p className={styles.featureDescription}>
            Solve a problem or close a sale directly from your dashboard. Our platform helps you create and maintain lasting customer relationships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
