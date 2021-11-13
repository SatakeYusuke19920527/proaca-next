import type { NextPage } from 'next';
import liff from '@line/liff';
import Layout from '../components/layout';
import styles from '../styles/Appointment.module.css';

const Line: NextPage = () => {
  const liffFunc = async () => {
    liff
      .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID as string }) // LIFF IDをセットする
      .then(() => {
        if (!liff.isLoggedIn()) {
          console.log('test 1 =======');
          liff.login({}); // ログインしていなければ最初にログインする
        } else if (liff.isInClient()) {
          console.log('test 2 =======');
          // LIFFので動いているのであれば
          liff
            .sendMessages([
              {
                // メッセージを送信する
                type: 'text',
                text: "You've successfully sent a message! Hooray!",
              },
            ])
            .then(function () {
              console.log('test 3 =======');
              window.alert('Message sent');
            })
            .catch(function (error) {
              console.log('test 4 =======');
              window.alert('Error sending message: ' + error);
            });
        }
      });
  };

  return (
    <Layout>
      <main className={styles.wrapper}>
        <div className={styles.formarea}>
          <h1 className={styles.title}>line login</h1>
          <button className={styles.buttonarea} onClick={liffFunc}>
            line login
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default Line;
