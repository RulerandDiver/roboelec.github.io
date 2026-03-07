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
        name: '反方向的钟',
        artist: '周杰伦',
        url: '/roboelec.github.io/music/未知歌手 - 反方向的钟.mp3',
        cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&q=80'
      }
    ]
  });
});
