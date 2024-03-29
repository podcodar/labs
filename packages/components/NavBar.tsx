import { urls } from "#/settings.ts";
import { ButtonLink } from "~/components/Button.tsx";

export const NavBar = () => (
  <div class="flex items-center gap-4 mx-auto justify-between">
    <a href="/">
      <Logo />
    </a>

    <span class="flex gap-2 items-center">
      <a href={urls.projects} class="hover:underline">projects</a>
    </span>

    <span class="flex gap-2 items-center">

      <ButtonLink
        href={urls.repository}
        target="_blank"
        class="text-gray-900 p-2 border-none hover:bg-gray-200"
      >
        {githubIcon}
      </ButtonLink>

      <ButtonLink
        href={urls.login}
        class="text-gray-900 border-gray-900 hover:bg-gray-200"
      >
        Login
      </ButtonLink>
    </span>
  </div>
);

const Logo = () => (
  <span class="flex gap-2 items-center hover:underline">
    {logo}
    <span>
      PodCodar.<span class="font-bold text-pink-600">labs</span>
    </span>
  </span>
);

const logo = (
  <img
    width={40}
    height={40}
    src="/logo.svg"
    alt="Gennevive, PodCodar coding llama"
  />
);

const githubIcon = (
  <svg
    width={40}
    height={40}
    fill="currentColor"
    viewBox="0 0 1024 1024"
    style="width: 1.2rem; height: 1.2rem;"
  >
    <title>Github</title>
    <path d="M512-0.001c-282.778 0-512.001 229.581-512.001 512.871 0 226.56 146.688 418.816 350.157 486.606 25.6 4.71 34.919-11.111 34.919-24.73 0-12.134-0.409-44.442-0.666-87.193-142.439 30.976-172.493-68.761-172.493-68.761-23.245-59.29-56.832-75.059-56.832-75.059-46.489-31.744 3.533-31.129 3.533-31.129 51.354 3.584 78.388 52.838 78.388 52.838 45.671 78.336 119.86 55.705 148.992 42.599 4.71-33.126 17.92-55.705 32.563-68.506-113.664-12.954-233.217-56.986-233.217-253.492 0-55.962 19.968-101.785 52.685-137.626-5.274-12.954-22.835-65.126 5.017-135.681 0 0 43.008-13.824 140.8 52.531 38.411-10.894 82.534-17.188 128.116-17.255h0.038c43.52 0.205 87.297 5.888 128.205 17.255 97.741-66.355 140.646-52.583 140.646-52.583 27.955 70.605 10.343 122.778 5.12 135.731 32.768 35.84 52.633 81.664 52.633 137.626 0 197.018-119.757 240.384-233.78 253.082 18.38 15.821 34.714 47.104 34.714 94.977 0 68.506-0.614 123.853-0.614 140.646 0 13.722 9.216 29.696 35.226 24.678 205.067-70.281 349.85-261.406 349.85-486.346 0-0.073 0-0.146 0-0.22v0.012c0-283.29-229.274-512.871-512.001-512.871z">
    </path>
  </svg>
);
