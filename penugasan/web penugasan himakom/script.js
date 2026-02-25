const { createApp } = Vue;

createApp({
  data() {
    return {
      menuOpen: false,
      navItems: [
        { label: "Beranda", href: "#beranda" },
        { label: "Profil Diri", href: "#profil" },
        { label: "Skill / Minat", href: "#skill" },
        { label: "Penugasan", href: "#penugasan" },
        { label: "Portofolio", href: "#portofolio" },
        { label: "Kontak", href: "#kontak" },
      ],
      profile: {
        brand: "Portfolio HIMAKOM",
        name: "Iman Satrio Wicaksono",
        major: "Teknik Informatika",
        photo: "files/profilweb.jpeg",
        focus: "Frontend Development dan UI/UX",
        tagline:
          "Saya peserta penugasan HIMAKOM yang berfokus pada pembuatan website modern, responsif, dan punya karakter visual kuat.",
        shortBio:
          "Saat ini saya memperdalam Vue, TypeScript, dan workflow deployment agar hasil pengembangan lebih profesional.",
      },
      profileDetails: [
        "Domisili: Bandung, Jawa Barat",
        "Institusi: Politeknik Negeri Bandung",
        "Mahasiswa Teknik Informatika",
      ],
      skills: [
        "Dasar HTML5, CSS3, JavaScript",
        "Dasar C dan Java",
        "Microsoft Office",
        
      ],
      interests: [
        "Software Engineer yang Baik",
        "Optimasi performa website",
        "Pengembangan portofolio personal",
      ],
      tasks: [
        {
          id: "penugasan2",
          title: "Penugasan 2",
          goal: "Memahami analisis kebutuhan dan perancangan kegiatan LKMM-TH.",
          result: "Dokumen TOR",
          fileLabel: "PDF Penugasan 2",
          fileType: "pdf",
          fileUrl: "files/penugasan-2.pdf",
          downloadName: "penugasan-2.pdf",
        },
        {
          id: "penugasan3",
          title: "Penugasan 3",
          goal: "Membuat Infografis Informatif Dari Tema yang Dipilih.",
          result:
            "Infografis Kesenjangan Literasi di Daerah Indonesia.",
          fileLabel: "PDF Penugasan 3",
          fileType: "pdf",
          fileUrl: "files/penugasan ke 3.pdf",
          downloadName: "penugasan-3.pdf",
        },
        {
          id: "penugasan4",
          title: "Penugasan 4",
          goal: "Membuat Video Kreatif Untuk Menjawab Study Kasus yang Diberikan.",
          result:
            "Video Kreatif Solusi Untuk Masalah yang Ada.",
          fileLabel: "Video Penugasan 4 (MP4)",
          fileType: "mp4",
          fileUrl: "files/penugasan-4.mp4",
          downloadName: "penugasan-4.mp4",
        },
      ],
      portfolio: [
        {
          title: "Proyek 1 - Katulistiwa(2025)",
          description:
            'Membuat Karya Tulis Ilmiah Dengan Judul "Pengaruh Teman Kelas Terhadap Motivasi Belajar Siswa Kelas XI 3 SMAN 25 Bandung".',
          image: "files/projek-1.jpeg",
          previewUrl: "files/projek-1.jpeg",
        },
        {
          title: "Proyek 2 - Gaspol (Gapai Satu Profesi Luhur) 2025",
          description:
            "Mempresentasikan Hasil Observasi dan Riset Terhadap Suatu Pekerjaan yang Dipilih.",
          image: "files/foto projek sapi.jpeg",
          previewUrl: "files/foto projek sapi.jpeg",
        },
        {
          title: "Dental Assistant (2025)",
          description: "Membantu Kegiatan Klinik Gigi.",
          image: "files/dental.jpeg",
          previewUrl: "files/dental.jpeg",
        },
      ],
      contacts: [
        {
          platform: "email",
          label: "Email",
          value: "iman.satrio.tif425@polban.ac.id",
          url: "mailto:iman.satrio.tif425@polban.ac.id",
        },
        {
          platform: "github",
          label: "GitHub",
          value: "github.com/Imanstr26",
          url: "https://github.com/Imanstr26",
        },
        {
          platform: "instagram",
          label: "Instagram",
          value: "@Imanstr._",
          url: "https://instagram.com/Imanstr._",
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    openContact(url) {
      if (!url) return;
      window.open(url, "_blank", "noopener,noreferrer");
    },
  }
}).mount('#app');
