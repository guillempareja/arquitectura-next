import { ReactNode } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './layout.module.scss';
import classNames from 'classnames';
import Chatbot from '../chat-bot/chat-bot';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles['layout-container']}>
      <Header />
      <div className={classNames('page-container', styles['main-content'])}>
        {children}
        <div className={styles['chat-content']}>
          <Chatbot />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
