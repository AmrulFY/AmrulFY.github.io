# Plan perbaikan portfolio (Fase 0–3)

Legenda: ✅ sudah tercakup di kerangka ini · ☐ masih perlu dikerjakan

## Fase 0 – Perbaikan bug situs lama (±1 hari)

Lewati bagian ini jika langsung migrasi ke kerangka Astro; semua bug kritis sudah teratasi di kerangka.

- ✅ Pisahkan `charset` dan `viewport` (viewport sebelumnya tidak berfungsi), tambah `lang`.
- ✅ Navigasi mobile berfungsi (class `nav-link`/`nav-links` konsisten, tombol menu + JS, `aria-expanded`).
- ✅ Hapus kode newsletter dan error `null` di inline script; hapus referensi `script.js` yang 404.
- ✅ Hapus AOS/animate.css/Font Awesome (animasi ganda, `once:false`, request pihak ketiga).
- ✅ Kartu memakai CSS grid `auto-fit` (tanpa lebar/tinggi tetap), `scroll-padding-top` untuk navbar tetap.
- ✅ Tombol navigasi jadi `<a href="#...">`, link eksternal memakai `rel="noopener noreferrer"`, hapus link Facebook generik, tahun otomatis.
- ✅ Landmark semantik (`header`, `nav`, `main`, `section`), skip link, `:focus-visible`, `prefers-reduced-motion`.

## Fase 1 – Desain dan konten (2–4 hari)

- ✅ Design tokens di `src/styles/tokens.css` (warna, tipografi `clamp()`, radius, spacing), font variabel self-host (bobot bold asli).
- ☐ Finalisasi arah visual: uji palet/typeface di `tokens.css`; tambahkan dark mode (`prefers-color-scheme`) dan toggle bila perlu.
- ☐ Isi tiap proyek: masalah, dataset, metode, metrik hasil (field `metric`), grafik/screenshot, tautan demo.
- ☐ Tambahkan bukti untuk klaim kriptografi (proyek/riset/tulisan) atau ubah headline agar sesuai.
- ☐ Section tambahan bila relevan: materi training/edukasi (mis. data BPS/OJK, konten @simplemath_id), tulisan/blog.
- ☐ Siapkan aset: `ft.png` → WebP/AVIF, `cv.pdf`, `og.png`.
- ☐ Satu momen animasi saja (mis. reveal hero), selebihnya statis.

## Fase 2 – Stack (3–5 hari)

- ✅ Astro 5 (output statis, nol JS default), komponen modular, content collection bertipe (zod) untuk proyek.
- ✅ Ikon: SVG inline (dipakai di Hero/Skills, tanpa dependensi eksternal).
- ✅ Gambar: `astro:assets` (`Picture` AVIF+WebP responsif di Hero, `src/assets/ft.png`, `public/img/ft.png` dihapus).
- ☐ Opsional: MDX untuk studi kasus panjang, section blog (`src/content/blog`), RSS.
- ☐ Opsional: Tailwind bila ingin utility-first; kerangka ini sengaja memakai CSS token biasa.
- ✅ ESLint + Prettier + `astro check` (script `lint`, `format`, `check`; `check` 0 error, `build` lolos).

## Fase 3 – Production readiness (2–3 hari)

- ✅ Workflow deploy GitHub Pages, sitemap, `robots.txt`, meta description, Open Graph/Twitter card, canonical, JSON-LD `Person`, halaman 404, favicon. `og.png` (1200×630) sudah digenerate.
- ✅ CI pada pull request: lint, `astro check`, build, cek tautan (`.github/workflows/ci.yml` di root repo + cek tautan lychee).
- ✅ Deploy: workflow eksplisit di root (`.github/workflows/deploy.yml`, build `portfolio-astro/` → upload `dist`), menggantikan `withastro/action` lama yang mengasumsikan proyek di root.
- ✅ Lighthouse CI dengan ambang: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95, Best Practices ≥ 95 (`.lighthouserc.json` + job `lighthouse` di CI).
- ✅ Uji aksesibilitas: skip link, `:focus-visible`, `prefers-reduced-motion`, aria-label/expanded, alt, `rel=noopener` — lolos audit statis. Kontras: indigo `#7c6ff7`/navy 4.98, sky `#38bdf8`/navy 8.91, light `#4f46e5`/putih 6.29, `#0369a1`/putih 5.93 (semua ≥ 4.5; teks tombol putih/indigo 3.84 hanya untuk UI bold, masih ≥ 3.0). Uji manual keyboard/screen reader tetap disarankan sekali sebelum publish.
- ☐ Custom domain + HTTPS (CNAME), update `site` di `astro.config.mjs` dan `robots.txt` — ditunda hingga kamu punya domain.
- ✅ Analytics ramah privasi: snippet opt-in Plausible/GoatCounter (komentar di `Base.astro`) + dokumentasi di README. Belum diaktifkan.
- ✅ Proteksi rantai pasok: Dependabot mingguan (npm + gha, `.github/dependabot.yml`), `package-lock.json` dikomit. SRI tidak diperlukan (nol skrip eksternal — font self-host via Fontsource).

## Urutan kerja yang disarankan

1. Jalankan kerangka, isi aset (Fase 1 aset) dan deploy sekali untuk memastikan pipeline hidup.
2. Lengkapi konten proyek dan klaim (Fase 1), karena paling berpengaruh pada kesan rekruter.
3. Selesaikan Fase 2 opsional sesuai kebutuhan, lalu Fase 3 (CI, Lighthouse, domain, analytics).
