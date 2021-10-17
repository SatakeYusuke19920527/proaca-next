import type { NextPage } from 'next';
import Header from './header';
import styles from '../styles/Layout.module.css';
const Layout: NextPage = ({ children }) => {
  return (
    <section className={styles.wrapper}>
      <header className={styles.headerArea}>
        <Header />
      </header>
      <main className={styles.mainArea}>{children}</main>
    </section>
  );
};

export default Layout;
