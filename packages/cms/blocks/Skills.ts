import { fragmentOn } from 'basehub';
import { basehub } from '../index';

const skillFragment = fragmentOn('SkillsItem', {
  name: true,
  logo: true,
});

export type SkillItem = fragmentOn.infer<typeof skillFragment>;

export const skills = {
  postsQuery: fragmentOn('Query', {
    personal: {
      skills: {
        items: skillFragment,
      },
    },
  }),
  getSkills: async (): Promise<SkillItem[]> => {
    const data = await basehub.query(skills.postsQuery);

    return data.personal.skills.items;
  },
};
