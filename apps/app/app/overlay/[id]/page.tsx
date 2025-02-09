'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useFetch from '@/app/hooks/api/useFetch';
import { env } from '@/env';

const OverlayPage = () => {
  const params = useParams();
  const { id } = params;
  const { data, execute } = useFetch<Record<string, any>>();

  useEffect(() => {
    execute(`${env.NEXT_PUBLIC_API_URL}/overlay/${id}`);
  }, []);

  return (
    <>
      <h1>My Overlay Here</h1>
    </>
  );
};

export default OverlayPage;
