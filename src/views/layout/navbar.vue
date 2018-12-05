<template>
  <div class="navbar">
    <el-row type="flex" justify="space-between">
      <!-- title -->
      <el-col :span="6" class="title">vue-admin管理系统</el-col>
      <!-- userinfo -->
      <el-row :span="6" class="userinfo">
        <el-dropdown trigger="click">
          <!-- 用户名 -->
          <span class="username">{{ username }}</span>
          <!-- 头像 -->
          <img class="portrait" src="../../assets/images/logo.png" alt="头像">
          <el-dropdown-menu slot="dropdown">
            <!-- 个人中心 -->
            <el-dropdown-item>
              <i class="el-icon-setting"></i>
              <span>个人中心</span>
            </el-dropdown-item>
            <!-- 退出登录 -->
            <el-dropdown-item @click.native="logout">
              <i class="el-icon-d-arrow-right"></i>
              <span>退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'navbar',
  computed: {
    ...mapGetters({username: 'name'})
  },
  methods: {
    // 退出登录
    logout() {
      this.$store.dispatch('Logout')
        .then(res => {
          if (res.data.code === 2000) {
            this.$router.push({ name: 'login' })
            this.$message.success({ message: '已退出登录', duration: 1200, center: true })
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  .title{
    color: #333;
    font-size: 18px;
    font-weight: 400;
  }
  .userinfo{
    .username{
      cursor: pointer;
    }
    .portrait{
      width: 20px;
      height: 20px;
      margin: 0 0 0 2px;
      vertical-align: middle;
    }
  }
}
</style>
