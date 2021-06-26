const COMMON = window.__COMMON__;
export const IMAGE_BASE_PATH = COMMON.reqUrl + 'extra/';
let static_path = COMMON.reqUrl + "static/";
if (process.env.NODE_ENV === 'development') {
  static_path = COMMON.localhost + "static/";
}

export const FRONT_STATIC_PATH = static_path;

export function getChannelAlias(channelObj) {
  let name = channelObj.channelName ? '-' + channelObj.channelName : '';
  return `通道${channelObj.channelId + 1}${name}`

}
export function getChannelId(channelObj) {
  return channelObj.channelId + 1
}

export function downloadFile(tagert) {
  console.log("tagert=",tagert)
  const a = document.createElement("a");
  a.download = tagert;
  a.href = COMMON.reqUrl + "extra/" + tagert;
  a.target = "_blank";
  document.documentElement.appendChild(a);
  a.click();
  document.documentElement.removeChild(a);
}

function getBase64(url) {
  function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    //canvas.hidden = true;
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var dataURL = canvas.toDataURL("image/png");
    // var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
    // var dataURL = canvas.toDataURL("image/" + ext);
    return dataURL;
  }
  return new Promise(function (resovle) {
    var image = new Image();
    image.crossOrigin = "";
    image.src = url;
    image.onload = function () {
      let base64 = getBase64Image(image);
      resovle(base64);
    };
  });
}