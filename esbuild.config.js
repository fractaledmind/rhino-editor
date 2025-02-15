import * as path from "path";
import glob from "glob"
import esbuild from "esbuild"
import * as fs from "fs"

const pkg = JSON.parse(fs.readFileSync("./package.json"))
const deps = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
]

;(async function () {
  const entries = {}
  glob.sync("./src/**/*.{ts,js}")
    .forEach((file) => {
      const key = path.relative("src", path.join(path.dirname(file), path.basename(file, path.extname(file))))
      const value = "." + path.sep + path.join(path.dirname(file), path.basename(file, path.extname(file)))
      entries[key] = value
    });

  const defaultConfig = {
    entryPoints: ["./src/index.ts"],
    sourcemap: true,
    platform: "browser",
    target: "es2018",
    watch: process.argv.includes("--watch"),
    color: true,
    bundle: true,
    external: []
  }

  const startTime = Number(new Date())

  await Promise.allSettled[
    esbuild.build({
      ...defaultConfig,
      outfile: "dist/bundle/index.common.js",
      format: "cjs",
      minify: true,
    }),

    esbuild.build({
      ...defaultConfig,
      outfile: "dist/bundle/index.module.js",
      format: "esm",
      minify: true,
    }),

    esbuild.build({
      ...defaultConfig,
      entryPoints: entries,
      outdir: 'dist',
      format: 'esm',
      target: "es2020",
      external: deps,
      splitting: true,
      chunkNames: 'chunks/[name]-[hash]'
    })
  ]

  const endTime = Number(new Date())
  const buildTime = endTime - startTime

  console.log(`Build complete in ${buildTime}ms! ✨`)
})()
