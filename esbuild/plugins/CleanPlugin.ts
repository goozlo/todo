import { Plugin } from 'esbuild'
import fs from 'fs'

export const CleanPlugin: Plugin = {
    name: 'CleanPlugin',
    setup(build) {
        build.onStart(async () => {
            try {
                const { outdir } = build.initialOptions
                if (outdir) {
                    await fs.rm(outdir, { recursive: true }, () => {})
                }
            } catch {
                console.log('Не удалось очистить папку :(')
            }
        })
    }
}
