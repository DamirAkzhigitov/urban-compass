import { database } from '@repo/database';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  const newPage = await database.page.create({
    data: {
      name: 'cron-temp',
    },
  });

  await database.page.delete({
    where: {
      id: newPage.id,
    },
  });

  return new Response('OK', { status: 200 });
};

export const OPTIONS = async (request: NextRequest) => {
  return new NextResponse('', {
    status: 200,
  });
};
