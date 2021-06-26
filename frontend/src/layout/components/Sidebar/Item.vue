<script>
export default {
  name: "MenuItem",
  functional: true,
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  render(h, context) {
    const { icon, title } = context.props;
    const vnodes = [];

    if (icon) {
      if (icon.indexOf("el-") !== -1) {
        vnodes.push(<i class={icon + " item-icon"} />);
      } else {
        vnodes.push(<svg-icon icon-class={icon} />);
      }
      //
    }

    if (title) {
      vnodes.push(<span slot="title">{title}</span>);
    }
    return vnodes;
  },
};
</script>
<style lang="scss">
.sidebar-container {
  .item-icon {
    color: #bfcbd9;
    display: inline-block;
    margin-left: -5px;
    margin-right: 11px;
    width: 24px;
    text-align: center;
    font-size: 17px;
  }
}
</style>
