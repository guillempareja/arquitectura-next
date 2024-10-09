import classNames from 'classnames';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles['header-container']}>
      <header className={classNames('page-container', styles.header)}>
        <h1>Header Genérico</h1>
      </header>
    </div>
  );
};

export default Header;
