# Lewius static migration

Independent Astro reconstruction of the home page saved from `lewius.framer.website`. This is the technical migration phase; DIFERIO rebranding has not begun.

## Run locally

1. Install Node.js 22 or newer.
2. Open a terminal in this folder.
3. Run `npm ci`.
4. Run `npm run dev` and open the local address printed by Astro.
5. Run `npm run build` for a production check; files appear in `dist/`.

The two original SingleFile HTML files stay at the repository root as untouched backups. They are not used by the app.

## GitHub Pages

The remote is `Rodricgt3/Diferio`. The workflow reads `GITHUB_REPOSITORY` at build time to determine the repository subpath. In GitHub, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**. Push to `main` or run the **Deploy static site** workflow manually. The resulting page uses `/Diferio/` as its base path.

## Structure

- `src/pages/index.astro`: semantic home page and repeated content data.
- `src/components/`: header and section heading.
- `src/styles/global.css`: responsive design and motion.
- `src/scripts/site.ts`: mobile menu and reveal behavior.
- `docs/migration-audit.md`: source analysis, missing information, and visual differences.

The production site has no Framer dependency, remote image dependency, backend, or form endpoint. Contact works through an email link. The original images and font are replaced with CSS artwork and a system font pending licensing. The source's additional pages and precise animations cannot be recovered from the saved home-page snapshots.
