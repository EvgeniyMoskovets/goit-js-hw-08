import Player from '@vimeo/player';

const player = new Player('handstick', {});

player.on('play', function () {
  console.log('played the video!');
});
