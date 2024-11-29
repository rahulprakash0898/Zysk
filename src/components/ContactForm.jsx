import React from 'react';
import styles from './ContactForm.module.css'; // Import the CSS module

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.profilePics}>
          {/* Replace with your actual image URLs */}
          <img src="https://placehold.co/100x100" alt="Profile 1" />
          <img src="https://placehold.co/100x100" alt="Profile 2" />
          <img src="https://placehold.co/100x100" alt="Profile 3" />
        </div>
        <h1>Still have questions?</h1>
        <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
      </div>
      <div className={styles.button}>
        <button>Get in touch</button>
      </div>
    </div>
  );
};

export default ContactForm;
