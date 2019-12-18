<template>
  <el-container class="home_container">
    <!-- 头部区域-->
    <el-header class="header">
      <NavMenu></NavMenu>
    </el-header>
    <!-- 主题区域-->
    <el-container>
      <!-- 侧边栏-->
      <el-aside width="200px" class="aside">Aside</el-aside>
      <!-- 主体-->
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  import NavMenu from "./home/NavMenu";
    export default {
        name: "Home",
        components: {
            NavMenu,
        },
    }
</script>

<style lang="less" scoped>
  .home_container{
    height: 100%;
    .header{
      width: 100%;
      height: 280px !important;
    }
  }
  .aside{
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
</style>
