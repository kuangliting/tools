import random from '@/utils/random'

export const getTableHeightMixin = function(height) {
  return {
    data() {
      return {
        tableHeight: document.body.clientHeight - height
      };
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.resize);
    },
    methods: {
      resize() {
        if (document.body.clientHeight - height !== this.tableHeight) {
          this.tableHeight = document.body.clientHeight - height;
        }
      }
    },
    mounted() {
      window.addEventListener("resize", this.resize);
    }
  };
};

export const screenMixin = {
  data() {
    return {
      height: document.body.clientHeight
    };
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },
  methods: {
    resize() {
      if (document.body.clientHeight !== this.height) {
        this.height = document.body.clientHeight;
      }
    }
  },
  mounted() {
    window.addEventListener("resize", this.resize);
  }
};

export const getPageMixin = function() {
  const socketRef = {};
  const protobuf = window.__PROTOBUF__;
  return {
    beforeDestroy() {
      if (socketRef.current) {
        socketRef.current.close();
      }
    },
    mounted() {
      socketRef.current = new WebSocket(common.socketUrl, "web-proto");
      socketRef.current.binaryType = "arraybuffer";
      if (this.open) {
        socketRef.current.onopen = () => {
          this.open();
        };
      }
      socketRef.current.onmessage = event => {
        //console.log("接收到数据~~~")
        if (!(event.data instanceof ArrayBuffer)) {
          return null;
        }
        const msg = protobuf.baidu.dumu.WebMessage.deserializeBinary(
          event.data
        );
        // console.log("msg.toObject()=");
         console.log(msg.toObject());
        if (this.getAction && msg.hasAction()) {
          //  console.log("获取action")
          this.getAction(msg.getAction().toObject());
        }
        if (this.getInfo && msg.hasInfo()) {
          // console.log("获取info")
          this.getInfo(msg.getInfo().toObject());
        }
        if (this.getConfig && msg.hasConfig()) {
          //console.log("获取config")
          this.getConfig(msg.getConfig().toObject());
        }
        if (this.getActionResult && msg.hasActionResult()) {
          // console.log("获取ActionResult")
          this.getActionResult(msg.getActionResult().toObject());
        }
      };
      socketRef.current.onerror = event => {
        this.$message.error("网络连接失败");
      };
    },
    methods: {
      send(all_action) {
        try {
          const all_message = new protobuf.baidu.dumu.WebMessage();
          all_message.setAction(all_action);
          const bytes = all_message.serializeBinary();
          socketRef.current.send(bytes);
        } catch (e) {
          this.$message.error("网络断开");
        }
      },
      closeWebsocket() {
        if (socketRef.current) {
          socketRef.current.close();
        }
      }
    }
  };
};
