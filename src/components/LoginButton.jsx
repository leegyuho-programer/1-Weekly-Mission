import styles from '../styles/LoginButton.module.css';

function LoginButton({ text }) {
  return (
    <button type='button' className={styles.loginButton}>
      {text}
    </button>
  );
}

export default LoginButton;
