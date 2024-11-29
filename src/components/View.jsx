import React from 'react';
import styles from './View.module.css';

const View = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cutting-edge features for advanced analytics</h1>
      <p className={styles.subtitle}>
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className={styles.stats}>
        <div className={styles['stats-card']}>
          <div className={styles['stats-card-header']}>
            <h2>Stats for Olivia Rhye</h2>
            <div className={styles['stats-card-header-buttons']}>
              <button className={styles['stats-card-header-button']}>Messages</button>
              <button className={styles['stats-card-header-button']}>Edit</button>
            </div>
          </div>
          <div className={styles['stats-card-body']}>
            <div className={styles['stats-card-body-chart']}>
              
            </div>
            <div className={styles['stats-card-body-profile-views']}>
              <h3>Profile views</h3>
              <div className={styles['stats-card-body-profile-views-buttons']}>
                <button className={styles['stats-card-body-profile-views-button']}>12 months</button>
                <button className={styles['stats-card-body-profile-views-button']}>30 days</button>
                <button className={styles['stats-card-body-profile-views-button']}>7 days</button>
              </div>
            </div>
            <div className={styles['stats-card-body-biggest-fans']}>
              <h3>Biggest fans</h3>
              <ul className={styles['stats-card-body-biggest-fans-list']}>
                <li className={styles['stats-card-body-biggest-fans-list-item']}>
                  <div className={styles['stats-card-body-biggest-fans-list-item-avatar']}>
                   
                  </div>
                  <div className={styles['stats-card-body-biggest-fans-list-item-info']}>
                    <p className={styles['stats-card-body-biggest-fans-list-item-info-name']}>Phoenix Baker</p>
                    <p className={styles['stats-card-body-biggest-fans-list-item-info-role']}>Marketing Lead</p>
                  </div>
                </li>
                <li className={styles['stats-card-body-biggest-fans-list-item']}>
                  <div className={styles['stats-card-body-biggest-fans-list-item-avatar']}>
                    
                  </div>
                  <div className={styles['stats-card-body-biggest-fans-list-item-info']}>
                    <p className={styles['stats-card-body-biggest-fans-list-item-info-name']}>Jordan Lee</p>
                    <p className={styles['stats-card-body-biggest-fans-list-item-info-role']}>Design Lead</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
