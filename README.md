# RAVENWEAR

Company profile statis berdasarkan PRD RAVENWEAR. HTML, CSS, dan JavaScript tanpa dependensi build.

## Preview lokal

Jalankan `python -m http.server 8080`, lalu buka http://localhost:8080.

## Deployment

Push ke `main` menjalankan workflow `.github/workflows/pages.yml`. Pilih **Settings → Pages → Source → GitHub Actions** jika Pages belum aktif. URL yang diharapkan: https://hashizumee.github.io/ravenwear/.

Validasi JavaScript: `node --check app.js`.

## Konten yang perlu dilengkapi

- Foto editorial dari Unsplash adalah ilustrasi, bukan foto produk resmi. Foto kategori produk menggunakan foto stok asli Unsplash yang disimpan di assets/; sumber tercatat di assets/README.md. Konsep outlet dibuat dengan CSS.
- Isi spesifikasi bahan, ukuran, warna, harga per varian, dan foto produk setelah datanya tersedia.
- Lengkapi email, WhatsApp, Instagram, TikTok, alamat, serta jam operasional dengan data terverifikasi.
- Form kemitraan memvalidasi input dan menghasilkan draf yang dapat disalin. Tidak mengirim data atau menyimpan informasi ke server. Hubungkan kanal resmi sebelum menyediakan pengiriman.
- Target omzet dan 10 outlet adalah proyeksi, bukan pendapatan aktual atau outlet aktif.

Font Google Fonts dan foto Unsplash membutuhkan koneksi internet; font sistem dan warna latar menjadi fallback.
