import { IS_BROWSER } from "$fresh/runtime.ts";
import { h } from "preact";
import { tw } from "twind";

export function ButtonLink(props: h.JSX.HTMLAttributes<HTMLAnchorElement>) {
  const styles = tw`
    text-blue-300 border-1 border-blue-200 py-2 px-8 rounded-full
    hover:underline hover:bg-blue-50 hover:shadow
  `;
  return (
    <a
      {...props}
      class={tw(styles, props.class)}
    />
  );
}

export function Button(props: h.JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
    />
  );
}
