import { Sender } from '../enums/sender.enum';

export type Message = {
  sender: Sender;
  content: string;
};

export type ChatBotStore = {
  messages: Message[];
  input: string;
  isProcessing: boolean;
  setInput: (input: string) => void;
  setMessage: (sender: Sender, content: string, isComplete?: boolean) => void;
};
