import { fragmentOn } from 'basehub';
import { basehub } from '../index';
import { imageFragment } from '../blocks/Shared';

const experienceFragment = fragmentOn('ExperienceItem', {
  companyName: true,
  position: true,
  location: true,
  dateRange: true,
  description: true,
  image: imageFragment,
});

export type ExperienceItem = fragmentOn.infer<typeof experienceFragment>;

export const experience = {
  postsQuery: fragmentOn('Query', {
    personal: {
      experience: {
        items: experienceFragment,
      },
    },
  }),
  getExperience: async (): Promise<ExperienceItem[]> => {
    const data = await basehub.query(experience.postsQuery);

    return data.personal.experience.items;
  },
};
