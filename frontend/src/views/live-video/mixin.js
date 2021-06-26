//const p = 575 / 1025;
//const p = 0.75;
//const p = 884/1173;
const p = 419/744;//height/width
//const p = 760/430;
export const getHeightMixin = function (height, propName, width, wPropName) {
  return {
    data() {
      let h = document.body.clientHeight - height,
        w = document.body.clientWidth - width;
      if (h / w < p) {
        w = h / p;
      } else {
        h = p * w;
      }
      return {
        [propName]: h,
        [wPropName]: w,
      }
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.resize);
    },
    watch: {
      isFullscreen(val) {
        this.resize();
      }
    },
    methods: {
      resize() {
        let h = this[propName],
          w = this[wPropName];
        if (!this.isFullscreen) {
          if (document.body.clientHeight - height !== this[propName]) {
            h = document.body.clientHeight - height;
          }
          if (document.body.clientWidth - width !== this[wPropName]) {
            w = document.body.clientWidth - width;
          }
        } else {
          const FullScreenScale = {
            p100: 0,
            p75: 0.25,
            p50: 0.5,
          };
          let height = document.body.clientHeight * FullScreenScale.p100,
            width = document.body.clientWidth * FullScreenScale.p100;
            if (document.body.clientHeight - height !== this[propName]) {
              h = document.body.clientHeight - height;
            }
          if (document.body.clientWidth - width !== this[wPropName]) {
            w = document.body.clientWidth - width;
          }
        }

        if (h / w < p) {
          w = h / p;
        } else {
          h = p * w;
        }
        this[propName] = h;
        this[wPropName] = w;
        // console.log("-------------------");
        // console.log(screen.availHeight,screen.availWidth);
        // console.log(document.body.clientHeight,document.body.clientWidth);

      },
    },
    mounted() {
      window.addEventListener("resize", this.resize);
    }
  }
}
