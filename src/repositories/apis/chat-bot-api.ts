import { GetHelloMessageResponse } from '@/types/achat-bot-api.types';
import { ChatBotRepository } from '../interfaces/chat-bot-repository';
import api from './api';

class ChatRepositoryApi implements ChatBotRepository {
  async getHelloMessage() {
    const response = await api.get<GetHelloMessageResponse>('/api/hello');
    return response.data;
  }
}

const chatRepositoryApiInstance = new ChatRepositoryApi();
export default chatRepositoryApiInstance;
