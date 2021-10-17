import type { NextPage } from 'next';
import styles from '../styles/StCard.module.css';
const stCard: NextPage = () => {
  return (
    <header className={styles.cardWrapper}>
      <h1>Hello World</h1>
    </header>
  );
};

export default stCard;
