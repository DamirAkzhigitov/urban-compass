import { env } from '@/env';
import { captureException } from '@sentry/nextjs';

export const checkCounter = async () => {
  try {
    const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/hiCounter`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });
    const result = (await response.json()) as { count: number };

    return result.count;
  } catch (e) {
    captureException(e);
  }
};
export const sendCounter = async () => {
  try {
    await fetch(`${env.NEXT_PUBLIC_API_URL}/hiCounter`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    });
  } catch (e) {
    captureException(e);
  }
};
