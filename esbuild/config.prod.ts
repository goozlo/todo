import path from "path"
import Esbuild, { BuildOptions } from "esbuild"
import { CleanPlugin } from "./plugins/CleanPlugin"
import { HTMLPlugin } from "./plugins/HTMLPlugin"

const mode = process.env.MODE || "development"

const isDev = mode === "development"
const isProd = !isDev

export const config: BuildOptions = {
    entryPoints: [path.resolve(__dirname, "..", "src", "index.tsx")],
    outdir: path.resolve(__dirname, "..", "dist"),
    entryNames: "[dir]/bundle.[name].[hash]",
    bundle: true,
    minify: isProd,
    sourcemap: isDev,
    metafile: true,
    tsconfig: path.resolve(__dirname, "..", "tsconfig.json"),
    loader: {
        ".png": "file",
        ".jpg": "file",
        ".svg": "file"
    },
    plugins: [
        CleanPlugin,
        HTMLPlugin({
            title: "Todo"
        })
    ]
}

Esbuild.build(config).then(() => {
    console.log("Bundle is ready!")
}).catch((error) => {
    console.log(error.message)
})
