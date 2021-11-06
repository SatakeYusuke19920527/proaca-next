import { useState } from 'react';
import type { NextPage } from 'next';
import Layout from '../components/layout';
import styles from '../styles/Appointment.module.css';
const Appointment: NextPage = () => {
  const [name, setName] = useState<string>('');

  const handleAppoint = () => {
    const result = window.confirm('予約を確定しますか？');
    if (result) {
      // 予約処理
      console.log('🚀 ~ file: appointment.tsx ~ line 7 ~ name', name);
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
            placeholder="text"
            onChange={(e) => setName(e.target.value)}
          />
          <button className={styles.buttonarea} onClick={handleAppoint}>
            line送信
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default Appointment;
