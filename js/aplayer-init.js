document.addEventListener('DOMContentLoaded', function () {
  if (typeof APlayer === 'undefined') return;

  var ap = new APlayer({
    container: document.getElementById('roboelec-player'),
    fixed: true,
    mini: true,
    autoplay: false,
    volume: 0.4,
    order: 'random',
    preload: 'auto',
    lrcType: 0,
    audio: [
      {
        name: 'Summer (菊次郎的夏天)',
        artist: '久石让',
        url: 'https://cdn.jsdelivr.net/gh/metowolf/MetingJS@1.2/assets/summer.mp3',
        cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80'
      },
      {
        name: 'Relaxing Piano',
        artist: 'Peaceful Music',
        url: 'https://cdn.pixabay.com/audio/2022/03/15/audio_4037a62f6e.mp3',
        cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&q=80'
      },
      {
        name: 'Lofi Chill',
        artist: 'Chill Beats',
        url: 'https://cdn.pixabay.com/audio/2022/08/02/audio_6a00e61b58.mp3',
        cover: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=300&q=80'
      },
      {
        name: 'Inspiring Cinematic',
        artist: 'Orchestral',
        url: 'https://cdn.pixabay.com/audio/2022/03/24/audio_c8a891c4e0.mp3',
        cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&q=80'
      },
      {
        name: 'Acoustic Guitar',
        artist: 'Relaxing',
        url: 'https://cdn.pixabay.com/audio/2022/10/25/audio_13d83b5d72.mp3',
        cover: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=300&q=80'
      }
    ]
  });
});
