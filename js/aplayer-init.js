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
        name: 'Synthwave Dreams',
        artist: 'Alejandro Magaña (A.M.)',
        url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/M0gSjhmYRoCbs98GRf5ZPg2BVkWeVhBNAiLbGRlb.mp3',
        cover: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&q=80'
      },
      {
        name: 'Electronic Sunrise',
        artist: 'Kai Engel',
        url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/nSaq2Y9wR2TUfmMla7k7hwxSYEkmtALuG9CTViAd.mp3',
        cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&q=80'
      },
      {
        name: 'Digital Ambient',
        artist: 'Scott Buckley',
        url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/H0YSaDZsT0iBiYz2tKXOYQR1OEvbwDMbyWblbWe7.mp3',
        cover: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&q=80'
      }
    ]
  });
});
