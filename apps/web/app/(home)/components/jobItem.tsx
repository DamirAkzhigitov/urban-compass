import { CarouselItem } from '@repo/design-system/components/ui/carousel';
import { ExperienceItem } from '@repo/cms';
import Image from 'next/image';

export const JobItem = ({ value }: { value: ExperienceItem }) => {
  return (
    <CarouselItem className="lg:basis-1/2">
      <div className="flex aspect-video h-full flex-col justify-between rounded-md bg-muted p-6 lg:col-span-2">
        {value.image?.url ? (
          <Image
            src={value.image.url}
            width={50}
            height={50}
            alt={value.companyName}
          />
        ) : (
          <div></div>
        )}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h2 className="text-xl tracking-tight font-light">
              {value.position}
            </h2>
            <h3 className="font-light">{value.companyName}</h3>
            <h4>{value.dateRange}</h4>
            <p className="text-base text-muted-foreground mt-4">
              {value.description}
            </p>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};
