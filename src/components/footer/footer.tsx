import classNames from 'classnames';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles['footer-container']}>
      <footer className={classNames('page-container', styles.footer)}>
        <p>© 2024 Mi Aplicación</p>
      </footer>
    </div>
  );
};

export default Footer;
