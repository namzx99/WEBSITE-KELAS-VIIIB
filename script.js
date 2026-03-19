AOS.init({ 
    duration: 1000, 
    once: false,
    mirror: true 
});

const grid = document.getElementById('membersGrid');
// --- MESIN KETIK ESTETIK (BISA REPEAT) ---
const textElement = document.getElementById("typing-text");
// TULIS TEKSNYA DI SINI (PASTIKAN SPASINYA SUDAH BENAR)
const fullText = "Kami adalah siswa kelas VIII B yang berdedikasi untuk mengembangkan Skill, Kreativitas dan Solidaritas dalam lingkungan sekolah. kami siswa coding mutulinggga... Bener,Pinter,Trampil.";
let isTyping = false;
let currentTimeout;

function typeWriter() {
    if (isTyping) return;
    isTyping = true;
    textElement.innerText = ""; 
    let index = 0;

    function nextChar() {
        if (index < fullText.length) {
            // Pakai textContent biar spasi dibaca murni apa adanya
            textElement.textContent += fullText.charAt(index);
            index++;
            currentTimeout = setTimeout(nextChar, 40); 
        } else {
            isTyping = false;
        }
    }
    nextChar();
}

window.addEventListener('scroll', () => {
    const section = document.getElementById('about');
    const pos = section.getBoundingClientRect();

    if (pos.top < window.innerHeight - 100 && pos.bottom > 100) {
        if (!isTyping && textElement.textContent === "") {
            typeWriter();
        }
    } else {
        // Reset kalau keluar layar biar bisa ngetik ulang (Estetik 🗿)
        clearTimeout(currentTimeout);
        textElement.textContent = ""; 
        isTyping = false;
    }
});

function showTab(tabId) {
    // Sembunyikan semua tab
    document.querySelectorAll('.tab-pane').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Nonaktifkan semua tombol
    document.querySelectorAll('.btn-nav').forEach(btn => {
        btn.classList.remove('active');
    });

    // Tampilkan tab yang diklik
    document.getElementById(tabId).classList.add('active');
    
    // Aktifkan tombol yang diklik
    event.currentTarget.classList.add('active');
}
const jadwalMapel = {
    monday: [
        { nama: "Coding", jam: "07.00-08.00" },
        { nama: "Matematika", jam: "08.00-09.00", special: true },
        { nama: "Ips", jam: "09.00-11.00", special: true },
        { nama: "Pkn", jam: "11.00-12.00" },
        { nama: "Ipa", jam: "13.00-14.00" }
    ],
    tuesday: [
        { nama: "Coding", jam: "07.00-08.40" },
        { nama: "Kokurikuler", jam: "08.40-09.40" },
        { nama: "Matematika", jam: "09.40-10.20", special: true },
        { nama: "Bahasa Indonesia", jam: "10.20-11.40" },
        { nama: "BK", jam: "11.40-12.20", special: true },
        { nama: "Informatika", jam: "12.20-13.40" }
    ],
    wednesday: [
        { nama: "Coding", jam: "07.00-08.00" },
        { nama: "Pjok", jam: "08.00-09.30", special: true },
        { nama: "Bahasa Indonesia", jam: "10.00-11.00" },
        { nama: "Kemuhammadiyahan", jam: "11.00-11.30" },
        { nama: "B.Arab", jam: "13.00-14.00" }
    ],
    thursday: [
        { nama: "Coding", jam: "07.00-08.00" },
        { nama: "Dhua", jam: "08.00-08.30" },
        { nama: "QH", jam: "08.30-09.30" },
        { nama: "Seni budaya", jam: "10.00-11.00", special: true },
        { nama: "B.Jawa", jam: "11.00-12.00" },
        { nama: "Akidah Akhlak", jam: "13.00-14.00" }
    ],
    friday: [
        { nama: "Fikih", jam: "07.00-08.00" },
        { nama: "SKI", jam: "08.00-09.00" },
        { nama: "B.Inggris", jam: "09.00-11.00", special: true },
    ],
    saturday: [
        { nama: "Tahsin", jam: "07.00-08.00" },
        { nama: "TQ", jam: "08.00-09.00" },
        { nama: "IPA", jam: "10.00-10.30" }
    ]
};

function changeDay(day) {
    const listContent = document.getElementById('schedule-list-content');
    const title = document.getElementById('current-day-title');
    
    // Update Judul
    title.innerText = day.charAt(0).toUpperCase() + day.slice(1);

    // Update Button Active
    document.querySelectorAll('.day-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Generate HTML List
    let html = '';
    jadwalMapel[day].forEach(item => {
        const highlightClass = item.special ? 'highlight' : '';
        html += `
            <div class="sched-item ${highlightClass}">
                <span>${item.nama}</span>
                <span>${item.jam}</span>
            </div>`;
    });
    listContent.innerHTML = html;
}

// Panggil fungsi pertama kali buat nampilin Senin
window.onload = () => {
    // Pastikan fungsi ini jalan setelah semua elemen siap
    const defaultBtn = document.querySelector('.day-btn');
    if(defaultBtn) defaultBtn.click(); 
};

// DAFTAR MANUAL 31 SISWA
// Lo tinggal copy-paste baris ini kalau mau nambah/ubah detail tiap orang
grid.innerHTML = `
    <div class="member-card" data-aos="fade-up">
        <div class="member-img"><img src="WhatsApp Image 2026-03-18 at 15.09.05.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>ABYAN FIKRI MUSYAFAH</h4>
        <p>Wakil Ketua Kelas VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="100">
        <div class="member-img"><img src="WhatsApp Image 2026-03-18 at 15.09.14.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>AFIKA NUR RAMADHANI</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="200">
        <div class="member-img"><img src="WhatsApp Image 2026-03-18 at 15.09.60.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>ALISA RAHAYU</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="300">
        <div class="member-img"><img src="WhatsApp Image 2026-03-18 at 15.09.19.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>ANAJWA NABILATUN KHAIRUN NISA</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up">
        <div class="member-img"><img src="ss" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>ARUM ISTIQOMAH</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="100">
        <div class="member-img"><img src="agus.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>BINTANG ANDIKA PERMANA</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="200">
        <div class="member-img"><img src="man.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>BINTANG FAIZUL MUBAROK</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="300">
        <div class="member-img"><img src="WhatsApp Image 2026-03-18 at 15.09.13.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>DEVA SAFARULLAH</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up">
        <div class="member-img"><img src="sosro.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>DIMAS ARJUNAN TOUVANY</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="100">
        <div class="member-img"><img src="WhatsApp Image 2026-03-18 at 15.09.89.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>EVA OKTIFIANI</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="200">
        <div class="member-img"><img src="siswa11.jpg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>FADLI NUR HAKIM</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="300">
        <div class="member-img"><img src="king namz.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>FAIZ KHOIRUL ANAM</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up">
        <div class="member-img"><img src="WhatsApp Image 2026-03-18 at 15.09.11.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>FATIHUL WAFIQ RADHISTYAWAN</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="100">
        <div class="member-img"><img src="idk.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>FELISIA PUTRI AURORA</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="200">
        <div class="member-img"><img src="siswa15.jpg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>FITMA CLARISTA</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="300">
        <div class="member-img"><img src="siswa16.jpg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>HANAN ZEIN AL HAZMI</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up">
        <div class="member-img"><img src="WhatsApp Image 2026-03-18 at 16.12.24.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>HAURA HUSNA AZIZAH INDRI</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="100">
        <div class="member-img"><img src="xdz.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>IMELDA PRAMONO PUTRI</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="200">
        <div class="member-img"><img src="siswa19.jpg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>JAUZA ZAHRA ARIF</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="300">
        <div class="member-img"><img src="WhatsApp Image 2026-03-18 at 15.09.15.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>MARLIANA RIZKI GUSTRIANI</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up">
        <div class="member-img"><img src="farhan.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>MUHAMMAD FARHAN ARROYAN</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="100">
        <div class="member-img"><img src="WhatsApp Image 2026-03-18 at 15.09.70.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>RESTU ALAMSYAH</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="200">
        <div class="member-img"><img src="WhatsApp Image 2026-03-18 at 15.09.86.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>RIZKA MAULIDIYAH</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="300">
        <div class="member-img"><img src="WhatsApp Image 2026-03-18 at 16.49.01.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>SALWA NAFISAH</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up">
        <div class="member-img"><img src="sat.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>SATRIA DWI SAPUTRA</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="100">
        <div class="member-img"><img src="WhatsApp Image 2026-03-18 at 15.09.80.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>SITI ZAHRA TUNIKMAH</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="200">
        <div class="member-img"><img src="siswa27.jpg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>YUMNA ATSSILAH RAMADHANI</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="300">
        <div class="member-img"><img src="WhatsApp Image 2026-03-18 at 15.09.10.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>ZAHRA SEPTIANI</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up">
        <div class="member-img"><img src="LELE .jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>AKMAL ZAIDAN KAMIL</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="100">
        <div class="member-img"><img src="WhatsApp Image 2026-03-18 at 16.12.23.jpeg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>AFIFAH NUR LILYANA</h4>
        <p>Member VIII B</p>
    </div>

    <div class="member-card" data-aos="fade-up" data-aos-delay="200">
        <div class="member-img"><img src="siswa31.jpg" onerror="this.src='https://via.placeholder.com/150'"></div>
        <h4>FARZAN ANARGYA BAGUS</h4>
        <p>Member VIII B</p>
    </div>
`;

// --- BAGIAN AUDIO & LYRICS CONTROL (FIX LENGKAP) ---
const audio = document.getElementById('mainAudio');
const playBtn = document.getElementById('playBtn');
const visualizer = document.getElementById('visualizer');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const lyricsContainer = document.getElementById('lyricsContainer');
const dataLirik = [
    { time: 0.0, text: "Teman datang ketika lagi butuh saja" },
    { time: 4.0, text: "Coba kalau lagi susah" },
    { time: 7.0, text: "Mereka semua menghilang,tante" },
    { time: 16.0, text: "TANTEEEE" },
    { time: 19.2, text: "TANTEEEEEE!" },
    { time: 23.1, text: "TANTEEEEEE" },
    { time: 27.1, text: "TANTEEEEEE!" },
    { time: 30.1, text: "TANTEEE" },
    { time: 34.1, text: "TANTEEEEEE!" },
    { time: 37.3, text: "TANTEEE" }
];

// 1. Inisialisasi Lirik ke HTML
lyricsContainer.innerHTML = ''; 
dataLirik.forEach((item, index) => {
    const p = document.createElement('p');
    p.innerText = item.text;
    p.className = 'lyric-line';
    p.id = `lyric-${index}`;
    lyricsContainer.appendChild(p);
});

// 2. Fungsi Format Waktu (Menit:Detik)
function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

// 3. Set Durasi saat Audio Load
audio.onloadedmetadata = () => {
    durationEl.innerText = formatTime(audio.duration);
};

// 4. Tombol Play/Pause
playBtn.onclick = () => {
    if (audio.paused) {
        audio.play().then(() => {
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            visualizer.classList.add('playing');
        }).catch(() => alert("File musik tidak ditemukan!"));
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        visualizer.classList.remove('playing');
    }
};

// 5. Update Progress & Lirik (Saat Lagu Jalan)
audio.ontimeupdate = () => {
    const time = audio.currentTime;
    
    // Update Teks Menit & Progress Bar
    if (!isNaN(audio.duration)) {
        currentTimeEl.innerText = formatTime(time);
        progressBar.value = (time / audio.duration) * 100;
    }

    // Update Lirik (Scroll Otomatis)
    dataLirik.forEach((item, index) => {
        if (time >= item.time) {
            document.querySelectorAll('.lyric-line').forEach(l => l.classList.remove('active'));
            const activeLine = document.getElementById(`lyric-${index}`);
            if (activeLine) {
                activeLine.classList.add('active');
                lyricsContainer.style.transform = `translateY(-${index * 40}px)`;
            }
        }
    });
};

// 6. FUNGSI GESER PROGRESS BAR (Biar Normal Lagi)
progressBar.oninput = () => {
    if (!isNaN(audio.duration)) {
        const seekTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    }
};

// 7. Reset saat lagu selesai
audio.onended = () => {
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    visualizer.classList.remove('playing');
    lyricsContainer.style.transform = `translateY(0)`;
};
