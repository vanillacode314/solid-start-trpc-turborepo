import { Show, createResource, createSignal } from "solid-js";
import { trpc } from "~/client";

export default function Home() {
  const [input, setInput] = createSignal<string>("");
  const [pokemon] = createResource<
    Awaited<ReturnType<typeof trpc.getPokemon.query>>,
    string
  >(input, () => trpc.getPokemon.query(input()));

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={input()}
          onKeyDown={(e) =>
            e.key === "Enter" && setInput(e.currentTarget.value)
          }
        />
        <button onClick={() => {}}>Search</button>
      </form>
      <Show when={pokemon()}>
        <p>Got Pokemon {pokemon().name}</p>
      </Show>
    </>
  );
}
