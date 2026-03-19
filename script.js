// --- 1. NAVBAR MOBILE LOGIC (TAMBAHAN BARU) ---
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

if (menu) {
    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
}

// Tutup menu otomatis pas link diklik (Biar estetik)
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
}));

// --- 2. AOS INIT ---
AOS.init({ 
    duration: 1000, 
    once: false,
    mirror: true 
});

const grid = document.getElementById('membersGrid');

// --- 3. MESIN KETIK ESTETIK ---
const textElement = document.getElementById("typing-text");
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
    if(!section) return;
    const pos = section.getBoundingClientRect();

    if (pos.top < window.innerHeight - 100 && pos.bottom > 100) {
        if (!isTyping && textElement.textContent === "") {
            typeWriter();
        }
    } else {
        clearTimeout(currentTimeout);
        textElement.textContent = ""; 
        isTyping = false;
    }
});

// --- 4. TAB SYSTEM ---
function showTab(tabId) {
    document.querySelectorAll('.tab-pane').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.btn-nav').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// --- 5. JADWAL MAPEL ---
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
    if(!listContent || !title) return;
    
    title.innerText = day.charAt(0).toUpperCase() + day.slice(1);
    document.querySelectorAll('.day-btn').forEach(btn => btn.classList.remove('active'));
    if(event) event.currentTarget.classList.add('active');

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

window.onload = () => {
    const defaultBtn = document.querySelector('.day-btn');
    if(defaultBtn) defaultBtn.click(); 
};

// --- 6. MEMBER GRID (Daftar Siswa) ---
if(grid) {
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
        `;
}

// --- 7. AUDIO & LYRICS CONTROL ---
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

if(lyricsContainer) {
    lyricsContainer.innerHTML = ''; 
    dataLirik.forEach((item, index) => {
        const p = document.createElement('p');
        p.innerText = item.text;
        p.className = 'lyric-line';
        p.id = `lyric-${index}`;
        lyricsContainer.appendChild(p);
    });
}

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

if(audio) {
    audio.onloadedmetadata = () => {
        durationEl.innerText = formatTime(audio.duration);
    };

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

    audio.ontimeupdate = () => {
        const time = audio.currentTime;
        if (!isNaN(audio.duration)) {
            currentTimeEl.innerText = formatTime(time);
            progressBar.value = (time / audio.duration) * 100;
        }

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

    progressBar.oninput = () => {
        if (!isNaN(audio.duration)) {
            const seekTime = (progressBar.value / 100) * audio.duration;
            audio.currentTime = seekTime;
        }
    };

    audio.onended = () => {
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        visualizer.classList.remove('playing');
        lyricsContainer.style.transform = `translateY(0)`;
    };
}
