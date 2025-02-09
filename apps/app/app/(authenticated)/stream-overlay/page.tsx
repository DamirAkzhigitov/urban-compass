'use client';
import { env } from '@/env';
import { Button } from '@repo/design-system/components/ui/button';
import useFetch from '@/app/hooks/api/useFetch';

type ComponentType = 'text' | 'image' | 'timer';

export default function Page() {
  const { data, execute } = useFetch<{ url: string }>();

  const onAddComponent = (component: ComponentType) => {
    console.log('create component', component);
  };

  const onReady = async () => {
    console.log('onReady, link', `${env.NEXT_PUBLIC_API_URL}/overlay`);
    await execute(`${env.NEXT_PUBLIC_API_URL}/overlay`, {
      method: 'POST',
      body: JSON.stringify({
        id: Date.now(),
        type: 'test',
        content: 'test',
        x: 100,
        y: 100,
      }),
    });
  };

  return (
    <div className={'p-5'}>
      <h1> Overlay dashboard </h1>
      <div>Your secret link: {data?.url}</div>
      <section>
        <div className="toolbar space-x-2">
          <Button onClick={() => onAddComponent('text')}>Add text</Button>
          <Button onClick={() => onAddComponent('image')}>Add Image</Button>
          <Button onClick={() => onAddComponent('timer')}>Add Timer</Button>
          <Button onClick={onReady}>Ready</Button>
        </div>
      </section>
    </div>
  );
}
