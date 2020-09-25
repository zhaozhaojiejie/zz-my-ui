# StatCard 统计数据卡片

 文档 <api-link href="components/sp-stat-card">spStatCard</api-link>


## 基础用法 

:::demo
```html
<template>
  <sp-stat-card title="访问量">
      <sp-number slot="total" value="3345"></sp-number>
  </sp-stat-card>
</template>
```
:::

## 显示图标
:::demo
```html
<template>
  <el-row :gutter="10">
    <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
      <sp-stat-card title="总销售量" icon="el-icon-pie-chart">
        <sp-number slot="total" value="3345"></sp-number>
      </sp-stat-card>
    </el-col>
    <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
      <sp-stat-card title="总销售量" icon="el-icon-pie-chart" icon-type="success">
        <sp-number slot="total" value="3345"></sp-number>
      </sp-stat-card>
    </el-col>
    <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
      <sp-stat-card title="总销售量" icon="el-icon-pie-chart" icon-type="warning">
        <sp-number slot="total" value="3345"></sp-number>
      </sp-stat-card>
    </el-col>
    <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
      <sp-stat-card title="总销售量" icon="el-icon-pie-chart" icon-type="danger">
        <sp-number slot="total" value="3345"></sp-number>
      </sp-stat-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
  .el-col {
    margin-bottom: 10px;
  }
</style>

```
:::


### 统计图表

:::demo
```html
<template>
  <el-row :gutter="10" style="margin: 10px;">
    <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
      <sp-stat-card title="总销售量" :actions="actions">
        <sp-number slot="total" value="13345" prefix="￥"></sp-number>
        <div style="height: 60px; padding-top: 35px;">
          <span>周同比<sp-number :value="0.12" percentage type="primary" trend="up"></sp-number></span>
          <span style="margin-left: 10px">日同比<sp-number :value="0.1" percentage type="primary" trend="down"></sp-number></span>
        </div>
        <div slot="footer">日销售额
          <sp-number value="3345" prefix="￥"></sp-number>
        </div>
      </sp-stat-card>
    </el-col>
    <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
      <sp-stat-card title="访问量" :actions="actions">
        <sp-number slot="total" value="3345"></sp-number>
        <sp-chart-line height="60px" :data="getChartData()" :extend="chartOption"
                       :settings="{stack:['数量']}"></sp-chart-line>
        <div slot="footer">日访问量
          <sp-number value="3345" prefix="￥"></sp-number>
        </div>
      </sp-stat-card>
    </el-col>
    <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
      <sp-stat-card title="总销售量">
        <sp-corner-mark>HOT</sp-corner-mark>
        <sp-number slot="total" value="3345"></sp-number>
        <sp-chart-bar height="60px" :data="getChartData()" :extend="chartOption"
                      :settings="{stack:['数量']}"></sp-chart-bar>
        <div slot="footer">日访问量
          <sp-number value="3345" prefix="￥"></sp-number>
        </div>
      </sp-stat-card>
    </el-col>
    <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
      <sp-stat-card title="总销售量">
        <sp-corner-mark type="success">TOP</sp-corner-mark>
        <sp-number slot="total" value="0.5" percentage></sp-number>
        <div style="height: 60px; padding-top: 35px;">
          <el-progress :stroke-width="14" :percentage="50" :show-text="false"></el-progress>
        </div>
        <div slot="footer">日访问量
          <sp-number value="3345" prefix="￥"></sp-number>
        </div>
      </sp-stat-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        actions: [
          {
            icon: 'el-icon-info',
            tooltip: '指标说明'
          }
        ],
        chartOption: {
          grid: {
            left: -1,
            top: 0,
            bottom: 0,
            right: 0
          },
          'legend.show': false,
          'yAxis.0.splitLine.show': false,
          color: ['#91D5FF'],
          series: {
            symbol: 'none'
          }
        }
      }
    },
    methods: {
      getChartData() {
        const rows = []
        for (let i = 0; i < 30; i++) {
          rows.push([i, Math.floor(Math.random() * 1000)])
        }
        return {
          columns: ['日期', '数量'],
          rows
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-col {
    margin-bottom: 10px;
  }
</style>



```
:::