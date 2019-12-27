<template>
  <div class="pane-page">
    <div class="search">
      <a-row>
        <a-col :span="22">
          <a-row type="flex">
            <a-col :span="5" style="margin-top:10px;" v-if='searchTitle[0]'>
              <a-row>
                <a-col :span="8">
                  <label style="padding-right:10px">{{searchTitle[0]}}</label>
                </a-col>
                <a-col :span="16">
                  <a-input
                    type="text"
                    :allowClear="true"
                    placeholder="请输入内容"
                    v-model="searchobj.code"
                  />
                </a-col>
              </a-row>
            </a-col>
            <!-- ================= -->
            <a-col :span="5" style="margin-top:10px; margin-left: 30px" v-if='searchTitle[1]'>
              <a-row>
                <a-col :span="8">
                  <label style="padding-right:10px">{{searchTitle[1]}}</label>
                </a-col>
                <a-col :span="16">
                  <a-input
                    type="text"
                    :allowClear="true"
                    placeholder="请输入内容"
                    v-model="searchobj.name"
                  />
                </a-col>
              </a-row>
            </a-col>
            <!-- ================= -->
            <a-col :span="6" style="margin-top:10px; margin-left: 30px" v-if='searchTitle[2]'>
              <a-row>
                <a-col :span="8">
                  <label style="padding-right:10px">{{searchTitle[2]}}</label>
                </a-col>
                <a-col :span="16">
                  <a-input
                    type="text"
                    :allowClear="true"
                    placeholder="请输入内容"
                    v-model="searchobj.name"
                  />
                </a-col>
              </a-row>
            </a-col>
            <!-- ================= -->
            <a-col :span="6" style="margin-top:10px; margin-left: 30px" v-if='searchTitle[3]'>
              <a-row>
                <a-col :span="8">
                  <label style="padding-right:10px">{{searchTitle[3]}}</label>
                </a-col>
                <a-col :span="16">
                  <a-input
                    type="text"
                    :allowClear="true"
                    placeholder="请输入内容"
                    v-model="searchobj.name"
                  />
                </a-col>
              </a-row>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="2" class="rigthbox">
          <a-button type="primary" class="btn search" @click="searchTable">查询</a-button>
        </a-col>
      </a-row>
    </div>
    <!-- 表格 -->
    <div class="div_table">
      <a-button class="editable-add-btn add" type="primary" @click="showDrawer">
        <a-icon type="plus" />新增
      </a-button>
      <a-popconfirm title="确认删除该条数据吗?" @confirm="confirm" okText="确定" cancelText="取消">
        <a-button type="danger">批量删除</a-button>
      </a-popconfirm>
      <a-table
        res="table"
        :rowSelection="rowSelection"
        :columns="columns"
        :dataSource="data"
        size="small"
        :scroll="scroll"
        bordered
        :customRow="rowSelection ? customRow : null"
        :pagination="false"
        rowKey="key"
      >
        <a slot="operation" slot-scope href="javascript:;">
          <a-popconfirm title="确认删除该条数据吗?" @confirm="confirm" okText="确定" cancelText="取消">
            <a-button size="small" type="danger">删除</a-button>
          </a-popconfirm>
        </a>
      </a-table>
      <a-pagination
        :style="{ height: '40px'}"
        showQuickJumper
        size="small"
        :pageSize="20"
        :defaultCurrent="pageNum"
        :total="500"
        :current="pageNum"
        @change="onChange"
        style="{ position: 'fixed', left: '0', bottom: '0' }"
      />
    </div>
  </div>
</template>
<script type='text/javascript'>
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
export default {
    props: ['searchobj','columns', 'data', 'searchTitle'],
   data() {
      return {
          pageNum: 1,
          scroll: { y: 800, x: 1140 },
          form: this.$form.createForm(this),
          rowSelection: rowSelection,
          customRow: () => {
              return {
                on: {
                  click: e => {
                    // this.resetSelectData();
                    this.$nextTick(function() {
                      //点击行选中
                      e.currentTarget
                        .getElementsByClassName("ant-checkbox-input")[0]
                        .click();
                    });
                  },
                  mouseover: e => {
                      //鼠标滑过tr时，给td一个title属性，确保滑过td有文字提示
                      let ele = e.currentTarget.getElementsByTagName("td");
                      for (let i = 0; i < ele.length; i++) {
                        if (i > 1) {
                          ele[i].setAttribute("title", ele[i].innerText);
                        }
                      }
                    }
                }}
          }
      }
   },
   methods: {
       showDrawer() {
           this.$emit('block', true)
       },
       //分页器改变时触发的函数
       onChange(page) {
          this.pageNum = page;
       },
       //确认删除时触发的函数
       confirm(e) {
        console.log(e);
        this.$message.success('删除成功');
      },
       searchTable() {
        this.$emit('getData')
    },
    changeSize(page, pageSize){
        this.$parent.changeSize(page, pageSize);
        this.$parent.getTableList('pagination');
      },
   },
   mounted() {
    //    console.log(searchobj)
   }
}
</script>
<style type='text/css' scoped lang='scss'>
.pane-page {
  text-align: left;
  height: 100%;
  .pane {
    height: 100%;
  }
  .rigthbox {
    margin-top: 10px;
    .search {
      margin-bottom: 20px;
    }
  }
  .add {
    margin: 0 10px 20px 0;
  }
  .btn {
    display: block;
    margin: 0 auto;
  }
}
</style>
