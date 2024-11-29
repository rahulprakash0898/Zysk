import React from 'react';
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h3>Product</h3>
            <ul>
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions <span className={styles.new}>New</span></li>
              <li>Tutorials</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3>Company</h3>
            <ul>
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>News</li>
              <li>Media kit</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Events</li>
              <li>Help centre</li>
              <li>Tutorials</li>
              <li>Support</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3>Use cases</h3>
            <ul>
              <li>Startups</li>
              <li>Enterprise</li>
              <li>Government</li>
              <li>SaaS centre</li>
              <li>Marketplaces</li>
              <li>Ecommerce</li>
            </ul>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <h3>Social</h3>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>GitHub</li>
              <li>AngelList</li>
              <li>Dribbble</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;