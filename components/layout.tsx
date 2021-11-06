import { useEffect } from 'react';
import type { NextPage } from 'next';
import { auth } from '../lib/firebase';
import { useAppDispatch } from '../app/hooks';
import { login, logout } from '../features/userSlice';
import Header from './header';
import styles from '../styles/Layout.module.css';
const Layout: NextPage = ({ children }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photoURL: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unSub();
    };
  }, [dispatch]);
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
