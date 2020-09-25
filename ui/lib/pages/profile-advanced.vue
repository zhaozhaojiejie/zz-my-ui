---
title: 高级详情页
---
<template>
  <sp-wrapper
    title="高级详情页"
    sub-title="这里可以设置子标题"
    :links="links"
    :default-active-link="1"
    @link-click="handleLinkClick">
    <template v-slot:extra>
      <el-row :gutter="14">
        <el-col :span="16">
          <sp-detail :column="2">
            <sp-detail-item label="创建人">曲丽丽</sp-detail-item>
            <sp-detail-item label="订购产品">XX 服务</sp-detail-item>
            <sp-detail-item label="创建时间">2017-07-07</sp-detail-item>
            <sp-detail-item label="关联单据">12421</sp-detail-item>
            <sp-detail-item label="生效日期">2017-07-07 ~ 2017-08-08</sp-detail-item>
            <sp-detail-item label="备注">请于两个工作日内确认</sp-detail-item>
          </sp-detail>
        </el-col>

        <el-col :span="8">
          <el-row :gutter="14">
            <el-col :span="12">
              <sp-description title="状态" top align="right">
                <sp-title :level="1">待审核</sp-title>
              </sp-description>
            </el-col>
            <el-col :span="12">
              <sp-description title="订单金额" top align="right">
                <sp-title :level="1">
                  <sp-number :value="32443.32" prefix="￥"></sp-number>
                </sp-title>
              </sp-description>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </template>
    <template v-slot:actions>
      <el-button-group>
        <el-button size="small" type="default">操作一</el-button>
        <el-button size="small" type="default">操作二</el-button>
      </el-button-group>
      <el-button size="small" type="primary">主操作</el-button>
    </template>
    <sp-panel title="审批流程" shadow="never" :border="false" theme="border-left">
      <el-steps :active="2" align-center>
        <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
      </el-steps>
    </sp-panel>
    <sp-panel title="用户信息" shadow="never" :border="false" theme="border-left">
      <sp-detail :column="{xxl:4,xl:3,lg:2,md:2,sm:2,xs:1}">
        <sp-detail-item label="用户姓名">付小小</sp-detail-item>
        <sp-detail-item label="联系电话">18100000000</sp-detail-item>
        <sp-detail-item label="常用快递">菜鸟仓储</sp-detail-item>
        <sp-detail-item label="取货地址">取货地址浙江省杭州市西湖区万塘路18号</sp-detail-item>
        <sp-detail-item label="备注">无</sp-detail-item>
      </sp-detail>
    </sp-panel>
    <sp-panel :tabs="tabs" shadow="never" :border="false" @tab-change="handleTabChange">
      <template v-slot:handle>
        <el-button-group>
          <el-button icon="el-icon-edit" size="mini"></el-button>
          <el-button icon="el-icon-share" size="mini"></el-button>
          <el-button icon="el-icon-delete" size="mini"></el-button>
        </el-button-group>
      </template>
      <sp-table :columns="columns" :data="list"></sp-table>
    </sp-panel>
  </sp-wrapper>
</template>

<script>
  import MockForExample from '$sp/code/mixin/mock-for-example'

  export default {
    mixins: [MockForExample],
    data() {
      return {
        links: [
          {
            label: '详情', value: 1
          },
          {
            label: '规则', value: 2
          }
        ],
        tabs: [
          {label: '选项卡一', name: 'tab1'},
          {label: '选项卡二', name: 'tab2'},
          {label: '选项卡三', name: 'tab3'}
        ],
        columns: [
          {label: '姓名', prop: 'name'},
          {label: '地区', prop: 'county'},
          {label: '发布时间', prop: 'created'},
          {label: '年龄', prop: 'age'}
        ],
        list: []
      }
    },
    methods: {
      loadTabTable(tab) {
        this.fetchMockForExample({
          data: {
            tab: tab
          }
        }).then(res => {
          this.list = res.list
        })
      },
      handleTabChange(tab) {
        this.loadTabTable(tab)
      },
      handleLinkClick(link) {
        console.log(link)
      }
    },
    created() {
      this.loadTabTable('tab1')
    }
  }
</script>

