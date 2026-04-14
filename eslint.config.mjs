// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import antfu from "@antfu/eslint-config"
export default withNuxt(
  antfu({
    type: "app",
    typescript: true,
    vue: true,
    formatters: true,
    stylistic: {
      indent: 4,
      semi: true,
      quotes: 'double'
    }
  }, {
    rules: {
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["warn"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["error"],
      "perfectionist/sort-imports": ["error", { tsconfig: { rootDir: "." } }],
      "unicorn/filename-case": ["error", {
        case: "kebabCase",
        ignore: ["README.md"]
      }]
    }
  })
)
