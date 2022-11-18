import { Plugin } from 'esbuild'
import path from "path"
import fs from 'fs'
import { HTMLPluginProps } from "../utils/HTMLPlugin.props"
import { preparePaths } from "../utils/preparePaths"
import { renderHtml } from "../utils/renderHtml"

export const HTMLPlugin = (options: HTMLPluginProps): Plugin => {
    return {
        name: 'HTMLPlugin',
        setup(build) {
            const { outdir } = build.initialOptions

            build.onStart(async () => {
                try {
                    if (outdir) {
                        await fs.rm(outdir, { recursive: true }, () => {})
                    }
                } catch (e) {
                    console.log('Не удалось очистить папку :(')
                }
            })

            build.onEnd(async (result) => {
                const outputs = result.metafile?.outputs;
                const [pathToJs, pathToCss] = preparePaths(Object.keys(outputs || {}))

                if (outdir) {
                    await fs.writeFile(
                        path.resolve(outdir, 'index.html'),
                        renderHtml({ pathToJs, pathToCss, ...options }),
                        () => {}
                    )
                }
            })
        },
    }
}


