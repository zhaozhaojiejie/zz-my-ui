# StatCard 统计数据卡片

 文档 <api-link href="components/my-stat-card">MyStatCard</api-link>


## 基础用法 

:::demo
```html
<template>
  <my-stat-card title="访问量">
      <my-number slot="total" value="3345"></my-number>
  </my-stat-card>
</template>
```
:::

## 显示图标
:::demo
```html
<template>
  <el-row :gutter="10">
    <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
      <my-stat-card title="总销售量" icon="el-icon-pie-chart">
        <my-number slot="total" value="3345"></my-number>
      </my-stat-card>
    </el-col>
    <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
      <my-stat-card title="总销售量" icon="el-icon-pie-chart" icon-type="success">
        <my-number slot="total" value="3345"></my-number>
      </my-stat-card>
    </el-col>
    <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
      <my-stat-card title="总销售量" icon="el-icon-pie-chart" icon-type="warning">
        <my-number slot="total" value="3345"></my-number>
      </my-stat-card>
    </el-col>
    <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
      <my-stat-card title="总销售量" icon="el-icon-pie-chart" icon-type="danger">
        <my-number slot="total" value="3345"></my-number>
      </my-stat-card>
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
      <my-stat-card title="总销售量" :actions="actions">
        <my-number slot="total" value="13345" prefix="￥"></my-number>
        <div style="height: 60px; padding-top: 35px;">
          <span>周同比<my-number :value="0.12" percentage type="primary" trend="up"></my-number></span>
          <span style="margin-left: 10px">日同比<my-number :value="0.1" percentage type="primary" trend="down"></my-number></span>
        </div>
        <div slot="footer">日销售额
          <my-number value="3345" prefix="￥"></my-number>
        </div>
      </my-stat-card>
    </el-col>
    <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
      <my-stat-card title="访问量" :actions="actions">
        <my-number slot="total" value="3345"></my-number>
        <my-chart-line height="60px" :data="getChartData()" :extend="chartOption"
                       :settings="{stack:['数量']}"></my-chart-line>
        <div slot="footer">日访问量
          <my-number value="3345" prefix="￥"></my-number>
        </div>
      </my-stat-card>
    </el-col>
    <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
      <my-stat-card title="总销售量">
        <my-corner-mark>HOT</my-corner-mark>
        <my-number slot="total" value="3345"></my-number>
        <my-chart-bar height="60px" :data="getChartData()" :extend="chartOption"
                      :settings="{stack:['数量']}"></my-chart-bar>
        <div slot="footer">日访问量
          <my-number value="3345" prefix="￥"></my-number>
        </div>
      </my-stat-card>
    </el-col>
    <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
      <my-stat-card title="总销售量">
        <my-corner-mark type="success">TOP</my-corner-mark>
        <my-number slot="total" value="0.5" percentage></my-number>
        <div style="height: 60px; padding-top: 35px;">
          <el-progress :stroke-width="14" :percentage="50" :show-text="false"></el-progress>
        </div>
        <div slot="footer">日访问量
          <my-number value="3345" prefix="￥"></my-number>
        </div>
      </my-stat-card>
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