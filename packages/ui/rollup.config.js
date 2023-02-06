import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default {
  input: "lib/index.ts",
  output: {
    dir: "build",
    format: "cjs",
  },
  external: [/node_modules/, /@babel\/runtime/, "react-dom"],
  plugins: [
    commonjs(),
    typescript(),
    babel({
      babelHelpers: "runtime",
    }),
    resolve(),
    postcss(),
  ],
};
