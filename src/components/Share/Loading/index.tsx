import React from 'react';
import styles from './Loading.module.css';

interface LoadingProps {
  message: string;
}

const Loading: React.FC<LoadingProps> = ({ message }) => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      {message && <p className={styles.message}>...{message}</p>}
    </div>
  );
};

export default Loading;