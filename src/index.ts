import type { Plugin } from "vite";
import consola from "consola";

export default function HidetoxicPlugin(): Plugin {
  return {
    apply: "serve",
    name: "vite:hidetoxic",
    enforce: "post",
    configResolved: () => {
      consola.success("HIDETOXIC - INJECTED");
    },
  };
}
