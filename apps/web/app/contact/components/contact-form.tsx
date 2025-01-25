import { MessageForm } from '@/app/contact/components/message-form';
import { showContactBackForm } from '@repo/feature-flags';
import { Check } from 'lucide-react';
import Background from './background.webp';
import { SocialCard } from './social-card';

export const ContactForm = async () => {
  const contact = await showContactBackForm();

  return (
    <div className="w-full py-10 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-10">
          <div
            className="relative flex flex-col gap-6 overflow-hidden rounded-2xl bg-[-500px] bg-cover bg-opacity-70 bg-no-repeat p-5 min-[440px]:bg-center"
            style={{ backgroundImage: `url(${Background.src})` }}
          >
            <div className="z-10 flex w-full flex-col gap-6 rounded-2xl bg-white bg-opacity-85 p-5 sm:w-2/4 md:w-1/3 dark:bg-black dark:bg-opacity-75">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h4 className="max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl">
                    Let's Build Something Together!
                  </h4>
                  <p className="max-w-sm text-left text-lg text-muted-foreground leading-relaxed tracking-tight">
                    Welcome to my portfolio! As a passionate developer, I&apos;m
                    always open to discussing exciting projects and new
                    opportunities. You can reach me on LinkedIn or drop a
                    message via the contact form below — I&apos;ll get back to
                    you as soon as possible!
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-6 text-left">
                <Check className="mt-2 h-4 w-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>5+ years in development</p>
                  <p className="text-muted-foreground text-sm">
                    Building interfaces that not only look great but work even
                    better.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-6 text-left">
                <Check className="mt-2 h-4 w-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>A responsible approach to work</p>
                  <p className="text-muted-foreground text-sm">
                    Writing code I&apos;ll still be proud of years from now.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-6 text-left">
                <Check className="mt-2 h-4 w-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Always exploring new solutions</p>
                  <p className="text-muted-foreground text-sm">
                    Continuously learning, experimenting, and adopting new
                    technologies to stay ahead.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            <SocialCard />
            {contact ? <MessageForm /> : ''}
          </div>
        </div>
      </div>
    </div>
  );
};
