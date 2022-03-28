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
    //自定义正则校验
    let myfn = function (rule, value, callback) {
      console.log(rule, value);
      let rg = /\w{2,6}/;
      if (rg.test(value)) {
        return callback(new Error("信息不对"));
      }
    };
    return {
      form: {
        name: "张三",
        pw: "1314",
      },
      rules: {
        name: [{ validator: myfn, trigger: "blur", pattern: /hello/ }],
        pw: [],
      },
      //validator跟message 二选一
      //trigger什么时候触发正则校验 值是事件名
    };
  },
};
</script>

<style>
</style>