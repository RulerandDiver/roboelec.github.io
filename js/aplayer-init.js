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
        name: '天空之城',
        artist: '久石让',
        url: 'https://music.163.com/song/media/outer/url?id=427570778.mp3',
        cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80'
      },
      {
        name: '千与千寻 - 永远同在',
        artist: '久石让',
        url: 'https://music.163.com/song/media/outer/url?id=412902239.mp3',
        cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&q=80'
      },
      {
        name: '龙猫',
        artist: '久石让',
        url: 'https://music.163.com/song/media/outer/url?id=745956.mp3',
        cover: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=300&q=80'
      },
      {
        name: '晴天',
        artist: '周杰伦',
        url: 'https://music.163.com/song/media/outer/url?id=186016.mp3',
        cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&q=80'
      },
      {
        name: '稻香',
        artist: '周杰伦',
        url: 'https://music.163.com/song/media/outer/url?id=185811.mp3',
        cover: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=300&q=80'
      },
      {
        name: '七里香',
        artist: '周杰伦',
        url: 'https://music.163.com/song/media/outer/url?id=185868.mp3',
        cover: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=300&q=80'
      }
    ]
  });
});
