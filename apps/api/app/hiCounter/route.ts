import { database } from '@repo/database';

export const GET = async () => {
  const response = await database.hiCounter.count();

  return new Response(JSON.stringify({ count: response }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const POST = async () => {
  await database.hiCounter.create({
    data: {
      lastUpdated: new Date(),
    },
  });

  const newCounter = await database.hiCounter.count();

  return new Response(JSON.stringify({ count: newCounter }), { status: 200 });
};
