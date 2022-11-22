import { Head } from "$fresh/runtime.ts";
import { site } from "#/settings.ts";
import { NavBar } from "~/components/NavBar.tsx";

export default function Public({ children }: WithChildren) {
  const headers = (
    <Head>
      <title>{site.title}</title>
      <meta name="description" content={site.description} />
      <meta name="keywords" content={site.keywords} />

      <link rel="icon" type="image/svg" href={site.favicon} />
    </Head>
  );

  return (
    <div class="mx-auto max-w-screen-lg p-8">
      {headers}
      <NavBar />

      <div class="text-center grid gap-8 p-8 my-16">
        {children}
      </div>
    </div>
  );
}
