import React from 'react';
import styles from './Last.module.css'; 

const Last = () => 
{
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <img src="/logo.png" alt="Untitled UI" className={styles.logo} />
            <p className={styles.brandName}>Untitled UI</p>
          </div>
          <div className={styles.col}>
            <p className={styles.copyright}>© 2023 Untitled UI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Last;
