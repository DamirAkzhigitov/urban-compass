'use client';

import { env } from '@/env';
import { delay } from '@/utils';
import { useEffect, useState } from 'react';
import { Button } from '@repo/design-system/components/ui/button';
import { Loader2, Loader } from 'lucide-react';

import useFetch from '@/app/hooks/api/useFetch';

interface Counter {
  count: number;
}

export const UserHi = () => {
  const { data, loading, execute: fetchCounter } = useFetch<Counter>();
  const { execute: sendCounter } = useFetch<Counter>();
  const {
    data: haiku,
    loading: haikuLoading,
    execute: getHaiku,
  } = useFetch<{ response: string[] }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusText, setStatusText] = useState('Say Hi!');

  const onClickHi = async () => {
    if (isLoading || !haiku?.response.length) return;

    setIsLoading(true);

    await sendCounter(`${env.NEXT_PUBLIC_API_URL}/hiCounter`, {
      method: 'POST',
    });

    for (let i = 0; i < haiku.response.length; i++) {
      setStatusText(haiku.response[i]);
      await delay(1500);
    }

    setIsLoading(false);
    setStatusText('Say Hi!');
    await fetchCounter(`${env.NEXT_PUBLIC_API_URL}/hiCounter`);
    await getHaiku(`${env.NEXT_PUBLIC_API_URL}/ai/haiku`);
  };

  useEffect(() => {
    fetchCounter(`${env.NEXT_PUBLIC_API_URL}/hiCounter`);
    getHaiku(`${env.NEXT_PUBLIC_API_URL}/ai/haiku`);
  }, []);

  return (
    <div className="flex flex-row items-center gap-2 w-64">
      <Button
        className="w-ful flex-auto"
        size="lg"
        onClick={onClickHi}
        disabled={isLoading}
      >
        {statusText}
      </Button>

      <p className="animate-pulse flex items-center text-xs md:text-sm h-10 border rounded-md p-2 overflow-hidden font-bold min-w-10 justify-center">
        {loading ? <Loader className="animate-spin w-5 h-5" /> : data?.count}
      </p>
    </div>
  );
};
