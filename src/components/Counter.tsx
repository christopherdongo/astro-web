import {createSignal} from "solid-js";
import type {JSX} from "astro/jsx-runtime";

interface Props {
    initValue: number;
    children?: JSX.Element;
}

export const Counter= (props : Props) => {
  const [counter, setCounter] = createSignal(props.initValue);

  return (
    <div class="px-4 mt-4">
      {/*<h1 class="text-3xl">Counter</h1>*/}
      {props.children}
      <h3 class="text-2xl">Value: {counter()}</h3>villa/home/darkzero/Documents/pruebas.com/proyectos-personales/astro/02-pokemon-static
      <button
        class="bg-blue-500 p-2 mr-2 rounded"
        onclick={() => setCounter((prev) => prev + 1)}
      >
        +1
      </button>
      <button
        class="bg-blue-500 p-2 mr-2 rounded "
        onclick={() => setCounter((prev) => --prev)}
      >
        -1
      </button>
    </div>
  );
};
