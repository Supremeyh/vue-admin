<template>
    <div class="sidebaritem">
      <!-- menuRoutes --> 
      <template v-for="item in menuRoutes" v-if="!item.hidden">
        <!-- 无子元素 -->
        <el-menu-item v-if="!item.children" :index="item.path" :key="item.path">
          <i :class="item.meta.icon" class="" v-if="item.meta && item.meta.icon"></i>
          <span v-if="item.meta && item.meta.title">{{item.meta.title}}</span>
        </el-menu-item>
        <!-- 有一个子元素 -->
        <el-menu-item v-if="item.children && item.children.length===1" :index="item.path+'/'+item.children[0].path" :key="item.path">
          <i :class="item.meta.icon" class="" v-if="item.meta && item.meta.icon"></i>
          <span v-if="item.meta && item.meta.title">{{item.meta.title}}</span>
        </el-menu-item>
         <!-- 有多个子元素 -->
         <el-submenu v-if="item.children && item.children.length>1" :index="item.path" :key=item.path>
           <template slot="title">
             <i :class="item.meta.icon" class="" v-if="item.meta && item.meta.icon"></i>
             <span v-if="item.meta && item.meta.title">{{item.meta.title}}</span>
           </template>
           <el-menu-item v-for="pitem in item.children" v-if="!pitem.hidden" :index="item.path+'/'+pitem.path" :key="pitem.path">
             <span v-if="pitem.meta && item.meta.title">{{pitem.meta.title}}</span>
           </el-menu-item>
         </el-submenu>
      </template>
    </div>
</template>

<script>
export default {
  name: 'sidebaritem',
  props: {
    menuRoutes: {
      type: Array,
      required: true
    }
  } 
}
</script>

<style lang="scss">
.sidebaritem{
  text-align: left;
  // iconfont
  .iconfont{
    padding-right: 5px;
    font-size: 18px;
  }
  .icon-x-enterprise{
    font-size: 16px;
  }
  .icon-x-setting{
    font-size: 20px;
  }
  // 当前点击的菜单栏
  .el-menu-item.is-active{
    background-color:#313643 !important;
    &:after{
      position: absolute;
      top: 0;
      right: -4px;
      content: '';
      width: 4px;
      height: 100%;
      border-left: 4px solid #FFC851;
    }
  }
}
</style>
