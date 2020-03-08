import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import replace from "rollup-plugin-replace";
import { terser } from "rollup-plugin-terser";
import { uglify } from "rollup-plugin-uglify";
import packageJSON from "./package.json";

const input = "./src/index.js";
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, ".min.js");

const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".json"];
const CODES = [
  "THIS_IS_UNDEFINED",
  "MISSING_GLOBAL_NAME",
  "CIRCULAR_DEPENDENCY"
];

const env = process.env.NODE_ENV;

const commonPlugins = () => [
  external({
    includeDependencies: true
  }),
  babel({
    babelrc: false,
    presets: [["@babel/preset-env", { modules: false }], "@babel/preset-react"],
    extensions: EXTENSIONS,
    exclude: "node_modules/**"
  }),
  commonjs({
    include: /node_modules/
  }),
  replace({ "process.env.NODE_ENV": JSON.stringify(env) }),
  resolve({
    extensions: EXTENSIONS,
    preferBuiltins: false
  })
];

export default [
  // CommonJS
  {
    input,
    external: ["react", "react-dom"],
    output: {
      file: packageJSON.main,
      format: "cjs",
      sourcemap: true
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      ...commonPlugins()
    ]
  },
  {
    input,
    external: ["react", "react-dom"],
    output: {
      file: minifyExtension(packageJSON.main),
      format: "cjs",
      sourcemap: true
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      ...commonPlugins(),
      uglify()
    ]
  },
  // UMD
  {
    input,
    external: ["react", "react-dom"],
    output: {
      file: packageJSON.browser,
      format: "umd",
      sourcemap: true,
      name: "reactSampleComponentsLibrary",
      globals: {
        react: "React",
        "@emotion/styled": "styled",
        "@emotion/core": "core"
      }
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      ...commonPlugins()
    ]
  },
  {
    input,
    external: ["react", "react-dom"],
    output: {
      file: minifyExtension(packageJSON.browser),
      format: "umd",
      sourcemap: true,
      name: "reactSampleComponentsLibrary",
      globals: {
        react: "React",
        "@emotion/styled": "styled",
        "@emotion/core": "core"
      }
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      ...commonPlugins(),
      terser()
    ]
  },
  // ES
  {
    input,
    external: ["react", "react-dom"],
    output: {
      file: packageJSON.module,
      format: "es",
      sourcemap: true,
      exports: "named"
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      ...commonPlugins()
    ]
  },
  {
    input,
    external: ["react", "react-dom"],
    output: {
      file: minifyExtension(packageJSON.module),
      format: "es",
      sourcemap: true,
      exports: "named"
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      ...commonPlugins(),
      terser()
    ]
  }
];
