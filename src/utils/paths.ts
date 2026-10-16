export function resolvePath(path: string): string {
  const rawBase = import.meta.env.BASE_URL ?? '/';
  const base = rawBase.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
