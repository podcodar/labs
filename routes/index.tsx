export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md text-center">
      <h1 class="text-xl">
        👩🏾‍🔬 PodCodar.<span class="font-bold">labs</span>
      </h1>

      <div class="flex gap-4 my-4 justify-center">
        {projectLinks.map((link) => (
          <a
            href={link.href}
            class="
              text-blue-300 border-1 border-blue-200 py-2 px-8 rounded-full
              hover:underline hover:bg-blue-50 hover:shadow
            "
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}

type Link = {
  name: string;
  href: string;
};

const projectLinks: Link[] = [
  { name: "Colinha", href: "/colinha" },
  { name: "Counter", href: "/counter" },
];
