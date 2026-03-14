<script setup>
import Time from "../components/Time.vue"
import PrimaryButton from "../components/PrimaryButton.vue"
import Button from "../components/Button.vue"

import { timeline } from "../timeline.js"
</script>

<template>


  <div class="grid grid-cols-2 gap-4 text-center -mt-2 mb-3">
    <RouterLink to="/juknis/kultum"
      class="p-4 rounded-xl border bg-yellow-400 text-green-900 border-white/30 hover:scale-103  transition-all">
      <span class="text-4xl mb-2 block">🎙️</span>
      <span class="font-medium text-sm">Juknis: <b>Kultum Ramadhan</b></span>
    </RouterLink>
    <RouterLink to="/juknis/single-song"
      class="p-4 rounded-xl border bg-yellow-400 text-green-900 border-white/30 hover:scale-103  transition-all">
      <span class="text-4xl mb-2 block">🎵</span>
      <span class="font-medium text-sm">Juknis: <b>Single Song</b></span>
    </RouterLink>
  </div>

  <!-- <Time /> -->

  <div class="glass rounded-2xl p-6 mb-8">
    <h2 class="text-center font-semibold mb-4">
      📅 Timeline Kegiatan
    </h2>
    <div class="space-y-4 text-sm">
      <div class="flex items-start gap-3">
        <div class="w-3 h-3 bg-yellow-400 rounded-full mt-1"></div>
        <div>
          <b>Pendaftaran dan Pengumpulan Karya</b><br>
          <div class="mr-1 py-[2px] px-3 bg-white/30 text-shadow-lg rounded-lg inline-block mt-1">{{
            timeline.pendaftaran.dateString }}
          </div>
          <span class="py-[2px] px-3 bg-yellow-400 text-shadow-lg rounded-lg inline-block mt-1 font-bold text-black">{{
            timeline.pendaftaran.badge }}</span>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <div class="w-3 h-3 bg-yellow-400 rounded-full mt-1"></div>
        <div>
          <b>Penilaian Karya</b><br>
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
    <Button disabled text="📝 Daftar & Pengumpulan Karya" :url="timeline.pendaftaran.link" external />
    <!-- <Button text="📄 Juknis Kultum Ramadhan" url="/juknis/kultum" />
    <Button text="📄 Juknis Single Song" url="/juknis/single-song" /> -->
    <PrimaryButton text="🏆 Hasil Penjurian Karya" url="/hasil" disabled />
    <Button text="🎨 Download Asset Harlah" disabled external url="#" />
  </div>

  <a href="/flyer.webp" class="glass rounded-2xl mb-8 overflow-hidden block">
    <img src="/flyer.webp" alt="">
  </a>

  <div class="glass rounded-2xl p-6 text-center">
    <h2 class="font-semibold mb-3">
      ☎ Narahubung
    </h2>
    <Button text="Rekanita Elina (WhatsApp Only)" external url="https://wa.me/6281246327648" />
  </div>

</template>