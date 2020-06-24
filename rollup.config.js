import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import { uglify } from "rollup-plugin-uglify";

const input = 'src/index.js';
const output = 'dist/index';

export default [
    {
        input: input,
        output: {
            file: `${output}.js`,
            format: 'cjs'
        },
        plugins: [
            resolve(),
            external(),
            babel({
                exclude: "node_modules/**"
            }),
            commonjs(),
            uglify(),
        ],
    },
    {
        input: input,
        output: {
            file: `${output}.modern.js`,
            format: 'es'
        },
        plugins: [
            resolve(),
            external(),
            babel({
                exclude: "node_modules/**"
            }),
            terser(),
        ],
    },
    {
        input: input,
        output: {
            name: 'ReactUi',
            file: `${output}.umd.js`,
            globals: {
                react: 'React',
            },
            format: 'umd'
        },
        plugins: [
            resolve(),
            external(),
            babel({
                exclude: "node_modules/**"
            }),
            terser(),
        ],
    }
]