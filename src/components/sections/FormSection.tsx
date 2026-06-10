import { YayFormsEmbed } from "@/components/YayFormsEmbed";
import { siteConfig } from "@/config/site";

export function FormSection() {
  return (
    <section
      id={siteConfig.formAnchorId}
      aria-labelledby="form-heading"
      className="w-full bg-white py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <div className="mx-auto mb-8 max-w-xl text-center">
          <h2
            id="form-heading"
            className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl"
          >
            Garanta sua vaga
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Preencha seus dados para se inscrever no {siteConfig.name}.
          </p>
        </div>

        <YayFormsEmbed className="mx-auto w-full max-w-2xl rounded-2xl" />
      </div>
    </section>
  );
}
