---
title: 监控页
---
<template>
  <my-wrapper :header="null">
    <el-row class="stat-row" :gutter="14">
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
        <my-stat-card title="总销售量" icon="el-icon-pie-chart">
          <my-number slot="total" value="3345"></my-number>
        </my-stat-card>
      </el-col>
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
        <my-stat-card title="访问量" icon="el-icon-data-board" icon-type="success">
          <my-number slot="total" value="3345"></my-number>
        </my-stat-card>
      </el-col>
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
        <my-stat-card title="支付笔数" icon="el-icon-data-line" icon-type="warning">
          <my-number slot="total" value="3345"></my-number>
        </my-stat-card>
      </el-col>
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
        <my-stat-card title="运营活动效果" icon="el-icon-data-analysis" icon-type="danger">
          <my-number slot="total" value="3345"></my-number>
        </my-stat-card>
      </el-col>
    </el-row>
    <el-row :gutter="14">
      <el-col :xs="24" :sm="24" :md="24" :lg="18">
        <my-panel title="活动实时交易情况" theme="border-left">

        </my-panel>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="6">
        <my-panel title="活动情况预测" theme="border-left">

        </my-panel>
        <my-panel title="券核效率" theme="border-left">

        </my-panel>
      </el-col>
    </el-row>
    <el-row :gutter="14">
      <el-col :xs="24" :sm="24" :md="24" :lg="12">
        <my-panel title="各品类占比" theme="border-left">

        </my-panel>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="6">
        <my-panel title="热门搜索" theme="border-left">

        </my-panel>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="6">
        <my-panel title="资源剩余" theme="border-left">

        </my-panel>
      </el-col>
    </el-row>
  </my-wrapper>
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
