<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return []
      // return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss">
$margintop:60px;
.app-main {
  /* 50= navbar  50  */
 // min-height: calc(100vh - $margintop);
  height: calc(100vh - 60px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

// .fixed-header+.app-main {
//   padding-top: $margintop;
// }

// .hasTagsView {
//   .app-main {
//     /* 84 = navbar + tags-view = 50 + 34 */
//     height: calc(100vh - $margintop);
//   }

//   .fixed-header+.app-main {
//     padding-top: 84px;
//   }
// }
</style>

