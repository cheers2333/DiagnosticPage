<template>
  <div class="write-page">
    <div class="userinfo">
      <p style="font-size: 20px; font-weight: bold;">基本信息</p>
      <p>{{'姓名：' + userinfo.name}}</p>
      <p>{{'年龄：' + userinfo.age}}</p>
      <p>{{'性别：' + userinfo.sex}}</p>
      <p>{{'手机号：' + userinfo.phone}}</p>
      <p>{{'身份：' + userinfo.role}}</p>
    </div>
    <div class="userchoose">
      <p style="font-size: 20px; font-weight: bold;">请选择下列的诊断部位和诊断描述</p>
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <div>
            <span class="position">部位：</span>
            <a-checkbox @change="onChange">
              {{item.position}}
              <span class="des">症状描述：</span>
              <a-checkbox-group :options="item.des" v-model="value" @change="onChanges" />
            </a-checkbox>
          </div>
        </li>
      </ul>
    </div>
    <a-button type="primary">诊断</a-button>
  </div>
</template>
<script type='text/javascript'>
export default {
   data() {
      return {
          userinfo: {
              name: '小明',
              age: '18',
              sex: '男',
              phone: '15266727626',
              role: '看病者'
          },
          value: [],
          list: [
              {
                  position: '头部',
                  des: [
                      '111','222','333','33333',
                  ]
              },
              {
                  position: '喉部',
                  des: ['333','444','666']
              },
              {
                  position: '耳部',
                  des: ['777','888','000']
              }
          ]
      }
   },
    methods: {
      onChange(e) {
        console.log(`${e.target.checked}`);
      },
      onChanges(checkedValues) {
        console.log('checked = ', checkedValues);
        // console.log('value = ', this.value);
      },
    },
}
</script>
<style type='text/css' scoped lang='scss'>
.write-page {
  text-align: left;
  .userchoose {
      margin-top: 20px;
    ul li {
      margin: 10px 0;
      .position,
      .des {
        font-weight: bold;
      }
      .des {
        margin-left: 30px;
      }
    }
  }
}
</style>
