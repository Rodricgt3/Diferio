# Migration audit — Lewius reference

## Sources and scope

- Two untouched SingleFile snapshots at repository root, captured 2026-10-16. The larger file (3.63 MB) was used for structure and text; the smaller is a second reference. Both files remain as the original backup.
- Live reference: https://lewius.framer.website/ (inspected for the home page's content and navigation). A SingleFile file is a browser snapshot, so it does not prove the behavior of forms, route transitions, or offscreen states.
- Original text is kept for phase-one comparison. Original image and font data are excluded from the production build because their reuse rights are unknown. Before public deployment, the owner should confirm rights to the retained copy and brand name.

## Page structure

The home page contains: header and mobile navigation; introduction/hero; latest projects; services; process; experience; philosophy; testimonials; toolkit; archive; journal; FAQ; contact; footer. The live page also links to About, Services, Works, Blog, individual posts, policy pages, and a booking destination. Those separate routes are not present in the saved snapshot. This migration implements the observed home page as a single static page and points section navigation to real sections.

## Visual components

- Neutral warm gray backgrounds, dark charcoal panels, very large editorial headings, small uppercase labels, thin strokes, rounded buttons and tags.
- Two-column editorial layouts, four-column service cards, project/gallery art panels, progress meters, journal cards, and text-first footer.
- The original uses Satoshi and embedded photographs, logos, and portraits. This implementation uses system Arial and original abstract CSS artwork. Exact typography and imagery therefore differ.

## Interactions and animation inventory

| Observed or suggested behavior | Reconstruction |
| --- | --- |
| Header links / section navigation | Native anchor links |
| Mobile menu | Accessible button with `aria-expanded`, closes after link selection |
| FAQ accordion | Native `details` / `summary` |
| Scroll entrances / text and card reveals | One `IntersectionObserver` with opacity and transform transitions |
| Hover cards and links | CSS transitions |
| Smooth scrolling | CSS, disabled for reduced motion |
| Original carousel, cursor, page transitions, sticky effects | Not reliably recoverable from snapshots; no invented replica |
| Contact form | The original submission endpoint and consent behavior are unknown; an email link provides a working contact action |

All content is visible without JavaScript. Reduced-motion users receive immediate content. The original animation timings and exact sequencing cannot be verified from static files.

## Responsive behavior

The captured Framer CSS contains its own breakpoint rules and duplicated generated markup. The independent layout uses desktop, tablet (900px), and mobile (640px) rules. Grids collapse, navigation becomes a toggle, and large headings scale with `clamp()`. Exact source breakpoint behavior requires visual comparison at more viewports.

## Assets and Framer dependencies

The larger snapshot contains 83 `data:image/` occurrences, 10 script tags, and over 5,000 `framer` string occurrences, including generated class names, inline style rules, hydration/runtime hooks, and Framer-hosted resources. The production source imports none of these. It uses no remote images, runtime API, database, or external fonts. The two SingleFile HTML files are reference backups and are not copied to `dist/`.

## Missing information and limits

- No confirmed license for original photographs, logos, portraits, or Satoshi font.
- No reliable source for project detail pages, blog articles, About/Services/Works pages, privacy/terms text, form backend, or calendar booking.
- No verified recording of animation choreography, carousel behavior, cursor effects, or page transitions.
- No Lighthouse report until a browser run against the built site. Targets are goals; no scores are claimed.

## Reconstruction strategy

Astro emits static semantic HTML. Reusable header and heading components organize the page; content arrays keep repeated cards consistent. Tailwind is available for future work, while the visual reconstruction uses an authored stylesheet. A tiny TypeScript module controls the menu and scroll reveals. GitHub Actions builds with the repository-derived Astro base path and deploys `dist/` to Pages.
