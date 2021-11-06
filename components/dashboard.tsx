import type { NextPage } from 'next';
import AppointmentCard from './appointmentCard';
import LineCard from './lineCard';
import styles from '../styles/Dashboard.module.css';
const Dashboard: NextPage = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.titleArea}>Info</h1>
      <section className={styles.cardArea}>
        <AppointmentCard />
        <LineCard />
      </section>
    </section>
  );
};

export default Dashboard;
