import type { NextPage } from 'next';
import styles from '../styles/Header.module.css';
import { googleSignIn, googleSignOut } from '../lib/firebase';
import { useAppSelector } from '../app/hooks';
import { selectUser } from '../features/userSlice';
import Avatar from '@mui/material/Avatar';
const Header: NextPage = () => {
  const userInfo = useAppSelector(selectUser);
  const handleLogin = async () => {
    await googleSignIn();
  };
  const handleLogout = async () => {
    await googleSignOut();
  };
  return (
    <header className={styles.headerWrapper}>
      <h1>Hello World</h1>
      {userInfo.uid !== '' ? (
        <div className={styles.avatarArea}>
          <Avatar
            onClick={handleLogout}
            src={userInfo.photoURL}
            alt="userProfileAvatar"
          />
        </div>
      ) : (
        <div onClick={handleLogin} className={styles.btn}>
          login
        </div>
      )}
    </header>
  );
};

export default Header;
