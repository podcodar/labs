import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold p-4">
          PodCodar
          <a className="text-pink-500" href="https://podcodar.com">
            Labs!
          </a>
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">🔎 Docs &rarr;</h3>
            <p className="mt-4 text-xl">
              Encontre informações detalhadas sobre as APIs abertas da PodCodar
            </p>
          </a>

          <a
            href="https://wiki.podcodar.com"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">📚 Estude &rarr;</h3>
            <p className="mt-4 text-xl">
              Aprenda mais sobre a comunidade, e estude através de nossas trilhas!
            </p>
          </a>

          <a
            href="https://github.com/podcodar/exercises/"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">💪🏽 Exercícios &rarr;</h3>
            <p className="mt-4 text-xl">
              Descubra e pratique com projetos de exemplos da comunidade.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://podcodar.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p></p>
          <Image src="/images/just-llama.png" alt="PodCodar Logo" width={20} height={20} /> PodCodar
        </a>
      </footer>
    </div>
  );
};

export default Home;
