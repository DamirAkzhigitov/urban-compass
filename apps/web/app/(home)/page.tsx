import { showBetaFeature } from "@repo/feature-flags";
import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { Cases } from "./components/cases";
import { CTA } from "./components/cta";
import { FAQ } from "./components/faq";
import { Features } from "./components/features";
import { Hero } from "./components/hero";
import { Stats } from "./components/stats";
import { Testimonials } from "./components/testimonials";
import { Feed } from "@repo/cms/components/feed";
import { personal } from "@repo/cms";
import { draftMode } from "next/headers";

const meta = {
  title:
    "DA-MR | AI-Powered Tools & Automation for Bots, Helpers, and Seamless Deployments",
  description:
    "Explore DA-MR, your hub for AI-driven solutions, automated deployments, intelligent bots, and digital helpers. Stay updated with the latest releases and transform workflows effortlessly.",
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
      <Feed queries={[personal.postsQuery]} draft={draft.isEnabled}>
        {async ([data]) => {
          "use server";
          if (!data.personal.skills.items.length) {
            return null;
          }
          return <Cases skills={data.personal.skills.items} />;
        }}
      </Feed>
      <Features />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;
