import { VNode } from "preact";

declare global {
  export type WithChildren<T = Element> = {
    children: VNode<T> | VNode<T>[];
  };
}
