import { HTMLPluginProps } from "./HTMLPlugin.props"

export const renderHtml = ({ title, template, pathToJs, pathToCss }: HTMLPluginProps): string => {
    return template || `
        <!doctype html>
        <html lang="ru">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
                <title>${title}</title>
                ${pathToCss?.map(path => `<link rel="stylesheet" href=${path}>`).join(" ")}
            </head>
            <body>
                <div id="root"></div>
                ${pathToJs?.map(path => `<script src=${path}></script>`).join(" ")}
                <script>
                    const eventSource = new EventSource('http://localhost:3000/subscribe') 
                    eventSource.onopen = () => console.log('dev-server is set up...')
                    eventSource.onerror = () => console.log('Something went wrong with server')
                    eventSource.onmessage = () => window.location.reload()
                </script>
            </body>
        </html>
    `
}
