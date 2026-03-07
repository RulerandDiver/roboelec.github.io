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
        name: 'Bensound - Sunny',
        artist: 'Bensound',
        url: 'https://www.bensound.com/bensound-music/bensound-sunny.mp3',
        cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80'
      },
      {
        name: 'Bensound - Ukulele',
        artist: 'Bensound',
        url: 'https://www.bensound.com/bensound-music/bensound-ukulele.mp3',
        cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&q=80'
      },
      {
        name: 'Bensound - Creative Minds',
        artist: 'Bensound',
        url: 'https://www.bensound.com/bensound-music/bensound-creativeminds.mp3',
        cover: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=300&q=80'
      },
      {
        name: 'Bensound - Acoustic Breeze',
        artist: 'Bensound',
        url: 'https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3',
        cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&q=80'
      }
    ]
  });
});
