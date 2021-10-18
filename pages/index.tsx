import { useEffect } from 'react';
import type { NextPage } from 'next';
import { auth } from '../lib/firebase';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { login, logout, selectUser } from '../features/userSlice';

import Layout from '../components/layout';
import Dashboard from '../components/dashboard';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
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
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default Home;
