import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import styles from 'rollup-plugin-styles';
import { nodeResolve } from '@rollup/plugin-node-resolve';
const autoprefixer = require('autoprefixer');

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      }
    ],
    external: ['react', /@babel\/runtime/, 'prop-types', 'react-icons/ai', /@ant-design\/icons/, 'react-icons/bs', 'react-icons/io5', 'antd'],
    plugins: [
      styles({
        postcss: {
          plugins: [autoprefixer()],
        },
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      external(),
      resolve(),
      terser(),
      nodeResolve(),
    ]
  }
];
