import Counter from "#/islands/Counter.tsx";

import Layout from "~/layouts/Public.tsx";

export default function Home() {
  return (
    <Layout>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="text-xl">Preact Counter</h1>

        <Counter start={3} />
      </div>
    </Layout>
  );
}
