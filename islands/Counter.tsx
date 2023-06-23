import { useSignal } from "@preact/signals";

import { Button } from "~/components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const count = useSignal(props.start);
  return (
    <div class="flex gap-2 w-full">
      <Button onClick={() => count.value--}>-</Button>

      <p class="flex-grow-1 font-bold text-xl">{count}</p>

      <Button onClick={() => count.value++}>+</Button>
    </div>
  );
}
