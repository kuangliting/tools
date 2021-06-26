export function record() {
  let canvasElement = document.createElement("canvas");
  let videoElement = document.querySelector("#srcvideo");
  // let canvasElement = document.querySelector("#video-canves");
  let frameId = null;
  let chunks = [];
  canvasElement.width = videoElement.clientWidth;
  canvasElement.height = videoElement.clientHeight;

  //console.log(videoElement.clientWidth,videoElement.clientHeight)
  //设置画布背景
  const canvasContext = canvasElement.getContext("2d");
  canvasContext.fillStyle = 'white';
  //canvasContext.fillStyle = "deepskyblue";
  canvasContext.fillRect(
    0,
    0,
    videoElement.clientWidth,
    videoElement.clientHeight
  );

  //创建MediaRecorder，设置媒体参数
  const stream = canvasElement.captureStream(60);
  const recorder = new MediaRecorder(stream, {
    mimeType: "video/webm;codecs=vp8", // "video/webm;codecs=vp8",

  });
  recorder.ondataavailable = (e) => {
    chunks.push(e.data);
  };

  function start() {
    chunks = [];
    recorder.start(10);
    drawFrame();
  }

  function end() {
    cancelAnimationFrame(frameId);
    download();
    recorder.stop();

  }

  //播放视频
  function drawFrame() {
    canvasContext.drawImage(
      videoElement,
      0,
      0,
      videoElement.clientWidth,
      videoElement.clientHeight
    );
    frameId = requestAnimationFrame(drawFrame);
  }

  function download() {
    let blob = new Blob(chunks);
    let url = window.URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.href = url;
    link.download = new Date().getTime() + "video_webm;codecs=vp8" + ".mp4";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  start();

  return {
    end
  }
}

export function useVideo() {
  const bufferRef = {};
  const videoRef = {};

  const ms = new MediaSource();
  const src = URL.createObjectURL(ms);
  const queue = [];

  ms.addEventListener("sourceopen", () => {
    const buffer = ms.addSourceBuffer('video/mp4; codecs="avc1.42E01E"');
    buffer.addEventListener("update", () => {
      if (document.visibilityState === 'hidden') {
        cleanPrevBuffer();
      }
      if (queue.length > 0 && !buffer.updating) {
        buffer.appendBuffer(queue.shift());
      }
    });
    bufferRef.current = buffer;
  });

  function onMessage(event) {
    //console.log("接收到视频数据~~~")
    const buffer = bufferRef.current;
    const payload = event.data;
    if (!buffer) {
      return;
    }
    if (!(payload instanceof ArrayBuffer)) {
      return;
    }
    if (document.visibilityState === 'hidden') {
      cleanPrevBuffer();
    }
    // || queue.length > 0
    // appendWindowEnd: Infinity
    // appendWindowStart: 0
    // buffered: TimeRanges {length: 6}
    // mode: "segments"
    // onabort: null
    // onerror: null
    // onupdate: null
    // onupdateend: null
    // onupdatestart: null
    // timestampOffset: 0
    // updating: false
    if (buffer.updating) {
      queue.push(payload);
    } else {
      buffer.appendBuffer(payload);
    }
  }

  function cleanPrevBuffer() {
    const buffer = bufferRef.current;
    //console.log(videoRef.current);
    if (
      buffer &&
      !buffer.updating &&
      buffer.buffered.length > 0 &&
      videoRef.current
    ) {
      const start = buffer.buffered.start(0);
      const end = buffer.buffered.end(0);
      videoRef.current.currentTime = end;
      if (start < end - 5) {
        buffer.remove(start, end - 5);
      }
    }
  }

  ms.addEventListener("sourceclose", () => {
    cleanPrevBuffer();
    bufferRef.current = null;
    queue.slice(0, queue.length);
  });

  return {
    onMessage,
    src,
    videoRef
  };
}
