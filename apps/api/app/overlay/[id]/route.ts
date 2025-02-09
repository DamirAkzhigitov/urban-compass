import { NextRequest, NextResponse } from 'next/server';
import { overlays } from '@/app/overlay/route';

export const GET = (request: NextRequest): Response => {
  const url = new URL(request.url);
  const id = url.pathname.replace('/overlay/', '');
  const config = overlays.get(id);

  console.log('config: ', config);

  if (!config) {
    return new Response('Not Found', { status: 404 });
  }

  return new Response(JSON.stringify({ config }), { status: 200 });
};

export const OPTIONS = async (request: NextRequest) => {
  return new NextResponse('', {
    status: 200,
  });
};
