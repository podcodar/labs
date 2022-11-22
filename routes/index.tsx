import Layout from "~/layouts/Public.tsx";

export default function Home() {
  return (
  <Layout>
    <h1 class="text-6xl font-bold">
      PodCodar<span class="text-pink-600">Labs!</span>
    </h1>

    <div class="flex flex-wrap items-center gap-6 justify-around sm:w-full">
      {links.map((link) => (
        <a
          href={link.href}
          target={link.target}
          class="w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
        >
          <h3 class="text-2xl font-bold">{link.title} →</h3>
          <p class="mt-4 text-xl">{link.subtitle}</p>
        </a>
      ))}
    </div>
    </Layout>
  );
}

type Link = {
  href: string;
  title: string;
  subtitle: string;
  target?: string;
};

const links: Link[] = [
  {
    href: "https://podcodar.com/",
    title: "🌐 Nosso site",
    subtitle:
      "Que tal se juntar a comunidade PodCodar?",
    target: "_blank",
  },
  {
    href: "http://wiki.podcodar.com/",
    title: "📚 Estude",
    subtitle:
      "Aprenda mais sobre a comunidade, e estude através de nossas trilhas!",
    target: "_blank",
  },
  {
    href: "https://github.com/podcodar/exercises/",
    title: "💪🏽 Exercícios",
    subtitle: "Descubra e pratique com projetos de exemplos da comunidade.",
    target: "_blank",
  },
];
