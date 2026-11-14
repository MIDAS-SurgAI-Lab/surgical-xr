// Keep only the requested clip playing; there is no automatic playback.
const videos = [...document.querySelectorAll('video')];
for (const video of videos) video.addEventListener('play', () => {
  for (const other of videos) if (other !== video) other.pause();
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) for (const video of videos) video.pause();
});
