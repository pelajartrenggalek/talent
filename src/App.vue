<script setup>
import Time from "./components/Time.vue"
import PrimaryButton from "./components/PrimaryButton.vue"
import Button from "./components/Button.vue"

import { timeline } from "./timeline.js"
</script>

<template>
  <div class="bg"></div>
  <div class="text-white flex justify-center min-h-screen">
    <div class="max-w-2xl w-full p-5">

      <div class="w-full mb-5">
        <img src="./header.jpg" alt="Cover" class="w-full rounded-t-2xl">
      </div>

      <Time />

      <div class="glass rounded-2xl p-6 mb-8">
        <h2 class="text-center font-semibold mb-4">
          📅 Timeline Kegiatan
        </h2>
        <div class="space-y-4 text-sm">
          <div class="flex items-start gap-3">
            <div class="w-3 h-3 bg-yellow-400 rounded-full mt-1"></div>
            <div>
              <b>Pendaftaran</b><br>
              <div class="py-[2px] px-3 bg-white/30 text-shadow-lg rounded-lg inline-block mt-1">{{
                timeline.pendaftaran.dateString }}
              </div>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-3 h-3 bg-yellow-400 rounded-full mt-1"></div>
            <div>
              <b>Pengumpulan Karya</b><br>
              <div class="py-[2px] px-3 bg-white/30 text-shadow-lg rounded-lg inline-block mt-1">
                {{ timeline.pengumpulanKarya.dateString }}
              </div>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-3 h-3 bg-yellow-400 rounded-full mt-1"></div>
            <div>
              <b>Penilaian</b><br>
              <div class="py-[2px] px-3 bg-white/30 text-shadow-lg rounded-lg inline-block mt-1">
                {{ timeline.penilaian.dateString }}
              </div>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-3 h-3 bg-yellow-400 rounded-full mt-1"></div>
            <div>
              <b>Pengumuman & Penyerahan Juara</b><br>
              <div class="py-[2px] px-3 bg-white/30 text-shadow-lg rounded-lg inline-block mt-1">
                {{ timeline.pengumumanJuara.dateString }}
              </div>
              <br>
              <div class="text-xs opacity-60 mt-1">Sekaligus Kegiatan Buka Bersama Pimpinan Cabang ✘ CBP KPP Trenggalek
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-4 mb-10">
        <PrimaryButton text="Daftar Peserta" :url="timeline.pendaftaran.link" />

        <Button text="📖 Upload Karya Kultum Ramadhan" disabled url="#" />
        <Button text="📖 Upload Karya Single Song" disabled url="#" class="mb-8" />

        <Button text="📄 Download TOR Lomba" disabled url="#" />
        <Button text="🎨 Download Asset Harlah" disabled url="#" />

      </div>

      <div class="glass rounded-2xl p-6 text-center">
        <h2 class="font-semibold mb-3">
          ☎ Narahubung
        </h2>
        <Button text="Rekanita Elina (WhatsApp Only)" url="https://wa.me/6281246327648" />
      </div>

      <div class="text-center text-xs opacity-60 mt-6">
        2026 &copy; Ekosistem Digital Organisasi
      </div>

    </div>
  </div>
</template>

<style>
body {
  font-family: 'Poppins', sans-serif;
  background: url('./bg.webp') center center/cover no-repeat;
}

.bg {
  opacity: .85;
  background: linear-gradient(-45deg, #06344e, #06255f, #06162c, #060c2c);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.linkbtn {
  transition: all .25s;
}

.linkbtn:hover {
  transform: scale(1.05);
}
</style>