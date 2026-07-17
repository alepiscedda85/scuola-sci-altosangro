import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { App } from './app/App'
export { headMarkup, seoByPath } from './lib/seo'

export function render(url: string) {
  const basename = import.meta.env.BASE_URL
  const location = basename === '/' ? url : `${basename.replace(/\/$/, '')}${url}`
  return renderToString(<StaticRouter basename={basename} location={location}><App /></StaticRouter>)
}
