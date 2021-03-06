import { useState } from 'react';
import type { NextPage } from 'next';
import Layout from '../components/layout';
import styles from '../styles/Appointment.module.css';

let URL = 'http://localhost:3000/api/';

const Line: NextPage = () => {
  const [text, setText] = useState<string>('');
  const sendLine = async () => {
    console.log('🚀 ~ file: line.tsx ~ line 7 ~ URL', URL);
    try {
      const response = await fetch(`${URL}${text}`);
      const data = await response.json();
      console.log('🚀 ~ file: line.tsx ~ line 15 ~ sendLine ~ data', data);
    } catch (error) {
      console.log('🚀 ~ file: line.tsx ~ line 17 ~ sendLine ~ error', error);
    }
  };

  return (
    <Layout>
      <main className={styles.wrapper}>
        <div className={styles.formarea}>
          <h1 className={styles.title}>send Line</h1>
          <input
            type="text"
            className={styles.inputarea}
            placeholder="text"
            onChange={(e) => setText(e.target.value)}
          />
          <button className={styles.buttonarea} onClick={sendLine}>
            line送信
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default Line;
