import { blog } from '@repo/cms';
import { Feed } from '@repo/cms/components/feed';
import { Button } from '@repo/design-system/components/ui/button';
import { MoveRight, PhoneCall } from 'lucide-react';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { UserHi } from '@/app/(home)/components/user-hi';

export const Hero = async () => {
  const draft = await draftMode();

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
          <div>
            <Feed queries={[blog.latestPostQuery]} draft={draft.isEnabled}>
              {/* biome-ignore lint/suspicious/useAwait: "Server Actions must be async" */}
              {async ([data]) => {
                'use server';

                return (
                  <Button
                    variant="secondary"
                    size="sm"
                    className="gap-4"
                    asChild
                  >
                    <Link
                      href={`/blog/${data.blog.posts.item?._slug}`}
                      style={{ color: 'black' }}
                    >
                      Read latest article <MoveRight className="h-4 w-4" />
                    </Link>
                  </Button>
                );
              }}
            </Feed>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="max-w-2xl text-center font-light text-5xl tracking-tighter md:text-7xl">
              Damir Akzhigitov
            </h1>
            <p className="max-w-2xl text-center text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl">
              Frontend Developer
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <Button size="lg" className="gap-4" variant="outline" asChild>
              <Link href="/contact">
                Get in touch <PhoneCall className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
