<script setup>
import { juara } from "../juara.js"
const colorCategory = {
    "Kultum": "bg-yellow-400 text-black",
    "Single Song Putra": "bg-blue-400 text-white",
    "Single Song Putri": "bg-pink-400 text-white"
}

</script>
<template>
    <div class="glass rounded-xl p-5">
        <h1 class="text-center text-2xl font-bold">Daftar Pemenang Karya</h1>
        <p class="text-center text-sm">Santri Got Talent Vol. 2 PC IPNU & IPPNU Trenggalek</p>
        <div class=" rounded-xl mt-5">

            <table class="glass w-full text-left border-collapse max-sm:hidden">
                <thead class="bg-white/20 text-white uppercase text-sm tracking-wider">
                    <tr>
                        <th class="px-6 py-4 font-semibold">Bidang</th>
                        <th class="px-6 py-4 font-semibold">Nama</th>
                        <th class="px-6 py-4 font-semibold text-right">Keterangan</th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-white/10 text-white/90">
                    <tr class="hover:bg-white/10 transition-colors duration-200" v-for="item in juara" :key="item.id">
                        <td class="px-6 py-4">{{ item.bidang }}</td>
                        <td class="px-6 py-4">
                            <p class="ml-2">{{ item.nama }}</p>
                            <p class="text-xs px-2 py-1 bg-blue-500/90 rounded-full inline-block">{{ item.pac }}</p>
                        </td>
                        <td class="px-6 py-4 text-right font-mono">{{ item.keterangan }}</td>
                    </tr>
                </tbody>
            </table>

            <div class="lg:hidden space-y-4">
                <div class="glass rounded-xl p-4" v-for="item in juara" :key="item.id">
                    <div class="flex justify-between items-center mb-2">
                        <span :class="colorCategory[item.bidang]" class="text-xs font-semibold p-1 rounded">{{
                            item.bidang
                            }}</span>
                        <span class="text-xs px-2 py-1 bg-blue-500/90 rounded-full">{{ item.keterangan }}</span>
                    </div>
                    <p class="text-lg font-medium">{{ item.nama }}</p>
                    <p class="text-xs text-white">{{ item.pac }}</p>
                </div>
            </div>

        </div>


        <ul class="space-y-3 pt-4">
            <li class="flex items-start gap-3 text-sm text-slate-200">
                <span
                    class="h-1.5 w-1.5 bg-emerald-400 rounded-full mt-1.5 shrink-0 shadow-[0_0_5px_rgba(52,211,153,0.8)]"></span>
                Kepada seluruh pemenang dimohon untuk hadir pada kegiatan buka bersama pada tanggal 14 April 2026
                di Kantor PCNU Kab. Trenggalek
            </li>
            <li class="flex items-start gap-3 text-sm text-slate-200">
                <span
                    class="h-1.5 w-1.5 bg-emerald-400 rounded-full mt-1.5 shrink-0 shadow-[0_0_5px_rgba(52,211,153,0.8)]"></span>
                Untuk seluruh peserta akan dikirimkan e-sertifikat melalui Nomor WhatsApp pribadi
            </li>
        </ul>

    </div>
</template>