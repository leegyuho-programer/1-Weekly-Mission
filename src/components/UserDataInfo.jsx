import styles from '../styles/UserDataInfo.module.css';
import useAsync from './../hooks/useAsync';
import getUser from '../api/getUser';
import { useState, useEffect } from 'react';
import LoginButton from './LoginButton';

const UserDataInfo = () => {
  const [isLoading, , getUserAsync] = useAsync(getUser);
  const [userInfo, setUserInfo] = useState(null);
  const loadUserInfo = async () => {
    const userInfo = await getUserAsync({ id: 1 });
    setUserInfo(userInfo);
  };

  useEffect(() => {
    loadUserInfo();
  }, []);

  return isLoading ? (
    <span>Loading</span>
  ) : userInfo ? (
    <div className={styles.container}>
      <img
        className={styles.profileImage}
        src={userInfo.image_source}
        alt='프로필'
      />
      <span className={styles.profileEmail}>{userInfo.email}</span>
    </div>
  ) : (
    <LoginButton text='로그인' />
  );
};

export default UserDataInfo;
