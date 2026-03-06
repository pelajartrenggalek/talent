<script setup>
import Juknis from '../layouts/Juknis.vue'

const accordionData = {
    umum: {
        label: "Kepesertaan",
        icon: "📜",
        content: [
            "Peserta adalah kader aktif IPNU-IPPNU tingkat PAC se-Kabupaten Trenggalek.",
            "Peserta dibuktikan dengan SP yang masih berlaku.",
            "Kategori lomba terdiri dari Vokal Solo IPNU dan Vokal Solo IPPNU.",
            "Peserta wajib mengenakan atribut atau identitas IPNU/IPPNU saat proses perekaman video."
        ]
    },
    tema: {
        label: "Ketentuan Lagu",
        icon: "🎵",
        content: [
            "Peserta membawakan 1 lagu Islami, boleh menggunakan selain Bahasa Indonesia.",
            "Lagu bebas selama bernuansa Islami dan tidak mengandung unsur SARA atau ujaran kebencian."
        ]
    },
    teknis: {
        label: "Ketentuan Teknis",
        icon: "🎥",
        content: [
            "Lomba dilaksanakan secara online (pengumpulan video).",
            "Durasi video maksimal 5 menit.",
            "Audio harus orisinil tanpa autotune atau mixing berlebihan.",
            "Orientasi kamera landscape dengan resolusi minimal 720p dan ukuran file maksimal 1GB.",
        ]
    },
    penilaian: {
        label: "Kriteria Penilaian",
        icon: "📊",
        content: [
            "Materi Vokal (30%): Kualitas dan karakter suara.",
            "Teknik Vokal (40%): Intonasi, artikulasi, phrasering, dan diksi.",
            "Ekspresi & Penampilan (30%): Penjiwaan lagu, kostum, dan improvisasi.",
            "*Keputusan dewan juri bersifat mutlak dan tidak dapat diganggu gugat."
        ]
    },
    hadiah: {
        label: "Hadiah & Penghargaan",
        icon: "🏆",
        content: [
            "Juara 1 PA dan Juara 1 PI mendapatkan Sertifikat dan Uang Pembinaan.",
            "Seluruh peserta mendapatkan E-Sertifikat Kepesertaan."
        ]
    }
}
</script>

<template>
    <div>
        <Juknis :accordion-data="accordionData" title="Lomba Single Song" subtitle="PC IPNU IPPNU Trenggalek 2026" />
    </div>
</template>