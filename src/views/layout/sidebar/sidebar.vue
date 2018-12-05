<template>
  <div class="sidebar">
    <!-- logo -->
    <div class="logo">
      <img class="logo-img" src="../../../assets/images/logo.png" alt="logo">
      <span class="title">vue + element</span>
    </div>
    <!-- menu -->
    <el-menu 
      class="menu"
      mode="vertical"
      background-color="#3D4454"
      text-color="#ACADB0"
      active-text-color="#fff"
      :default-active="$route.path"
      :unique-opened="true"
      menu-trigger="click"
      :router="true"
      :collapse-transition="true">
      <!-- sidebar-item  -->
      <sidebar-item :menuRoutes="menuRoutes"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from './sidebaritem'
export default {
  name: 'sidebar',
  components: {
    SidebarItem
  },
  computed: {
    menuRoutes: function() {
      return this.$router.options.routes
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
  .logo{
    height: 60px;
    line-height: 60px;
    text-align: left;
    background-color: $themeColor;
    cursor: pointer;
    .logo-img{
      width: 24px;
      height: 24px;
      vertical-align: middle;
    }

  }

}
</style>

