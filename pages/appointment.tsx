import { useState } from 'react';
import type { NextPage } from 'next';
import Layout from '../components/layout';
import styles from '../styles/Appointment.module.css';
const Appointment: NextPage = () => {
  const [name, setName] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const handleAppoint = () => {
    const result = window.confirm('予約を確定しますか？');
    if (result) {
      // 予約処理
      console.log('🚀 ~ file: appointment.tsx ~ line 7 ~ name', name);
      console.log('🚀 ~ file: appointment.tsx ~ line 7 ~ date', date);
      console.log('🚀 ~ file: appointment.tsx ~ line 11 ~ comment', comment);
    }
  };

  return (
    <Layout>
      <main className={styles.wrapper}>
        <div className={styles.formarea}>
          <h1 className={styles.title}>お申し込み</h1>
          <input
            type="text"
            className={styles.inputarea}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="date"
            className={styles.inputarea}
            placeholder="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            className={styles.inputarea}
            placeholder="Comment"
            onChange={(e) => setComment(e.target.value)}
          />
          <button className={styles.buttonarea} onClick={handleAppoint}>
            予約確定
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default Appointment;
