import { NextRequest, NextResponse } from 'next/server';
import { gptApi } from '@repo/ai';
import { captureException } from '@sentry/nextjs';

export const GET = async () => {
  let text: string | null = '';
  let response: string[] | undefined = [];
  try {
    text = await gptApi(
      'haiku about loading, output only haiku, each line should not contain more than 3 words, each line ending with ,',
    );
    response = text
      ?.replaceAll('\n', '')
      .split(',')
      .map((item) => item.trim())
      .filter((item) => item?.length > 1);
  } catch (e) {
    captureException(e);
  }

  return new Response(
    JSON.stringify({
      response,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

export const OPTIONS = async (request: NextRequest) => {
  return new NextResponse('', {
    status: 200,
  });
};
