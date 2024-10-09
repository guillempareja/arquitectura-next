import { GetHelloMessageResponse } from '@/types/api-chat-bot.types';
import ApiChatRepository from '@/repositories/apis/api-chat-bot';

export async function getHelloMessage(): Promise<GetHelloMessageResponse> {
  return await ApiChatRepository.getHelloMessage();
}
