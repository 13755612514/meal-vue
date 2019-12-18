<template>
<div class="nav_menu">
  <img src="../../assets/lol.png" class="logo">
  <div class="user_info">
    <div class="user_info_avatar">
      <img src="../../assets/logo.png" @click="avatar">
    </div>
    <div class="user_info_brief">
      <p class="unLogin" >点击此处<span @click="login" @mouseover="loginCss">登录</span></p>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "NavMenu",
        data(){
            return{
            }
        },
        methods:{
            avatar(){
            },
            login(){
                window.sessionStorage.clear();
                this.$router.push('/Login');
            },
            loginCss(){

            }
        }
    }
</script>

<style lang="less" scoped>
  .nav_menu{
    width: 100%;
    height: 280px;
    overflow: visible;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11;

    .logo{
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .user_info{
      position: relative;
      float: right;
      width: 244px;
      height: 78px;
      z-index: 3;

      .user_info_avatar{
        float: left;
        width: 68px;
        height: 68px;
        margin-top: 14px;
        border-radius: 50%;
        padding: 1px;
        img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .user_info_brief{
        float: left;
        margin-left: 10px;
        margin-top: 10px;
        .unLogin{
          text-decoration:underline;
          position: absolute;
          color: black;
          font-size: 18px;
          font-weight: bold;
          span{
            color: aqua;
          }
        }
      }
    }
  }
</style>
