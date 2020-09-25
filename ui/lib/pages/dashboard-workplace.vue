---
title: 工作台
---
<template>
  <sp-wrapper>
    <sp-float slot="extra">
      <sp-float-item>
        <sp-description :width="72">
          <sp-avatar slot="title" :size="72" theme="warning" icon="el-icon-user"></sp-avatar>
          <sp-title class="welcome" :level="2">早安 <span>Admin</span>，祝你开心每一天！</sp-title>
          <sp-text type="secondary">交互专家 | 薯片－某某某事业群－某某平台部－某某技术部－UED</sp-text>
        </sp-description>
      </sp-float-item>
      <sp-float-item float="right">
        <sp-description title="项目数量" inline top align="right">
          <sp-title>
            <sp-number :value="56"></sp-number>
          </sp-title>
        </sp-description>
        <el-divider direction="vertical"></el-divider>
        <sp-description title="团队内排名" inline top align="right">
          <sp-title>
            <sp-number :value="8" suffix=" / 24" sup></sp-number>
          </sp-title>
        </sp-description>
        <el-divider direction="vertical"></el-divider>
        <sp-description title="项目访问" inline top align="right">
          <sp-title>
            <sp-number :value="2223"></sp-number>
          </sp-title>
        </sp-description>
      </sp-float-item>
    </sp-float>

    <el-row :gutter="14">
      <el-col :xs="24" :sm="24" :md="16">
        <sp-panel title="进行中的项目"
                  shadow="never"
                  :border="false"
                  :body-style="{padding:0}"
                  theme="border-left">
          <template v-slot:handle>
            <el-button type="text">全部项目</el-button>
          </template>
          <sp-list class="project-list" :data="projects" :columns="3" split>
            <template v-slot="{item}">
              <div>
                <sp-description :width="32" :gutter="8">
                  <sp-avatar slot="title" :src="item.avatar"></sp-avatar>
                  <sp-title :level="4" :rows="1" ellipsis style="padding-top: 5px">{{item.title}}</sp-title>
                </sp-description>
                <sp-paragraph type="secondary" :rows="2" ellipsis>{{item.info}}</sp-paragraph>
                <sp-float>
                  <sp-float-item>
                    <sp-text type="secondary" small>{{item.name}}</sp-text>
                  </sp-float-item>
                  <sp-float-item float="right">
                    <sp-text type="secondary" small>{{item.date}}</sp-text>
                  </sp-float-item>
                </sp-float>
              </div>
            </template>
          </sp-list>
        </sp-panel>

        <sp-panel title="动态" shadow="never"
                  :border="false"
                  theme="border-left">

          <sp-list :data="projects" split>
            <template v-slot="{item}">
              <sp-description :width="40" style="margin-bottom: 0;">
                <sp-avatar slot="title" size="large" :src="item.avatar">
                </sp-avatar>
                <sp-paragraph style="margin-bottom: 0;">{{item.name}} 在
                  <el-link type="primary">{{item.city}}</el-link>
                  新建项目
                  <el-link type="primary">{{item.title}}</el-link>
                  <br>
                  <sp-text type="secondary">{{item.created}}</sp-text>
                </sp-paragraph>

              </sp-description>
            </template>
          </sp-list>

        </sp-panel>

      </el-col>
      <el-col :xs="24" :sm="24" :md="8">
        <sp-panel title="便捷导航" shadow="never" :border="false" theme="border-left">
          <template v-slot:handle>
            <el-button type="text" icon="el-icon-plus">添加</el-button>
          </template>
          <sp-list :data="projects" :columns="4" size="small">
            <template v-slot="{item}">
              <el-link>{{item.name}}</el-link>
            </template>
          </sp-list>
        </sp-panel>

        <sp-panel title="XX指数" shadow="never" :border="false" theme="border-left">
          <sp-chart-radar :data="rader" height="200px"></sp-chart-radar>
        </sp-panel>

        <sp-panel title="团队" shadow="never" :border="false" theme="border-left">
          <sp-list :data="projects" :columns="2" size="small">
            <template v-slot="{item}">
              <sp-description :width="32">
                <sp-avatar :src="item.avatar"></sp-avatar>
                {{item.title}}
              </sp-description>
            </template>
          </sp-list>
        </sp-panel>

      </el-col>
    </el-row>
  </sp-wrapper>
</template>

<script>
  import MockForExample from '$sp/code/mixin/mock-for-example'

  export default {
    mixins: [MockForExample],
    data() {
      return {
        projects: [],
        rader: {
          columns: ['指标名称', '销售', '管理', '客服', '研发', '市场'],
          rows: [
            ['预算分配', 20, 50, 80, 29, 55, 60],
            ['实际开销', 30, 60, 30, 79, 45, 80]
          ]
        }
      }
    },
    created() {
      this.fetchMockForExample({
        data: {
          page: 1,
          limit: 6
        }
      }).then(res => {
        this.projects = res.list
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/style/_vars.scss";

  .el-col {
    margin-bottom: 14px;
  }

  .sp-panel {
    overflow: visible;
  }

  .project-list {
    /deep/ {
      .sp-list__item {
        cursor: pointer;

        &:hover {
          box-shadow: $--box-shadow-dark;
        }
      }
    }

  }


  .welcome {
    padding-top: 8px;
  }

  .el-divider {
    height: 40px;
    vertical-align: top;
    margin-top: 10px;
    margin-right: 30px;
  }

</style>
