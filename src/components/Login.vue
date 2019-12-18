<template>
<div class="login_container">
  <div class="login_box">
    <!-- 头像区域 -->
    <div class="avatar_box">
      <img src="../assets/logo.png">
    </div>
    <!-- 登录表单区域 -->
    <el-form ref="login_form_ref" label-width="0px" class="login_form" :model="login_form" :rules="login_form_rules">
      <!-- 用户名 -->
      <el-form-item prop="email">
        <el-input placeholder="email"
                  prefix-icon="el-icon-user"
                  v-model="login_form.email"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input placeholder="密码"
                  prefix-icon="el-icon-lock"
                  v-model="login_form.password"
                  type="password"></el-input>
      </el-form-item>
      <!-- 登录 -->
      <el-form-item class="btns">
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="info" @click="reset_login_form">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
    export default {
        name: "Login",
        //数据区域
        data(){
            return {
                login_form: {
                    email: '',
                    password: '',
                },
                login_form_rules: {
                    email: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        { min: 3, max: 20, message: '长度在 3 到 20个字符', trigger: 'blur' }
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                    ],
                }
            }
        },
        //方法区
        methods: {
            //重置按钮
            reset_login_form(){
                // console.log(this)
                this.$refs.login_form_ref.resetFields();
            },
            login(){
                this.$refs.login_form_ref.validate(valid =>{
                    if (!valid) return;
                    else this.$http({
                        url:'http://106.12.131.204:8088/meal/user/login',
                        method: 'post',
                        data: this.login_form
                    }).then((res) => {
                        console.log(res.data);
                        window.sessionStorage.clear();
                        this.$router.push("/Home")
                    }).catch()
                });
            },
        }
    }
</script>

<style lang="less" scoped>
  .login_container{
    background-color: #2b4b6b;
    height: 100%;
  }
  .login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    .avatar_box{
      width: 110px;
      height: 110px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      background-color: white;
      transform: translate(-50%,-50%);
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }
  .login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    .btns{
      display: flex;
      justify-content: flex-end;
    }
  }



</style>
