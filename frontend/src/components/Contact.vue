<script setup>
import SectionTitle from './SectionTitle.vue';

function openGmail() {
  const email = 'ardiandwisucipto@students.amikom.ac.id';
  const subject = 'Kontak dari Website';
  const body = 'Halo, saya tertarik untuk menghubungi Anda...';

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(gmailUrl, '_blank');
}
</script>

<template>
<footer id="kontak" class="py-20 bg-gray-800 text-white">
<div class="container mx-auto px-6 text-center">
<SectionTitle title="Hubungi Saya" />
<p class="text-xl text-gray-300 mb-8">Jangan ragu untuk terhubung atau bertanya.</p>
<button @click="openGmail"
        class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block mb-12">
        Kirim Email
</button>
<div class="flex justify-center space-x-6 mb-8">

<a href="https://github.com/Joyzz1945" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300">GitHub</a>

<a href="https://www.instagram.com/ardiannyk?igsh=dTF1NWhxcTY0aDNs" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300">Instagram</a>

</div>
<p class="text-gray-500">&copy; {{ new Date().getFullYear() }} Ardian Dwi Sucipto. Saya siap bekerja di Perusahaan Anda ^w^
</p>
</div>
</footer>
</template>
