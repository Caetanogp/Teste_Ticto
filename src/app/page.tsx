export const dynamic = "force-dynamic";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Speakers } from "@/components/sections/Speakers";
import { Audience } from "@/components/sections/Audience";
import { Testimonials } from "@/components/sections/Testimonials";
import { FormSection } from "@/components/sections/FormSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Speakers />
        <Audience />
        <Testimonials />
        <FormSection />
      </main>
      <Footer />
    </>
  );
}
