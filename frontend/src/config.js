const host = window.location.hostname;
const port = window.location.port;
const devCommon = {
  socketUrl: "ws://" + host + ":" + port + "/s1/",
  videoUrl: "ws://" + host + ":" + port + "/s2/",
  reqUrl: "http://" + host + ":" + port + "/api/",
  localhost: "http://" + host + ":" + port + "/",
  version: "1.0.0" //版本号
};
const prodCommon = {
  socketUrl: "ws://" + host + ":" + port + "/",
  reqUrl: "http://" + host + ":" + port + "/",
  videoUrl: "ws://" + host + ":17681/",
  localhost: "http://" + host + ":" + port + "/",
  version: "1.0.0" //版本号
};
const common = process.env.NODE_ENV === "production" ? prodCommon : devCommon;
window.__COMMON__ = window.common = common
