<template>
  <div id="app">
    <el-container>
      <el-header class="nav" v-show="show">
        <h1>uni-admin</h1>
        <div class="right">
          <el-menu
            default-active="2"
            class="el-menu-demo"
            mode="horizontal"
            router
          >
            <el-menu-item index="/background">首页</el-menu-item>
            <el-menu-item index="/classlist">商品</el-menu-item>
            <el-menu-item index="/after">订单</el-menu-item>
            <el-menu-item index="/grade">会员</el-menu-item>
            <el-menu-item index="/admin">设置</el-menu-item>
          </el-menu>

          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>

          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">修改</el-dropdown-item>
              <el-dropdown-item command="b">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <router-view />
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:"flase",
    }
  },
  methods: {
    handleCommand(val){
      console.log(val);
      if(val=="b"){
        localStorage.removeItem("token")
        this.$router.push({path:"/login"})
      }
    }
  },
  watch: {
    $route:{
      handler(newval,oldval){
        if(newval.path=="/login"){
          this.show=false;
        }else{
          this.show=true
        }
      }
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  width: 100%;
  justify-content: space-between;
  display: flex;
  background: black;
  align-items: center;
  color: white;
  .right {
    display: flex;
    align-items: center;
  }

  .el-menu {
    background: none;
  }
}
</style>
