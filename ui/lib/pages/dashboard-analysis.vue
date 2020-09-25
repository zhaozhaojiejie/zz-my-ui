<template>
  <sp-wrapper :header="null">
    <el-row :gutter="10">
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
        <sp-stat-card title="总销售量" :actions="actions">
          <sp-number slot="total" value="13345" prefix="￥"></sp-number>
          <div style="height: 60px; padding-top: 35px;">
            <span>周同比<sp-number :value="0.12" percentage type="primary" trend="up"></sp-number></span>
            <span style="margin-left: 10px">日同比<sp-number :value="0.1" percentage type="primary"
                                                          trend="down"></sp-number></span>
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
    <el-row class="chart-row">
      <sp-panel title="销售额" theme="border-left">
        <template v-slot:handle>
          <el-radio-group size="mini" v-model="range">
            <el-radio-button label="year">年</el-radio-button>
            <el-radio-button label="month">月</el-radio-button>
            <el-radio-button label="day">日</el-radio-button>
          </el-radio-group>
        </template>
        <sp-chart-line :data="chartData" :settings="settings" :extend="extend"></sp-chart-line>
      </sp-panel>
    </el-row>
    <el-row :gutter="14">
      <el-col :span="12" :sm="24" :xs="24" :md="12" :lg="12" style="height: 600px">
        <sp-panel title="热门搜索" theme="border-left" fit>
          <sp-table :columns="columns" :loader="loader" :page-size="8" fit>
            <template v-slot:percent="{row}">
              <sp-number :value="row.percent" :precision="2" percentage trend="up"></sp-number>
            </template>
          </sp-table>
        </sp-panel>
      </el-col>
      <el-col :span="12" :sm="24" :xs="24" :md="12" :lg="12" style="height: 600px">
        <sp-panel title="关键字" theme="border-left" fit>
          <sp-chart-cloud :data="cloudData"></sp-chart-cloud>
        </sp-panel>
      </el-col>
    </el-row>
  </sp-wrapper>
</template>

<script>
  const chartData = {
    columns: ['月份', '访问量', '留存率'],
    rows: [
      ['一月', 100, 30],
      ['二月', 60, 20],
      ['三月', 78, 25],
      ['四月', 90, 40],
      ['五月', 110, 70],
      ['六月', 87, 60],
      ['七月', 90, 76],
      ['八月', 75, 45],
      ['九月', 63, 46],
      ['十月', 80, 70],
      ['十一月', 90, 85],
      ['十二月', 105, 96]
    ]
  }
  const cloudData = {
    columns: ['标签', '权重'],
    rows: [
      ['直接访问', 1],
      ['邮件营销', 2],
      ['联盟广告', 2],
      ['视频广告', 3],
      ['搜索引擎', 4]
    ]
  }

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
        },
        range: 'year',
        chartData: chartData,
        cloudData: cloudData,
        settings: {
          valueAxis: ['访问量', '留存率'],
          bars: ['访问量']
        },
        extend: {
          color: ['#91d5ff', '#1890ff'],
          'series.0.barCategoryGap': '50%',
          grid: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 30,
            backgroundColor: 'transparent'
          },
          yAxis: {
            splitLine: false
          }
        },
        columns: [
          {type: 'index', label: '排名'},
          {label: '关键字', prop: 'keyword'},
          {label: '用户数', prop: 'count'},
          {label: '周涨幅', prop: 'percent'}
        ]
      }
    },
    methods: {
      loader(page, limit) {
        const data = []
        for (let i = 0; i < limit; i++) {
          data.push({
            id: Math.random() * 1000,
            keyword: `关键字 ${(page - 1) * limit + i}`,
            count: Math.floor(Math.random() * 100),
            percent: Math.random()
          })
        }
        return Promise.resolve({
          list: data,
          total: 1000
        })
      },
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
    margin-bottom: 14px;
  }

  .chart-row {
    margin-top: 0 !important;
    margin-bottom: 14px;
  }

  .el-row {
    &:last-child {
      margin-bottom: 0;
    }
  }

  .sp-wrapper {
    /deep/ {
      .sp-wrapper__body {
        padding-bottom: 0 !important;
      }
    }

  }


</style>
