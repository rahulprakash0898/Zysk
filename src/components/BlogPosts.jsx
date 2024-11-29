import React from 'react';
import styles from './BlogPostCard.module.css'; // Import the CSS module

function BlogPostCard({ title, description, author, authorImage, date, category, link }) {
  return (
    <div className={styles.blogPostCard}>
      <div className={styles.blogPostCardImage}>
        {/* Add an image here */}
      </div>
      <div className={styles.blogPostCardContent}>
        <h3 className={styles.blogPostCardTitle}>{title}</h3>
        <p className={styles.blogPostCardDescription}>{description}</p>
        <div className={styles.blogPostCardAuthor}>
          <img
            src={authorImage}
            alt={author}
            className={styles.blogPostCardAuthorImage}
          />
          <div className={styles.blogPostCardAuthorInfo}>
            <span className={styles.blogPostCardAuthorName}>{author}</span>
            <span className={styles.blogPostCardAuthorDate}>{date}</span>
          </div>
        </div>
        <div className={styles.blogPostCardCategory}>{category}</div>
        <a href={link} className={styles.blogPostCardLink}>
          Read More
        </a>
      </div>
    </div>
  );
}

function BlogPosts() {
  const blogPosts = [
    {
      title: 'UX review presentations',
      description:
        'How do you create compelling presentations that wow your colleagues and impress your managers?',
      author: 'Olivia Rhye',
      authorImage: 'https://placehold.co/60x60', // Replace with the actual image URL
      date: '20 Jan 2024',
      category: 'Design',
      link: '#',
    },
    {
      title: 'Migrating to Linear 101',
      description:
        'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
      author: 'Phoenix Baker',
      authorImage: 'https://placehold.co/60x60', // Replace with the actual image URL
      date: '19 Jan 2024',
      category: 'Product',
      link: '#',
    },
    {
      title: 'The future of AI and machine learning',
      description:
        'Artificial intelligence is revolutionizing many industries. Learn about the latest trends and applications.',
      author: 'Alex Smith',
      authorImage: 'https://placehold.co/60x60', // Replace with the actual image URL
      date: '18 Jan 2024',
      category: 'Tech',
      link: '#',
    },
  ];

  return (
    <div className={styles.blogPosts}>
      {blogPosts.map((post, index) => (
        <BlogPostCard key={index} {...post} />
      ))}
    </div>
  );
}

export default BlogPosts;
