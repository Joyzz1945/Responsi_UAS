// backend/data.js
const educationHistory = [ 
    { id: 1,
     period: '2023 - Sekarang',
     institution: 'Universitas AMIKOM Yogyakarta',
     major: 'S1 - Teknik Informatika' 
    },
    { id: 2,
     period: '2020 - 2023',
     institution: 'SMK Tamansiswa Jetis Yogyakarta',
     major: 'Teknik Multimedia' 
    }
];
const skills = [ 
    { name: 'Vue.js', level: 'Pemula' }, { name: 'JavaScript', level: 'Pemula' },
    { name: 'Tailwind CSS', level: 'Pemula' }, { name: 'Node.js', level: 'Pemula' },
    { name: 'Express.js', level: 'Pemula' }, { name: 'PostgreSQL', level: 'Pemula' },
    { name: 'Git & GitHub', level: 'Pemula' }, { name: 'HTML5 & CSS3', level: 'Pemula' },
];
const projects = [ 
    { title: 'Website Pace Mobil', image: '/src/assets/img/pacemobil.png',
    description: 'Final Project Kelompok Pemrograman Web', tech: ['Css# Js# HTML#'
], link: 'https://github.com/Ersieee/Fp_pemrogweb_10' },
    { title: 'Coming Soon', image: '/src/assets/img/comingsoon.png',
    description: 'Coming Soon', tech: ['-', '-'], link: '#' }
];
module.exports = { educationHistory, skills, projects };