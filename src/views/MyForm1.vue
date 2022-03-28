<template>
  <div>
    <el-form :model="form" :rules="rules">
      <!-- 用户名的输入 -->
      <el-form-item prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <!-- 密码框的输入 -->
      <el-form-item prop="pw">
        <el-input v-model="form.pw"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "MyForm",
  data() {
    return {
      form: {
        name: "张三",
        pw: "1314"
      },
      rules:{
        name:[{type:'string',required:true,pattern:/张三/,message:"用户名不对"}],
        pw:[{tigger:"blur"}]
      }
    };
  },
};
</script>

<style>
</style>