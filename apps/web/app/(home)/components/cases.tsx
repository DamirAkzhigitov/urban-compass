"use client";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@repo/design-system/components/ui/carousel";
import { useEffect, useState } from "react";
import { SkillItem } from "@repo/cms";

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
    }, 1000);
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
                <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                  <div className="flex flex-col aspect-square items-center justify-center rounded-md bg-muted p-6">
                    <div
                      className="inline h-12 w-12 mb-3"
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
