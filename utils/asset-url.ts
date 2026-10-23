/** Resolve public assets against the deployment path, including GitHub Pages. */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  if (!path.startsWith('/') || path.startsWith('//') || path.startsWith(base))
    return path
  return `${base}${path.slice(1)}`
}
