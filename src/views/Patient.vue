<template>
  <div class="patient-page">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <a-avatar icon="user" :size="80" style="margin: 20px 0" />
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
          <a-menu-item key="1">
            <router-link tag="div" to="/write"><a-icon type="user" />病症诊断</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="()=> collapsed = !collapsed"
          />
          <span class="logout">
            退出登录
            <a-icon type="poweroff" />
          </span>
          <span class="user">{{"您好！"+ this.$store.state.username }}</span>
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', background: '#fff', padding: '24px' }"
        >
        <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script type='text/javascript'>
export default {
   data() {
      return {
          collapsed: false,
      }
   },
}
</script>
<style type='text/css' scoped lang='scss'>
.patient-page {
    // min-height: 100%;
  height: 100%;
//   background-color: #fff;
//   padding: 24px;
  .user,
  .logout {
    float: right;
  }
  .logout {
    margin: 0 20px;
  }
}
.ant-layout {
  min-height: 100%;
  .ant-menu-item {
    padding: none;
  }
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.ant-layout-header {
  text-align: left;
}
</style>
