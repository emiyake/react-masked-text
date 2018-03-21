// rollup.config.js
const babel = require("rollup-plugin-babel");
const resolve = require("rollup-plugin-node-resolve");
const copy = require("rollup-plugin-copy");

let includePathOptions = {
  paths: ['src'],
  extensions: ['.js']
};


export default {
  input: "src/text-input-mask.js",
  output: {
    file: "dist/text-input-mask.js",
    format: "umd"
  },
  name: 'ReactTextMask',
  globals: {
    react: 'React'
  },
  external: [ 'moment', 'react' ],
  globals: {
    moment: 'moment',
    react: 'react'
  },
  plugins: [
    copy({'src/internal-dependencies': 'dist/internal-dependencies'}),
    resolve({jsnext: true}),
    babel()
  ]
}