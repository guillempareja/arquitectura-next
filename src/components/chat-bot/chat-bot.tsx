import { useEffect } from 'react';
import styles from './chat-bot.module.scss';
import ChatRepositoryApi from '@/repositories/apis/chat-bot-api';

const Chatbot = () => {
  useEffect(() => {
    const getHello = async () => {
      const response = await ChatRepositoryApi.getHelloMessage();
      console.log(response);
    };

    getHello();
  }, []);

  return (
    <div className={styles['chat-container']}>
      <h3>CHAT!</h3>
    </div>
  );
};

export default Chatbot;
