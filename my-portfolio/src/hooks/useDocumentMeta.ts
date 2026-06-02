import { useEffect } from 'react';

const SITE_NAME = 'Kweyu Delron Muyale';
const DEFAULT_TITLE = 'Kweyu Delron Muyale — Software & Network Engineer';

interface DocumentMeta {
  /** Page title. The site name is appended automatically unless it's the home page. */
  title: string;
  description?: string;
  /** Set true on the home page so the title isn't suffixed with the site name. */
  isHome?: boolean;
}

function setMeta(name: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

/**
 * Sets per-route <title> and meta description. SPAs otherwise keep the same
 * title on every route, which hurts SEO and link previews.
 */
export function useDocumentMeta({ title, description, isHome }: DocumentMeta) {
  useEffect(() => {
    document.title = isHome ? DEFAULT_TITLE : `${title} — ${SITE_NAME}`;
    if (description) setMeta('description', description);
  }, [title, description, isHome]);
}
