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
        name: 'Chill Abstract Intention',
        artist: 'Coma-Media',
        url: 'https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3',
        cover: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&q=80'
      },
      {
        name: 'Lofi Study',
        artist: 'FASSounds',
        url: 'https://cdn.pixabay.com/audio/2022/05/13/audio_c2eb1d3c22.mp3',
        cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&q=80'
      },
      {
        name: 'Tech House Vibes',
        artist: 'Lexin_Music',
        url: 'https://cdn.pixabay.com/audio/2022/03/10/audio_4e1b364e5f.mp3',
        cover: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&q=80'
      }
    ]
  });
});
