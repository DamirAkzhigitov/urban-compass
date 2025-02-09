import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { env } from '@/env';

export const overlays = new Map();

export const POST = async (request: NextRequest) => {
  const id = randomUUID();
  const config = request.body;

  overlays.set(id, config);

  console.log('overlays');

  const url = `${env.NEXT_PUBLIC_APP_URL}/overlay/${id}`;

  return new Response(JSON.stringify({ url }), { status: 200 });
};

export const OPTIONS = async (request: NextRequest) => {
  return new NextResponse('', {
    status: 200,
  });
};
