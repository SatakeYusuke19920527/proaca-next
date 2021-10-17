import type { NextPage } from 'next';
import Layout from '../components/layout';
import StCard from '../components/stCard';
import styles from '../styles/Dashboard.module.css';
const Dashboard: NextPage = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.titleArea}>Info</h1>
      <section className={styles.cardArea}>
        <StCard />
        <StCard />
        <StCard />
      </section>
    </section>
  );
};

export default Dashboard;
