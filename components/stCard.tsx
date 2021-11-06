import type { NextPage } from 'next';
import styles from '../styles/StCard.module.css';
const stCard = ({
  children,
  onClick,
}: {
  children: any;
  onClick: () => void;
}) => {
  return (
    <header onClick={onClick} className={styles.cardWrapper}>
      {children}
    </header>
  );
};

export default stCard;
