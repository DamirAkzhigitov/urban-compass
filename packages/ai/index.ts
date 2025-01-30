import { openai } from './lib/models';

export async function gptApi(messages: string, assistant = '', json = false) {
  const options: any = {
    model: 'amazon/nova-micro-v1',
    messages: [
      { role: 'user', content: messages },
      ...(assistant
        ? [
            {
              role: 'assistant',
              content: assistant,
            },
          ]
        : []),
    ],
    max_tokens: 10000,
  };

  if (json) options.response_format = { type: 'json_object' };

  const completion = await openai.chat.completions.create(options as any);

  return completion.choices[0].message.content;
}
