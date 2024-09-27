<template>
  <main class="main">
    <div class="vj-container">
      <video
        muted
        loop
        ref="refVideo"
        class="vj-video"
        :class="{ 'vj-animation': playVj }"
        poster="/assets/vj_2_small_cover.jpg">
        <source src="/assets/media/vj_2_small.mp4" type="video/mp4">
      </video>
    </div>
    <audio
      class="vj-audio"
      :class="{ 'audio-animation': playVj }"
      src="/assets/media/the_acid.mp3"
      controls
      @play="handlePlay"
      @pause="handleStop">
      不支持放歌嗷
    </audio>
    {{ vjStyle }}
  </main>
</template>

<script setup>
import { ref } from 'vue';

const refVideo = ref(null);

const playVj = ref(false);

const handlePlay = () => {
  alert('麻烦带上耳机开会哈')
  const video = refVideo.value;
  video.play()
  playVj.value = true;
}

const handleStop = () => {
  const video = refVideo.value;
  video.pause()
  playVj.value = false;
}
</script>

<style scoped>
.main {
  margin: 100px 0 50px;
}

.vj-video {
  pointer-events: none;
  transition: border-radius 0.5s;
  max-width: 650px;
  margin: 0 auto;
  width: 40vw;
  min-width: 320px;
}

.vj-animation {
  animation: vj-anime 0.9s ease-in-out infinite, filter-anime 0.9s ease-in-out infinite;
}

.audio-animation {
  animation: audio-anime 0.9s ease-in-out infinite;
}

.vj-audio {
  width: 40vw;
  margin: 20px auto;
  min-width: 320px;
}

@keyframes filter-anime {
  0% {
    filter: none;
  }
  50% {
    filter: sepia(0.8);
  }
  100% {
    filter: none;
  }
}

@keyframes vj-anime {
  0% {
    border-radius: 20px 200px 200px 150px / 250px 250px 200px 50px;
    transform: translateX(0);
  }
  25% {
    border-radius: 100px 50px 150px 150px / 150px 150px 100px 50px;
    transform: translateX(80px) scale(0.95);
  }
  50% {
    border-radius: 100px 50px 100px 50px / 150px 50px 150px 250px;
    transform: scale(1);
  }
  75% {
    border-radius: 150px 0px 50px 50px / 150px 50px 50px 150px;
    transform: translateX(-20px) scale(0.95);
  }
  100% {
    border-radius: 20px 200px 200px 150px / 250px 250px 200px 50px;
  }
}
@keyframes audio-anime {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-20px) scale(0.95);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: translateX(10px) scale(0.95);
  }
}
</style>
