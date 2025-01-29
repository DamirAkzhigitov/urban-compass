import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export const GET = (): Response => new Response('OK', { status: 200 });

export const OPTIONS = async (request: NextRequest) => {
  return new NextResponse('', {
    status: 200,
  });
};
