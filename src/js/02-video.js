import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
  }, 1000)
);

let videoTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player
  .setCurrentTime(videoTime)
  .then(function (seconds) {
    seconds = videoTime;
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
