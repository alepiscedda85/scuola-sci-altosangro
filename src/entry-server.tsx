import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { App } from './app/App'
export { headMarkup, seoByPath } from './lib/seo'

export function render(url: string) { return renderToString(<StaticRouter location={url}><App /></StaticRouter>) }
