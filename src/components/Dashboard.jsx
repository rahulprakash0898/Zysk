import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
    
      <aside className={styles.sidebar}>
        <ul>
          <li className={styles.icon}><span>📁</span></li>
          <li className={styles.icon}><span>📊</span></li>
          <li className={styles.icon}><span>📅</span></li>
        </ul>
      </aside>

      
      <main className={styles.mainContent}>
        
        <header className={styles.header}>
          <h1>Stats for Olivia Rhye</h1>
          <div className={styles.actions}>
            <button className={styles.messageButton}>Messages</button>
            <button className={styles.editButton}>Edit</button>
          </div>
        </header>

        
        <section className={styles.profileStats}>
          <h2>Profile views</h2>
          <div className={styles.chart}>
            
            <div className={styles.chartPlaceholder}>[Chart Placeholder]</div>
          </div>
          <div className={styles.filters}>
            <button>12 months</button>
            <button>30 days</button>
            <button>7 days</button>
          </div>
        </section>

        
        <section className={styles.stats}>
          <div className={styles.card}>
            <h3>Biggest fans</h3>
            <ul>
              <li>
                <span>📸 Phoenix Baker</span>
                <span>24 likes</span>
              </li>
              <li>
                <span>📸 Lana Steiner</span>
                <span>22 likes</span>
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Favorite designers</h3>
            <ul>
              <li>
                <span>🎨 Andi Lane</span>
                <span>46 likes</span>
              </li>
              <li>
                <span>🎨 Kate Morrison</span>
                <span>40 likes</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

     
      <aside className={styles.chat}>
        <h3>Anita Cruz <span className={styles.online}>Online</span></h3>
        <div className={styles.messages}>
          <div className={styles.messageReceived}>
            <p>Dashboard Design Brief.pdf</p>
          </div>
          <div className={styles.messageSent}>
            <p>I’ll review and get back to you tomorrow. Is that okay?</p>
          </div>
        </div>
        <div className={styles.messageInput}>
          <input type="text" placeholder="Type a message" />
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
