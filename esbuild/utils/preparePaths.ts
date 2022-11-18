export const preparePaths = (outputs: string[]) => {
    return outputs.reduce<Array<string[]>>((acc, path) => {
        const [js, css] = acc
        const spliitedFileName = path.split("/").pop()

        if (spliitedFileName?.endsWith(".js")) {
            js.push(spliitedFileName)
        }
        if (spliitedFileName?.endsWith(".css")) {
            css.push(spliitedFileName)
        }

        return acc
    }, [[], []])
}

