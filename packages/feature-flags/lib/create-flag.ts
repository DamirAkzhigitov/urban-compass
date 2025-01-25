import { analytics } from '@repo/analytics/posthog/server';
import { auth } from '@repo/auth/server';
import { flag } from '@vercel/flags/next';

export const createFlag = (key: string, defaultValue = false) =>
  flag({
    key,
    defaultValue,
    async decide() {
      const { userId } = await auth();

      if (!userId) {
        return this.defaultValue as boolean;
      }

      const isEnabled = await analytics.isFeatureEnabled(key, userId);

      return isEnabled ?? (this.defaultValue as boolean);
    },
  });
