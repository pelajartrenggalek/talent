<script setup>
import Juknis from '../layouts/Juknis.vue'

const accordionData = {
    umum: {
        label: "Kepesertaan",
        icon: "📜",
        content: [
            "Peserta adalah kader aktif IPNU-IPPNU tingkat PAC/PK se-Kabupaten Trenggalek, dibuktikan dengan SP/KTA yang masih berlaku.",
            "Setiap PAC/PK mengirimkan maksimal 2 utusan (1 IPNU & 1 IPPNU).",
            "Peserta wajib mengenakan pakaian rapi, sopan, dan beratribut IPNU/IPPNU.",
            "Materi tidak boleh mengandung unsur SARA, politik praktis, maupun ujaran kebencian."
        ]
    },
    tema: {
        label: "Tema Kultum (Pilih Salah Satu)",
        icon: "🕌",
        content: [
            "Spirit Fastabiqul Khairat di Bulan Ramadhan.",
            "Peran Pelajar NU dalam Syiar Agama.",
            "*Tema lain dapat dikembangkan oleh peserta selama masih relevan dengan nilai Ramadhan dan dakwah pelajar NU."
        ]
    },
    teknis: {
        label: "Ketentuan Teknis",
        icon: "🎤",
        content: [
            "Lomba dilaksanakan secara online (pengumpulan video).",
            "Durasi kultum berkisar antara 7–10 menit.",
            "Peserta dilarang membaca teks secara penuh (diperbolehkan membawa poin-poin/catatan kecil).",
            "Penyampaian menggunakan Bahasa Indonesia yang baik dan benar.",
            "Isi materi wajib mencantumkan minimal 1 ayat Al-Qur’an dan 1 hadits.",
            "Pengambilan video dilakukan di Masjid/Mushola atau tempat umum yang representatif di daerah masing-masing.",
            "Orientasi kamera landscape dengan resolusi minimal 720p dan ukuran file maksimal 1GB.",

        ]
    },
    penilaian: {
        label: "Kriteria Penilaian",
        icon: "📊",
        content: [
            "Kesesuaian Tema (20%).",
            "Penguasaan Materi (25%).",
            "Retorika & Artikulasi (20%).",
            "Dalil & Kedalaman Isi (15%).",
            "Adab & Penampilan (10%).",
            "Kepercayaan Diri (10%)."
        ]
    },
    hadiah: {
        label: "Hadiah & Penghargaan",
        icon: "🏆",
        content: [
            "Juara 1 mendapatkan Sertifikat dan Uang Pembinaan.",
            "Seluruh peserta mendapatkan E-Sertifikat Kepesertaan."
        ]
    }
}
</script>

<template>
    <div>
        <Juknis :accordion-data="accordionData" title="Lomba Kultum Ramadhan"
            subtitle="PC IPNU IPPNU Trenggalek 2026" />
    </div>
</template>