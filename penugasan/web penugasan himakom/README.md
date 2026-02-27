# Website Portofolio Personal - Penugasan HIMAKOM
Iman Satrio WIcaksono 
NIM. 251524013

Website portofolio personal berbasis **HTML, CSS, JavaScript, dan Vue 3 (CDN)** untuk memenuhi penugasan HIMAKOM.

## Fitur Utama
- Navigasi multi-halaman: Beranda, Profil, Skill/Minat, Penugasan, Portofolio, dan Kontak.
- Data konten dikelola terpusat di `script.js` (nama, deskripsi, daftar tugas, proyek, kontak).
- Halaman penugasan mendukung aksi **Preview** dan **Download** file.
- Halaman portofolio menampilkan kartu proyek beserta gambar.
- Halaman kontak memiliki interaksi **double click** untuk membuka tautan kontak.
- Desain responsif untuk desktop dan mobile.

## Teknologi
- HTML5
- CSS3
- JavaScript (ES6)
- Vue 3 (global build via CDN)

## Struktur Proyek
```text
.
|-- index.html
|-- profil.html
|-- skill.html
|-- penugasan.html
|-- portofolio.html
|-- kontak.html
|-- script.js
|-- style-comic.css
|-- style.css
|-- files/
|   |-- profilweb.jpeg
|   |-- penugasan-2.pdf
|   |-- penugasan ke 3.pdf
|   |-- projek-1.jpeg
|   |-- ...
`-- README.md
```

## Cara Menjalankan
### Opsi 1 (paling cepat)
1. Buka file `index.html` langsung di browser.

### Opsi 2 (disarankan untuk development)
Jalankan local server agar perilaku file/link konsisten:

```bash
# Python
python -m http.server 8000
```

Lalu buka `http://localhost:8000` di browser.

## Konfigurasi Konten
Semua data utama ada di file `script.js`, terutama pada bagian:
- `profile`
- `profileDetails`
- `skills`
- `interests`
- `tasks`
- `portfolio`
- `contacts`

Jika ingin mengganti isi website, cukup edit bagian data tersebut tanpa perlu mengubah struktur HTML utama.

## Catatan Asset
- Pastikan semua file di folder `files/` sesuai dengan path yang dipakai di `script.js`.
- Beberapa file tugas (contoh `penugasan-4.mp4`) harus tersedia agar tombol preview/download tidak menuju file yang hilang.

## Deployment
Website ini dapat dideploy ke layanan static hosting seperti:
- GitHub Pages
- Cloudflare Pages
- Netlify

## Link
- Repository: `https://github.com/Imanstr26/penugasan-Himakom`
- Deployment (opsional): `https://web-portfolio-psi-ten.vercel.app/index.html`

## Lisensi
Gunakan untuk kebutuhan pembelajaran dan penugasan.
