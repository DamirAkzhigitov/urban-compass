'use client';

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
} from '@repo/design-system/components/ui/carousel';
import { useEffect, useState } from 'react';
import { ExperienceItem } from '@repo/cms';
import { JobItem } from '@/app/(home)/components/jobItem';

export const Testimonials = ({
  experience,
}: {
  experience: ExperienceItem[];
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 5000);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-left font-regular text-3xl tracking-tighter md:text-5xl lg:max-w-xl">
            My Work Experience
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {experience.map((item, index) => {
                return <JobItem value={item} key={index} />;
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
