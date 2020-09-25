---
title: 监控页
---
<template>
  <sp-wrapper :header="null">
    <el-row class="stat-row" :gutter="14">
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
        <sp-stat-card title="总销售量" icon="el-icon-pie-chart">
          <sp-number slot="total" value="3345"></sp-number>
        </sp-stat-card>
      </el-col>
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
        <sp-stat-card title="访问量" icon="el-icon-data-board" icon-type="success">
          <sp-number slot="total" value="3345"></sp-number>
        </sp-stat-card>
      </el-col>
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
        <sp-stat-card title="支付笔数" icon="el-icon-data-line" icon-type="warning">
          <sp-number slot="total" value="3345"></sp-number>
        </sp-stat-card>
      </el-col>
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
        <sp-stat-card title="运营活动效果" icon="el-icon-data-analysis" icon-type="danger">
          <sp-number slot="total" value="3345"></sp-number>
        </sp-stat-card>
      </el-col>
    </el-row>
    <el-row :gutter="14">
      <el-col :xs="24" :sm="24" :md="24" :lg="18">
        <sp-panel title="活动实时交易情况" theme="border-left">

        </sp-panel>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="6">
        <sp-panel title="活动情况预测" theme="border-left">

        </sp-panel>
        <sp-panel title="券核效率" theme="border-left">

        </sp-panel>
      </el-col>
    </el-row>
    <el-row :gutter="14">
      <el-col :xs="24" :sm="24" :md="24" :lg="12">
        <sp-panel title="各品类占比" theme="border-left">

        </sp-panel>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="6">
        <sp-panel title="热门搜索" theme="border-left">

        </sp-panel>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="6">
        <sp-panel title="资源剩余" theme="border-left">

        </sp-panel>
      </el-col>
    </el-row>
  </sp-wrapper>
</template>

<script>

  export default {
    components: {

    }
  }
</script>

<style lang="scss" scoped>
  .el-col {
    margin-bottom: 14px;
  }
</style>
