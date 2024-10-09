import { GetHelloMessageResponse } from '@/types/achat-bot-api.types';

export interface ChatBotRepository {
  getHelloMessage(): Promise<GetHelloMessageResponse>;
}
