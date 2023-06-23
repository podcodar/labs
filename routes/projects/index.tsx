import Layout from "~/layouts/Public.tsx";
import { ButtonLink } from "~/components/Button.tsx";

export default function Home() {
  return (
    <Layout>
      <h1 class="text-6xl font-bold">
        PodCodar <span class="text-pink-600">Projects!</span>
      </h1>

      <div class="flex gap-4 my-4 justify-center">
        {projectLinks.map((link) => (
          <ButtonLink href={link.href}>
            {link.name}
          </ButtonLink>
        ))}
      </div>
    </Layout>
  );
}

type Link = {
  name: string;
  href: string;
};

const projectLinks: Link[] = [
  { name: "Counter", href: "/projects/counter" },
  { name: "Mock Interview", href: "/projects/interviews" },
];
