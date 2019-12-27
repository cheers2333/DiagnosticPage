<template>
  <div class="list-page">
    <a-tabs defaultActiveKey="1" @change="callback">
      <a-tab-pane class="pane" tab="维护症状表" key="1">
        <TabPane
          :searchobj="searchobjOne"
          :columns="columnsOne"
          :data="tableData"
          :searchTitle="searchTitleOne"
          @block="changeDrawerDisplay"
          @getData="getData"
        ></TabPane>
        <a-drawer
          title="新增症状"
          :width="360"
          @close="onClose"
          :visible="visible"
          :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}"
        >
          <a-form :form="form" layout="vertical" hideRequiredMark>
            <a-row :gutter="16">
              <a-col :span="24">
                <a-form-item label="症状名称">
                  <a-input
                    v-decorator="['name', {
                  rules: [{ required: true, message: '请输入症状名称' }]
                }]"
                    style="width: 100%"
                    placeholder="请输入症状名称"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="24">
                <a-form-item label="症状分布名称">
                  <a-input
                    v-decorator="['position', {
                  rules: [{ required: true, message: '请输入症状分布名称' }]
                }]"
                    style="width: 100%"
                    placeholder="请输入症状分布名称"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
          <div
            :style="{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
        }"
          >
            <a-button :style="{marginRight: '8px'}" @click="onClose">取消</a-button>
            <a-button @click="onClose" type="primary">提交</a-button>
          </div>
        </a-drawer>
      </a-tab-pane>
      <a-tab-pane tab="维护证候表" key="2" forceRender>
        <TabPane
          :searchobj="searchobjTwo"
          :columns="columnsTwo"
          :data="tableData"
          :searchTitle="searchTitleTwo"
          @block="changeDrawerDisplay"
        ></TabPane>
        <a-drawer
          title="新增证候"
          :width="360"
          @close="onClose"
          :visible="visible"
          :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}"
        >
          <a-form :form="form" layout="vertical" hideRequiredMark>
            <a-row :gutter="16">
              <a-col :span="24">
                <a-form-item label="证候名称">
                  <a-input
                    v-decorator="['name', {
                  rules: [{ required: true, message: '请输入证候名称' }]
                }]"
                    style="width: 100%"
                    placeholder="请输入症状名称"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="24">
                <a-form-item label="症候编码">
                  <a-input
                    v-decorator="['position', {
                  rules: [{ required: true, message: '请输入症候编码' }]
                }]"
                    style="width: 100%"
                    placeholder="请输入症候编码"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="24">
                <a-form-item label="症候级别">
                  <a-select
                    :allowClear="true"
                    placeholder="请选择症候级别"
                    v-model="searchobjOne.name"
                    style="width:100%"
                    @change="(value) => handleChange(value,'operationType')"
                  >
                    <a-select-option key="0" value="一级">一级</a-select-option>
                    <a-select-option key="1" value="二级">二级</a-select-option>
                    <a-select-option key="2" value="三级">三级</a-select-option>
                    <a-select-option key="3" value="四级">四级</a-select-option>
                    <a-select-option key="4" value="五级">五级</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="24">
                <a-form-item label="上级症候编码">
                  <a-input
                    v-decorator="['position', {
                  rules: [{ required: true, message: '请输入上级症候编码' }]
                }]"
                    style="width: 100%"
                    placeholder="请输入上级症候编码"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="24">
                <a-form-item label="最小症状数">
                  <a-input
                    v-decorator="['position', {
                  rules: [{ required: true, message: '请输入最小症状数' }]
                }]"
                    style="width: 100%"
                    placeholder="请输入最小症状数"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
          <div
            :style="{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
        }"
          >
            <a-button :style="{marginRight: '8px'}" @click="onClose">取消</a-button>
            <a-button @click="onClose" type="primary">提交</a-button>
          </div>
        </a-drawer>
      </a-tab-pane>
      <a-tab-pane tab="维护症状与证候关系表" key="3">
        <TabPane
          :searchobj="searchobjThree"
          :columns="columnsThree"
          :data="tableData"
          :searchTitle="searchTitleThree"
          @block="changeDrawerDisplay"
        ></TabPane>
        <!-- <div class="search">
          <a-row>
            <a-col :span="22">
              <a-row type="flex">
                <a-col :span="5" style="margin-top:10px;">
                  <a-row>
                    <a-col :span="8">
                      <label style="padding-right:10px">症状编码</label>
                    </a-col>
                    <a-col :span="16">
                      <a-input
                        type="text"
                        :allowClear="true"
                        placeholder="请输入症状编码"
                        v-model="searchobj.code"
                      />
                    </a-col>
                  </a-row>
                </a-col>
                <a-col :span="5" style="margin-top:10px; margin-left: 30px">
                  <a-row>
                    <a-col :span="8">
                      <label style="padding-right:10px">症状名称</label>
                    </a-col>
                    <a-col :span="16">
                      <a-input
                        type="text"
                        :allowClear="true"
                        placeholder="请输入症状名称"
                        v-model="searchobj.name"
                      />
                    </a-col>
                  </a-row>
                </a-col>
                <a-col :span="6" style="margin-top:10px; margin-left: 30px">
                  <a-row>
                    <a-col :span="8">
                      <label style="padding-right:10px">症状分布编码</label>
                    </a-col>
                    <a-col :span="16">
                      <a-input
                        type="text"
                        :allowClear="true"
                        placeholder="请输入症状分布编码"
                        v-model="searchobj.name"
                      />
                    </a-col>
                  </a-row>
                </a-col>
                <a-col :span="6" style="margin-top:10px; margin-left: 30px">
                  <a-row>
                    <a-col :span="8">
                      <label style="padding-right:10px">症状分布名称</label>
                    </a-col>
                    <a-col :span="16">
                      <a-input
                        type="text"
                        :allowClear="true"
                        placeholder="请输入症状分布名称"
                        v-model="searchobj.name"
                      />
                    </a-col>
                  </a-row>
                </a-col>
              </a-row>
            </a-col>
            <a-col :span="2" class="rigthbox">
              <a-button type="primary" class="btn" @click="searchTable">查询</a-button>
            </a-col>
          </a-row>
        </div>-->
        <!-- <div class="div_table">
          <a-button class="editable-add-btn add" type="primary" @click="showDrawer">
            <a-icon type="plus" />新增
          </a-button>
          <a-popconfirm title="确认删除该条数据吗?" @confirm="confirm" okText="确定" cancelText="取消">
            <a-button type="danger">批量删除</a-button>
        </a-popconfirm>-->
        <a-drawer
          title="新增症状"
          :width="360"
          @close="onClose"
          :visible="visible"
          :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}"
        >
          <a-form :form="form" layout="vertical" hideRequiredMark>
            <a-row :gutter="16">
              <a-col :span="24">
                <a-form-item label="症状分布名称">
                  <a-select
                    :allowClear="true"
                    placeholder="请选择症状分布名称"
                    v-model="searchobjOne.name"
                    style="width:100%"
                    @change="(value) => handleChange(value,'operationType')"
                  >
                    <a-select-option key="0" value="一级">一级</a-select-option>
                    <a-select-option key="1" value="二级">二级</a-select-option>
                    <a-select-option key="2" value="三级">三级</a-select-option>
                    <a-select-option key="3" value="四级">四级</a-select-option>
                    <a-select-option key="4" value="五级">五级</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="24">
                <a-form-item label="症状">
                  <a-select
                    :allowClear="true"
                    placeholder="请选择症状"
                    v-model="searchobjOne.name"
                    style="width:100%"
                    @change="(value) => handleChange(value,'operationType')"
                    :disabled="true"
                  >
                    <a-select-option key="0" value="一级">一级</a-select-option>
                    <a-select-option key="1" value="二级">二级</a-select-option>
                    <a-select-option key="2" value="三级">三级</a-select-option>
                    <a-select-option key="3" value="四级">四级</a-select-option>
                    <a-select-option key="4" value="五级">五级</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="24">
                <a-form-item label="所属症状">
                  <a-input
                    v-decorator="['position', {
                  rules: [{ required: true, message: '请输入所属症状' }]
                }]"
                    style="width: 100%"
                    placeholder="请输入所属症状多个症候请用逗号隔开"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
          <div
            :style="{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
        }"
          >
            <a-button :style="{marginRight: '8px'}" @click="onClose">取消</a-button>
            <a-button @click="onClose" type="primary">提交</a-button>
          </div>
        </a-drawer>
        <!-- <a-table
            res="table"
            :rowSelection="rowSelection"
            :columns="columnsThree"
            :dataSource="tableData"
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
        </div>-->
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script type='text/javascript'>
import { tableTop } from "../../assets/js/columns.js";
import TabPane from "../../components/TabPane.vue"
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
    components: { TabPane },
   data() {
      return {
          pageNum: 1,
          total: 0,
          pageKey: 0,//默认为0 改变table的时候改变 其值然后进行不同的数据请求
          tableData: [{key: "0", code1: 12435,name: '2222',code: 353453,names: 'dsfgdfs'},
          {key: "1",code1: 12435,name: '2222',code: 353453,names: 'dsfgdfs'},
          {key: "2",code1: 12435,name: '2222',code: 353453,names: 'dsfgdfs'},
          {key: "3",code1: 12435,name: '2222',code: 353453,names: 'dsfgdfs'},
          {key: "4",code1: 12435,name: '2222',code: 353453,names: 'dsfgdfs'},
          {key: "5",code1: 12435,name: '2222',code: 353453,names: 'dsfgdfs'},
          {key: "6",code1: 12435,name: '2222',code: 353453,names: 'dsfgdfs'},
          {key: "7",code1: 12435,name: '2222',code: 353453,names: 'dsfgdfs'},
          {key: "8",code1: 12435,name: '2222',code: 353453,names: 'dsfgdfs'},
          {key: "9",code1: 12435,name: '2222',code: 353453,names: 'dsfgdfs'},
], //表格数据
          scroll: { y: 800, x: 1140 },
          searchTitleOne: ['症状编码','症状名称','症状分布编码','症状分布名称'],
          searchTitleTwo: ['证候编码','证候名称','证候层级'],
          searchTitleThree: ['症状编码','症状名称','症状分布编码','症状分布名称'],
          searchobjOne: {
              code: '',
              name: ''
          },//症状表搜索对象
          searchobjTwo: {
              code: '',
              name: '',
              level: ''
          },//症候表搜索对象
          searchobjThree: {
              code: '',
              name: '',
              codes: '',
              names: ''
          },//症候症状关系表搜索对象
          //各类表对象表头信息
          columnsOne: tableTop.SymptomColumns,
          columnsTwo: tableTop.ColumnsTwo,
          columnsThree: tableTop.ColumnsThree,
          visible: false, //新增窗口的显示隐藏
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
                }
        };
      },
      }
   },
    methods: {
    callback(key) {
        // 判断key值 显示不同的tab  进行不同的数据请求
        this.pageKey = key
      },
    getData() {
        console.log(this.searchobjOne)
      },
    changeDrawerDisplay (data) {
        this.visible = data;
        console.log(data)
      },
    handleChange(value, key) {
      if (value != undefined) {
        this.searchobj[key] = value;
      } else {
        this.searchobj[key] = "";
      }
    },
    getTableList(m) {
      if (m == 1) {
          this.pageSize = 2;
          this.pageNum = 1;
      }
      this.$http
        .post(
          this.$interfaces.changeList  + '/' +  this.pageNum + '/' + this.pageSize,
          this.searchobj
        )
        .then(data => {
          // console.log(data.data);
          if (data.data.code == "200" && data.data.data != null) {
            this.tableData = data.data.data.list;
            this.tableData.forEach(object => {
              for (const key in object) {
                if (key == "createTime" || key == "updateTime") {
                  if (object[key]) {
                   let date = new Date(object[key]).toLocaleDateString();
                    object[key] = date;
                  }
                }
              }
            });
            this.total = data.data.data.total;
            this.$message.success(
              data.data.message,
              this.$promptMsg.hint_time.error_time
            );
          } else {
            this.$message.error(
              data.data.message,
              this.$promptMsg.hint_time.error_time
            );
          }

          // this.total = 100;
        })
        .catch(() => {
          this.total = 0;
          this.$message.error(
            this.$promptMsg.common.default_error,
            this.$promptMsg.hint_time.error_time
          );
        })
        .finally(() => {});
    },
      onClose() {
        this.visible = false;
      },
      confirm(e) {
        console.log(e);
        this.$message.success('删除成功');
      },
      changeSize(page) {
        this.pageNum = page;
    },
    },
}
</script>
<style type='text/css' scoped lang='scss'>
.list-page {
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
    margin: 20px 10px 20px 0;
  }
  .btn {
    display: block;
    margin: 0 auto;
  }
}
.ant-pagination {
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  text-align: right;
  padding: 8px;
  background: #fff;
  margin: 0 !important;
}
</style>

