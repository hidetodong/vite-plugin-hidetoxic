import consola from "consola";
import type { Plugin } from "vite";

export default function HidetoxicPlugin(): Plugin {
  return {
    apply: "serve",
    name: "vite:hidetoxic",
    enforce: "post",
    configResolved() {
      consola.success("HIDETOXIC - INJECTED");
    },
  };
}
