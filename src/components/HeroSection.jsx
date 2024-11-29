import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.featureBanner}>
        <span className={styles.newFeature}>New feature</span>
        <a href="#dashboard" className={styles.dashboardLink}>
          Check out the team dashboard →
        </a>
      </div>
      <h1 className={styles.title}>Beautiful analytics to grow smarter</h1>
      <p className={styles.description}>
        Powerful, self-serve product and growth analytics to help you convert, engage,
        and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className={styles.buttonGroup}>
        <button className={`${styles.button} ${styles.demoButton}`}>
          <span>🎥</span> Demo
        </button>
        <button className={`${styles.button} ${styles.signupButton}`}>Sign up</button>
      </div>
    </section>
  );
};

export default HeroSection;
