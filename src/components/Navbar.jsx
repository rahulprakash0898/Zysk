import React from 'react';
import styles from './Navbar.module.css'; 

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoSection}>
        <img
          src="https://via.placeholder.com/30"
          alt="Logo"
          className={styles.logo}
        />
        <span className={styles.title}>Untitled UI</span>
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li className={styles.dropdown}>
          <a href="#products">Products ▼</a>
        </li>
        <li className={styles.dropdown}>
          <a href="#resources">Resources ▼</a>
        </li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
      <img
        src="https://via.placeholder.com/40"
        alt="Profile"
        className={styles.profileImg}
      />
    </nav>
  );
};

export default Navbar;

