<template>
    <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          router=""
        >
          <el-menu-item index="/classlist">
            <i class="el-icon-menu"></i>
            <span slot="title">分类列表</span>
          </el-menu-item>
          <el-menu-item index="/comlist">
            <i class="el-icon-document"></i>
            <span slot="title">商品列表</span>
          </el-menu-item>
          <el-menu-item index="/comment">
            <i class="el-icon-setting"></i>
            <span slot="title">商品评论</span>
          </el-menu-item>
          <el-menu-item index="/size">
            <i class="el-icon-setting"></i>
            <span slot="title">商品规格</span>
          </el-menu-item>
          <el-menu-item index="/type">
            <i class="el-icon-setting"></i>
            <span slot="title">商品类型</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
</script>
   