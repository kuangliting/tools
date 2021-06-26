<template>
  <div :class="{ 'has-logo': false }">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <div style="height: 82px; line-height: 82px; margin-left: 23px">
        <!-- <span
          style="
            font-size: 18px;
            font-weight: 600;
            margin-right: 10px;
            color: #fff;
          "
        >度目</span> -->
        <span style="font-size: 14px; color: #fff">代码快速生成工具</span>
      </div>

      <!--    :active-text-color="variables.menuActiveText" :background-color="variables.menuBg" -->
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="'transparent'"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<style lang="scss">
.router-link-active {
  background: #007aff;
}
.el-submenu {
  .router-link-active {
    background: #007aff;
  }
}
</style>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import { constantRoutes } from '@/router'
export default {
  components: { SidebarItem },
  data() {
    return {
      permission_routes: constantRoutes
    }
  },
  computed: {
    ...mapGetters(['sidebar']),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
