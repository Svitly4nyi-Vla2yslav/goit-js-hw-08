import Player from '@vimeo/player';
import { async } from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframePlayer = document.querySelector('#vimeo-player');
const player = new Player(iframePlayer);

const saveCurrentTime = time => {
  localStorage.setItem('videoplayer-current-time', time);
};
const restoreCurrentTime = async () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    await player.setCurrentTime(savedTime);
  }
};
player.on(
  'timeupdate',
  throttle(evt => {
    const currentTime = evt.seconds;
    saveCurrentTime(currentTime);
  }, 1000)
);
player.ready().then(restoreCurrentTime);

