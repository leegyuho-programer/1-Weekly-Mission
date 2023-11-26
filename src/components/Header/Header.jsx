import styles from './Header.module.css';
import logoImage from '../../assets/images/logo/logo.png';
import UserDataInfo from '../UserDataInfo/UserDataInfo';

function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href='./'>
            <img src={logoImage} alt='LinkBrary logo' />
          </a>
        </div>
        <UserDataInfo />
      </div>
    </header>
  );
}

export default Header;
