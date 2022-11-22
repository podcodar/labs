import { VNode } from "preact";

declare global {
  export type WithChildren<T = {}> = {
    children: VNode<T>;
  };
}
