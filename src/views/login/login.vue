<template>
  <div class="login">
    <div class="content">
      <div class="panel">
        <!-- header -->
        <div class="header">
          <img class="logo-img" src="../../assets/images/logo.png" alt="logo">
        </div>
        <!-- form -->
        <el-form class="form" ref="form" :model="form" :rules="rules">
          <!-- email -->
          <el-form-item class="input" prop="email">
            <el-input v-model="form.email" placeholder="请输入登录邮箱"></el-input>
          </el-form-item>
          <!-- password -->
          <el-form-item class="input" prop="password">
            <el-input v-model="form.password" placeholder="请输入登录密码" :type="passwordType">
              <i slot="suffix" class="el-icon-view" @click="togglePasswordType"></i>
            </el-input>
          </el-form-item>
          <!-- captcha -->
          <el-form-item class="input captcha" prop="captcha">
            <el-input v-model="form.captcha" placeholder="请输入验证码" type="password"></el-input>
            <img class="captcha-img" :src="captchaPic" alt="">
          </el-form-item>
          <!-- remenber -->
          <el-form-item class="remenber">
            <!-- 记住我 -->
            <el-checkbox v-model="checked">记住我</el-checkbox>
            <!-- 忘记密码 -->
            <el-tooltip class="item" effect="dark" content="请联系管理员" placement="right" transition="el-fade-in-linear" :visible-arrow="true">
              <el-button class="forget" type="text">忘记密码？</el-button>
            </el-tooltip>
          </el-form-item>
          <!-- submit -->
          <el-form-item class="submit">
            <el-button type="primary" @click.native="handleLogin('form')" :loading="loading">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { regEmail, regPassword } from '../../utils/validate.js'
export default {
  name: 'login',
  data() {
    // validate
    const checkEmail = (rule, value, cb) => {
      if (!value) {
        cb(new Error('邮箱不能为空'))
      } else if (!regEmail.test(value)) {
        cb(new Error('请输入正确的邮箱'))
      } else {
        cb()
      }
    }
    
    const checkPassword = (rule, value, cb) => {
      if (!value) {
        cb(new Error('密码不能为空'))
      } else if (value.length < 6 || value.length > 20) {
        cb(new Error('请输入6至20位密码'))
      } else if (!regPassword.test(value)) {
        cb(new Error('包括数字、大小写字母和特殊字符'))
      } else {
        cb()
      }
    }

    const checkCaptcha = (rule, value, cb) => {
      if (!value) {
        cb(new Error('验证码不能为空'))
      } else {
        cb()
      }
    }

    return {
      // form
      form: {
        email: '',  // 登录邮箱
        password: '', // 登录密码
        captcha: '' // 验证码
      },
      captchaPic: require('../../assets/images/login-default_captcha.jpeg'), // 验证码图片
      passwordType: 'password', // 切换密码输入框类型
      loading: false, // loading
      checked: true, // 记住我
      // rules
      rules: {
        email: [{ validator: checkEmail, trigger: 'blur'}],
        password: [{ validator: checkPassword, trigger: 'blur'}],
        captcha: [{ validator: checkCaptcha, trigger: 'blur'}]
      }
    }
  },
  mounted(){
    this.$nextTick(function(){
      // 记住我 获取用户名，并自动获取验证码
      this.getUserCookie()
    })
  },
  methods: {
    // 登录
    handleLogin(form){
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.form)
            .then(res => {
              const dateCode = res.data.code
              switch(dataCode){
                case 2000:
                  if (this.checked) {
                    this.saveUserCookie()
                  } else {
                    this.removeUserCookie()
                  }
                  this.loading = false
                  this.$router.push('/dashboard')
                  this.$message.success({ message: '登录成功', duration: 1200, center: true })
                  break
                case 4000:
                  this.$message.error({ message: '输入信息不正确', duration: 1200, center: true })
                  break
                default:
                  this.$message.error({ message: '登录失败', duration: 1200, center: true })
              }
              this.loading = false
            })
            .catch(err => {
              console.log(err)
              this.$message.error({ message: '登录失败', duration: 1200, center: true })
            })
        } else {
          return false
        }
      })
    },
    // 获取验证码
    getCaptcha(){
      this.$store.dispatch('GetCaptcha', this.form.email)
        .then(res => {
          if (res.status === 200) {
            let blob = new Blob([res.data], { type: 'image/jpeg'})
            this.captchaSrc = window.URL.createObjectURL(blob)
          }
        })
        .catch(err => {
          this.captchaSrc = require('../../assets/images/login-default_captcha.jpeg')
        })
    },
    // 切换password的type
    togglePasswordType() {
      this.passwordType === 'password' ?  this.passwordType= '' :  this.passwordType = 'password'
    },
    // 记住我
    getUserCookie(){
      let useremail = localStorage.getItem('ls_user_email')
      if (useremail) {
        this.form.email = useremail
        // this.getCaptcha()
      }
    },
    saveUserCookie(){
      localStorage.setItem('ls_user_email', this.form.email)
    },
    removeUserCookie(){
      localStorage.removeItem('ls_user_email')
    }

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
    // panel
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
      box-sizing: border-box;
      // header
      .header{
        margin: 0 0 20px 0;
        .logo-img{
          width: 100px;
          height: 100px;
        }
      }
      // form
      .form {
        .input{}
        .captcha{
          position: relative;
          .captcha-img{
            position: absolute;
            top: 1px;
            right: 1px;
            width: 100px;
            height: 30px;
            cursor: pointer;
          }
        }
        .remenber{
          text-align: left;
          .forget{
            float: right;
            font-size: $fontSizeSmall;
          }
        }
        .submit{
          background-color: $themeColor;
          border-radius: 4px;
          button{
            width: 320px;
            height: 40px;
            color: #fff;
            font-size: $fontSize;
            letter-spacing: 1px;
          }
        }
      }
    }
  }
}
</style>

