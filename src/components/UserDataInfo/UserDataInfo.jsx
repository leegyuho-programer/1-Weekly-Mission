import styles from './UserDataInfo.module.css';
import useAsync from '../../hooks/useAsync';
import getUser from '../../api/getUser';
import { useState, useEffect } from 'react';
import LoginButton from '../LoginButton/LoginButton';

const UserDataInfo = () => {
  const [isLoading, , getUserAsync] = useAsync(getUser);
  const [userInfo, setUserInfo] = useState(null);
  const loadUser = async () => {
    const userInfo = await getUserAsync({ userID: 1 });
    setUserInfo(userInfo);
  };

  useEffect(() => {
    loadUser();
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
      <div className={styles.profileEmail}>{userInfo.email}</div>
    </div>
  ) : (
    <LoginButton text='로그인' />
  );
};

export default UserDataInfo;
