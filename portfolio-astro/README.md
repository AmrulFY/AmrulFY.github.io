# Portfolio – Amrul Fadhil Yofan

Astro (statis) + konten proyek berbasis Markdown. Deploy otomatis ke GitHub Pages.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil di dist/
npm run lint     # ESLint
npm run check    # astro check (tipe)
```

## Sebelum publish

1. Foto profil sudah di `src/assets/ft.png` (otomatis jadi AVIF/WebP responsif via `astro:assets`).
2. `public/cv.pdf` ✅ dan `public/og.png` ✅ (1200×630) sudah ada.
3. GitHub → Settings → Pages → Source: **GitHub Actions**.
4. Push ke `main`; workflow deploy di root repo (`../.github/workflows/deploy.yml`) akan build folder ini dan deploy ke Pages. Setiap PR otomatis dicek via `../.github/workflows/ci.yml` (lint, `astro check`, build, cek tautan, Lighthouse).

## Analytics (opsional, ramah privasi)

Nonaktif secara default. Untuk mengaktifkan, uncomment salah satu snippet di `src/layouts/Base.astro`:

- Plausible: isi `data-domain` dengan domain kamu.
- GoatCounter: isi `data-goatcounter` dengan kode counter kamu.

## Menambah proyek

Buat file baru di `src/content/projects/nama-proyek.md` (lihat frontmatter contoh).
Data situs (nama, tautan, skills, menu) ada di `src/data/site.ts`.

## Struktur

```
src/
  components/   Nav, Hero, About, ProjectCard, Skills, Contact, Footer
  content/projects/*.md
  layouts/Base.astro     (meta, OG, JSON-LD)
  pages/index.astro, 404.astro
  styles/tokens.css, global.css
public/  favicon.svg, robots.txt, og.png, cv.pdf
src/assets/ft.png  (foto profil, dioptimasi otomatis)
```
