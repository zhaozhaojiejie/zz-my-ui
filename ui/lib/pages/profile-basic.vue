---
title: 基础详情页
---
<template>
  <sp-wrapper title="基础详情页">
    <sp-container>
      <sp-title :level="4">退款申请</sp-title>
      <sp-detail :column="{xxl:4,xl:3,lg:2,md:2,sm:2,xs:1}">
        <sp-detail-item label="取货单号">1000000000</sp-detail-item>
        <sp-detail-item label="状态">已取货</sp-detail-item>
        <sp-detail-item label="销售单号">1234123421</sp-detail-item>
        <sp-detail-item label="子订单">3214321432</sp-detail-item>
      </sp-detail>
      <el-divider></el-divider>
      <sp-title :level="4">用户信息</sp-title>
      <sp-detail :column="{xxl:4,xl:3,lg:2,md:2,sm:2,xs:1}">
        <sp-detail-item label="用户姓名">付小小</sp-detail-item>
        <sp-detail-item label="联系电话">18100000000</sp-detail-item>
        <sp-detail-item label="常用快递">菜鸟仓储</sp-detail-item>
        <sp-detail-item label="取货地址">取货地址浙江省杭州市西湖区万塘路18号</sp-detail-item>
        <sp-detail-item label="备注">无</sp-detail-item>
      </sp-detail>
      <el-divider></el-divider>
      <sp-title :level="4">表格信息</sp-title>
      <sp-table :columns="columns" :data="list"></sp-table>
    </sp-container>
  </sp-wrapper>
</template>

<script>
  import MockForExample from '$sp/code/mixin/mock-for-example'

  export default {
    mixins: [MockForExample],
    data() {
      return {
        columns: [
          {label: '姓名', prop: 'name'},
          {label: '地区', prop: 'county'},
          {label: '发布时间', prop: 'created'},
          {label: '年龄', prop: 'age'}
        ],
        list: []
      }
    },
    created() {
      this.fetchMockForExample().then(res => {
        this.list = res.list
      })
    }
  }
</script>
