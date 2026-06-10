import { Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { FormSection } from "@/components/sections/FormSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Suspense>
          <FormSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
