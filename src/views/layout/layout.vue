<template>
  <el-container class="layout">
    <!-- aside -->
    <el-aside class="aside" width="180px">
      <!-- side-bar -->
      <side-bar></side-bar>
    </el-aside>
    <el-container>
      <!-- header -->
      <el-header class="header" height="60px">
        <!-- nav-bar -->
        <nav-bar></nav-bar>
      </el-header>
      <!-- main -->
      <el-main class="main">
        <!-- app-main -->
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavBar from './navbar'
import SideBar from './sidebar/sidebar'
import AppMain from './appmain'
export default {
  name: 'layout',
  components: {
    NavBar,
    SideBar,
    AppMain
  }
}
</script>

<style lang="scss" scoped>
.layout{
  height: 100%;
  overflow: hidden;
  .aside{
    height: 100%;
    background-color: #3D4454;
  }
  .header{
    line-height: 60px;
    border-bottom: 1px solid #ccc;
  }
  .main{
    padding: 35px;
    background-color: $bgColor
  }

}
</style>
