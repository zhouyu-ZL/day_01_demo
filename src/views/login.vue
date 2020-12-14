<template>
  <div>
    <div class="login">
    <el-form
      :model="form"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          type="text"
          v-model="form.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="form.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="goto">立即登录</el-button>
      </el-form-item>
    </el-form>
    
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        pass: "",
      },
    };
  },
  //登录请求接口
  methods: {
    goto() {
      this.$axios
        .post("http://ceshi5.dishait.cn/admin/login", {//给的参数和输入的账号密码一致才能登录
          username: this.form.username,
          password: this.form.pass,
        })
        .then((res) => {
          localStorage.setItem("token",res.data.data.token)//如果请求成功，把token保存到本地，携带一个token
          this.$router.push({path:"/background"})
        }).catch(res=>{
          alert("用户名或密码错误")
        });
    },
  },
};
</script>

<style lang="scss">
  .login{
    width: 500px;
    height: 300px;
    margin: 0 auto;
    margin-top: 100px;
    border: 1px solid #ccc;
    line-height: 300px;
    box-sizing: border-box;
    .demo-ruleForm{
      line-height: 300px;
      padding-top: 80px;
      padding-right: 70px;
    }
  }
</style>