'use client';

import type { SkillItem } from '@repo/cms';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@repo/design-system/components/ui/carousel';
import { useEffect, useState } from 'react';

export const Cases = ({ skills }: { skills: SkillItem[] }) => {
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
    }, 2000);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-left font-regular text-xl tracking-tighter md:text-5xl lg:max-w-xl">
            My Skills
          </h2>

          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {skills.map((skill, index) => (
                <CarouselItem
                  className="min-w-[130px] basis-1/2` lg:basis-1/6"
                  key={index}
                >
                  <div className="flex aspect-square flex-col items-center justify-center rounded-md bg-muted p-6">
                    <div
                      className="mb-3 inline h-12 w-12 fill-black dark:fill-white"
                      dangerouslySetInnerHTML={{ __html: skill.logo }}
                    />
                    <span className="text-sm">{skill.name}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
