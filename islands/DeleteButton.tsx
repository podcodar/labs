import { JSX } from "preact/jsx-runtime";

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
  id: string;
}

export default function DeleteButton({ id, onClick, ...props }: Props) {
  const handleClick = async () => {
    await fetch(window.location.href, {
      method: "DELETE",
      body: id,
    });
    window.location.reload()
  };
  return (
    <button {...props} onClick={handleClick}>
      x
    </button>
  );
}
