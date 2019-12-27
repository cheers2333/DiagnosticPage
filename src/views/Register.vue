<template>
  <div class="register-page">
    <div class="content">
        <div class="title">注册</div>
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="姓名" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="['name', { rules: [{ required: true, message: '请输入姓名!' }, {validator: isName}] }]"
          />
        </a-form-item>
        <a-form-item label="年龄" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="['age', { rules: [{ required: true, message: '请输入年龄!' }, {validator: isAge}] }]"
          />
        </a-form-item>
        <a-form-item label="手机号" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="['phone', { rules: [{ required: true, message: '请输入手机号!' }, {validator: isMobile}] }]"
          />
        </a-form-item>
        <a-form-item label="密码" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="['password', { rules: [{ required: true, message: '请输入密码!' }, {validator: isPassword}] }]"
          />
        </a-form-item>
        <a-form-item label="性别" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-select
            v-decorator="[
          'gender',
          { rules: [{ required: true, message: '请选择性别!' }] },
        ]"
            placeholder="请选择性别"
          >
            <a-select-option value="男">男</a-select-option>
            <a-select-option value="女">女</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="身份" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-select
            v-decorator="[
          'identity',
          { rules: [{ required: true, message: '请选择身份!' }] },
        ]"
            placeholder="请选择身份"
          >
            <a-select-option value="病人">病人</a-select-option>
            <a-select-option value="医生">医生</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">注册</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script type='text/javascript'>
import {isName, isMobile, isPassword, isAge} from '../utils/validate.js'
export default {
   data() {
      return {
            isName,
            isMobile,
            isPassword,
            isAge,
            form: this.$form.createForm(this, { name: 'coordinated' }),
      }
   },
 methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
            //发送请求注册
          console.log('提交数据为： ', values);
        }
      });
    },
  },
}
</script>
<style type='text/css' scoped lang='scss'>
.register-page {
    padding-top: 100px;
    .content {
        margin: 0 auto;
        width: 600px;
        height: 550px;
        padding-top: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 0 20px #abc;
        .title {
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 20px;
        }
    }
}
</style>
