import { Handlers, PageProps } from "$fresh/server.ts";

import Layout from "~/layouts/Public.tsx";
import DeleteButton from "../../islands/DeleteButton.tsx";

const techs = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Nest.js",
  "Node.js",
] as const;

type Techs = typeof techs[number];

type Status = "awaiting" | "scheduled" | "done";

type MockInterview = {
  id: string;
  name: string;
  techs: Techs[];
  status: Status;
  createdAt: Date;
  scheduledTo?: Date;
  interviewer?: string;
  feedback?: string;
};

type Data = {
  interviews: MockInterview[];
  success: boolean;
  error?: string;
};

async function fetchMockInterviews() {
  const kv = await Deno.openKv();
  const interviews: MockInterview[] = [];

  for await (
    const entry of kv.list<MockInterview>({
      prefix: ["interview"],
    })
  ) {
    interviews.push(entry.value);
  }

  return interviews;
}

async function deleteMockInterviews(id: string) {
  const kv = await Deno.openKv();
  await kv.delete(["interview", id]);
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    const interviews = await fetchMockInterviews();
    return await ctx.render({ interviews, success: true });
  },
  async POST(req, ctx) {
    const formData = await req.formData();

    const name = formData.get("name")?.toString() ?? "";
    const techs = formData.getAll("techs") as Techs[];
    const status: Status = "awaiting";
    const createdAt = new Date();
    const id = name + createdAt.getTime();

    const interview: MockInterview = {
      id,
      name,
      techs,
      status,
      createdAt,
    };

    // add interview
    const kv = await Deno.openKv();
    await kv.set(["interview", interview.id], interview);

    // list interviews
    const interviews = await fetchMockInterviews();
    return await ctx.render({ success: true, interviews });
  },
  async DELETE(req, ctx) {
    const id = await req.text();
    console.log({ id });

    await deleteMockInterviews(id);

    // list interviews
    const interviews = await fetchMockInterviews();
    return await ctx.render({ success: true, interviews });
  },
};

export default function Home({ data }: PageProps<Data>) {
  return (
    <Layout>
      <div class="text-left grid gap-4">
        <h1 class="text-xl">Schedule an interview 🙌</h1>

        <form class="text-left grid gap-4" method="post">
          <label htmlFor="name">Enter your name</label>
          <input
            class="border p-2 rounded"
            autofocus
            required
            type="text"
            name="name"
            id="name"
          />

          <label htmlFor="techs">
            Enter the Technologies you want to interview
          </label>
          <select multiple name="techs" id="techs" required class="flex gap-2">
            {techs.map((t) => <option class="flex" value={t}>{t}</option>)}
          </select>

          <button
            class="border text-white bg-blue-300 p-2 rounded elevate"
            type="submit"
          >
            Submit
          </button>
        </form>

        <hr />

        <h2 class="text-xl">Upcoming interviews ⌛️</h2>

        <div class="grid grid-cols-2">
          {data.interviews.map((i) => (
            <div class="p-2 rounded grid">
              <p>Name: {i.name} <DeleteButton id={i.id} /></p>
              <p>Created at: {i.createdAt.toDateString()}</p>
              <p>Techs: {i.techs.join(",")}</p>
              <p>Status: {i.status}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
