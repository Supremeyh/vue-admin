<template>
  <div class="login">
    <div class="content">
      <div class="panel">
        <!-- header -->
        <div class="header">
          <img src="../../assets/images/logo.png" alt="logo">
        </div>
        <!-- form -->
        <el-form class="form" ref="form" :model="form" :rules="rules" status-icon>
          <!-- email -->
          <el-form-item class="input" prop="email">
            <el-input v-model="form.email" placeholder="请输入登录邮箱"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        name: '',
        password: '',
        captcha: ''
      },
      rules: {

      }
    }
  },
  mounted(){
    this.$nextTick(function(){

    })
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.login{
  color: $themeColor;
  background: $bgColor;
  text-align: center;
  z-index: 1;
  box-sizing: border-box;
  .content{
    .panel{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 400px;
      height: 450px;
      margin: -225px 0 0 -200px;
      padding: 40px 40px;
      border: 1px solid #EBEBEB;
      border-radius: 5px;
      background: #fff;
      // header
      .header{

      }
      .form{

      }
    }
  }
}
</style>
