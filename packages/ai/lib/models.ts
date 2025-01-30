import { keys } from '../keys';
import OpenAI from 'openai';

export const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: keys().OPENAI_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': 'https://da-mr.com',
    'X-Title': 'https://da-mr.com',
  },
});
