import { Browser as Logtail } from '@logtail/js';

export const log = process.env.LOGTAIL_SOURCE_TOKEN
  ? new Logtail(process.env.LOGTAIL_SOURCE_TOKEN)
  : console;
