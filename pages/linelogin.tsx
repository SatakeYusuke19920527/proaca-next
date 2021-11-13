import { useState } from 'react';
import type { NextPage } from 'next';
import Layout from '../components/layout';
import styles from '../styles/Appointment.module.css';

let URL =
  'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656017678&redirect_uri=http://localhost:3000/&state=12345abcde&scope=profile%20openid%20email';

const Line: NextPage = () => {
  const sendLine = async () => {
    console.log('🚀 ~ file: line.tsx ~ line 7 ~ URL', URL);
    try {
      const response = await fetch(`${URL}hello`);
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
          <h1 className={styles.title}>line login</h1>
          <a href={URL}>line login</a>
          <button className={styles.buttonarea} onClick={sendLine}>
            line送信
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default Line;
