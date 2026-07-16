import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { seoByPath } from '../../lib/seo'
import { site } from '../../data/site'

export function Seo() {
  const { pathname } = useLocation()
  useEffect(() => {
    const data = seoByPath[pathname] ?? seoByPath['/404']
    document.title = data.title
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) canonical.href = `${site.domain}${data.path === '/' ? '/' : data.path}`
  }, [pathname])
  return null
}
