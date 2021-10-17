import type { NextPage } from 'next';
import styles from '../styles/Header.module.css';
import axios from 'axios';

const Header: NextPage = () => {
  const handleClick = async () => {
    window.location.href =
      'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656541053&redirect_uri=https://proaca-next.vercel.app/&state=satakeyusuke&scope=profile%20openid';
  };
  return (
    <header className={styles.headerWrapper}>
      <h1>Hello World</h1>
      <div onClick={handleClick} className={styles.btn}>
        <a href="https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656541053&redirect_uri=https://proaca-next.vercel.app/&state=satakeyusuke&scope=profile%20openid">
          line login
        </a>
      </div>
    </header>
  );
};

export default Header;
