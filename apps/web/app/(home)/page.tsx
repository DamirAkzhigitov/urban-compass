import { skills } from '@repo/cms/blocks/Skills';
import { experience } from '@repo/cms/blocks/Experience';
import { Feed } from '@repo/cms/components/feed';
import { showBetaFeature } from '@repo/feature-flags';
import { createMetadata } from '@repo/seo/metadata';
import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { Cases } from './components/cases';
import { Hero } from './components/hero';
import { Testimonials } from './components/testimonials';

const meta = {
  title: 'Damir Akzhigitov | Frontend Developer Portfolio',
  description:
    'Welcome to my portfolio—showcasing expertise in scalable frontend development, micro-frontend architectures, CI/CD automation, and cutting-edge technologies. Discover my projects, career journey, and contributions to modern web development.',
};

export const metadata: Metadata = createMetadata(meta);

const Home = async () => {
  const betaFeature = await showBetaFeature();
  const draft = await draftMode();

  return (
    <>
      {betaFeature && (
        <div className="w-full bg-black py-2 text-center text-white">
          Beta feature now available
        </div>
      )}
      <Hero />
      <Feed queries={[skills.postsQuery]} draft={draft.isEnabled}>
        {async ([data]) => {
          'use server';
          if (!data.personal.skills.items.length) {
            return null;
          }
          return <Cases skills={data.personal.skills.items} />;
        }}
      </Feed>
      <Feed queries={[experience.postsQuery]} draft={draft.isEnabled}>
        {async ([data]) => {
          'use server';

          if (!data.personal.experience.items.length) {
            return null;
          }

          return <Testimonials experience={data.personal.experience.items} />;
        }}
      </Feed>
    </>
  );
};

export default Home;
