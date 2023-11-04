import facebookImage from '../assets/images/icons/facebook.png';
import twitterImage from '../assets/images/icons/twitter.png';
import youtubeImage from '../assets/images/icons/youtube.png';
import instagramImage from '../assets/images/icons/instagram.png';
import styles from '../styles/Footer.module.css';

const socialLinks = [
  {
    icon: facebookImage,
    alt: '페이스북 아이콘',
    url: 'https://www.facebook.com/',
    target: '_blank',
  },
  {
    icon: twitterImage,
    alt: '트위터 아이콘',
    url: 'https://twitter.com/',
    target: '_blank',
  },
  {
    icon: youtubeImage,
    alt: '유튜브 아이콘',
    url: 'https://www.youtube.com',
    target: '_blank',
  },
  {
    icon: instagramImage,
    alt: '인스타그램 아이콘',
    url: 'https://www.instagram.com/',
    target: '_blank',
  },
];

function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.copyright}>©codeit - 2023</div>
        <div className={styles.information}>
          <a href='none'>Privacy Policy</a>
          <a href='none'>FAQ</a>
        </div>
        <div className={styles.sns}>
          {socialLinks.map((link) => {
            return (
              <a icon={link.icon} href={link.url}>
                <img src={link.icon} alt={link.alt} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
