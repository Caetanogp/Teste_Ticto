import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="w-full bg-neutral-950 py-10 text-white/60">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-2 px-5 text-center text-sm sm:px-8">
        <p>{siteConfig.name}</p>
        <p>© {new Date().getFullYear()} Ticto. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
