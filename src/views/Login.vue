<template>
  <div class="login-page">
    <div class="inner">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="用户名" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="['name', { rules: [{ required: true, message: '请输入用户名!' }, {validator: isNamePhone}] }]"
          />
        </a-form-item>
        <a-form-item class="two" label="密码" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="['password', { rules: [{ required: true, message: '请输入密码！' }, {validator: isPassword}] }]"
          />
          <router-link class="go-register" to="/register">去注册</router-link>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script type='text/javascript'>
import {isNamePhone , isPassword} from '../utils/validate.js'
export default {
   data() {
      return {
        isNamePhone,
        isPassword,
        form: this.$form.createForm(this, { name: 'coordinated' }),
      }
   },
methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
},
}
</script>
<style type='text/css' scoped lang='scss'>
.login-page {
    height: 100%;
    .inner {
        position: relative;
        width: 500px;
        height: 300px;
        padding-top: 50px;
        top: 30%;
        left: 50%;
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-shadow: 0 0 20px #aaa;
        .go-register {
            display: block;
            height: 30px;
            text-align: right;
        }
        .two {
            margin: 0;
        }
    }
}
</style>
