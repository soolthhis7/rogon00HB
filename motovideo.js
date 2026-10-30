// Плавна прокрутка меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Плейлист відео
const playlist = [
  {
    title: "Вертикальне відео 1",
    src: "video_2026-10-27_22-14-59 (1).mp4"
  },
  {
    title: "Вертикальне відео 2",
    src: "video_2026-10-27_22-14-56 (1).mp4"
  },
  {
    title: "Вертикальне відео 3",
    src: "video_2026-10-27_22-14-53 (1).mp4"
  },
  {
    title: "Вертикальне відео 4",
    src: "video_2026-10-27_22-14-50 (1).mp4"
  },
  {
    title: "Вертикальне відео 5",
    src: "video_2026-10-27_22-14-47 (1).mp4"
  },
  {
    title: "Вертикальне відео 6",
    src: "video_2026-10-27_22-14-43 (1).mp4"
  },
];

let currentIndex = 0;

const videoPlayer = document.getElementById('videoPlayer');
const videoTitle = document.getElementById('videoTitle');
const videoCounter = document.getElementById('videoCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function loadVideo(index) {
  const currentVideo = playlist[index];
  
  // Оновлюємо текст заголовка та лічильника
  videoTitle.textContent = currentVideo.title;
  videoCounter.textContent = `Відео ${index + 1} з ${playlist.length}`;

  // Встановлюємо джерело та примусово завантажуємо
  videoPlayer.src = currentVideo.src;
  videoPlayer.load();
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  loadVideo(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % playlist.length;
  loadVideo(currentIndex);
});

// Первинне завантаження першого відео при старті сторінки
loadVideo(currentIndex);
