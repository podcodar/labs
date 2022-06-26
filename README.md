# PodCodar Labs

Projeto da [PodCodarLabs](https://labs.podcodar.com), nossa página de experimentos e ferramentas internas.

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/podcodar/labs/&project-name=PodCodarLabs&repository-name=labs)


> **Note**
>
> Defina uma variável de ambiente `DATABASE_URL`.

## Como usar?

Primeiramente, crie um arquivo `.env.local` como exemplificado em [`.env.example`](https://github.com/podcodar/labs/blob/main/.env.example).

> **Note**
>
> Solicite a um membro do time a string de conexão oficial para testes


```bash
# run dev server
yarn dev

# run build prod server
yarn build

# database (alias to prisma)
yarn db

# database sync (migrate & generate)
yarn db:sync
# database migrate
yarn db:migrate
# database generate
yarn db:migrate
```
