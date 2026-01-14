import type { Route } from "./+types/home";
import { Header } from "~/components/landing/header";
import { Hero } from "~/components/landing/hero";
import { Features } from "~/components/landing/features";
import { Footer } from "~/components/landing/footer";
import fs from "fs/promises";
import path from "path";
import fm from "front-matter";

// Defina a interface para o conteúdo
interface LandingContent {
  header: {
    brand: string;
    cta_text: string;
    cta_link: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta_text: string;
    cta_link: string;
    image?: string;
  };
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  footer: {
    content: string;
  };
}

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Static CMS - Landing Page" },
    { name: "description", content: "Landing page personalizável" },
  ];
}

export async function loader() {
  const filePath = path.join(process.cwd(), "content", "landing.md");
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { attributes } = fm<LandingContent>(fileContent);
    return { content: attributes };
  } catch (error) {
    console.error("Erro ao carregar conteúdo da landing page:", error);
    return { content: null };
  }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { content } = loaderData;

  if (!content) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-muted-foreground">Conteúdo não encontrado. Configure a Landing Page no Admin.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header
        brand={content.header.brand}
        ctaText={content.header.cta_text}
        ctaLink={content.header.cta_link}
      />
      <main>
        <Hero
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          ctaText={content.hero.cta_text}
          ctaLink={content.hero.cta_link}
          image={content.hero.image}
        />
        <Features items={content.features} />
      </main>
      <Footer content={content.footer.content} />
    </div>
  );
}
