---
title: 卡片列表
---
<template>
  <sp-wrapper title="卡片列表">
    <template v-slot:extra>
      卡片类型的列表，配合栅格实现响应式布局。
    </template>
    <template v-slot:actions>
      <el-button type="primary" size="medium" icon="el-icon-plus">新增</el-button>
    </template>
    <sp-card-list
      :loader="loader"
      :columns="{xs:1,sm:1,md:2,lg:2,xl:3,xxl:4}"
      pager
      :page-size="limit">
      <sp-panel slot-scope="{item}"
                shadow="hover"
                :actions="actions"
                :header="false">
        <sp-corner-mark :type="{ '逃': 'danger', '毒': 'warning'}[item.label]">{{item.label}}</sp-corner-mark>
        <div class="data-item">
          <el-image :src="item.avatar" fit="cover"></el-image>
          <div class="text">
            <sp-title :level="3">{{item.name}}</sp-title>
            <sp-paragraph ellipsis :rows="3">
              {{item.info}}
            </sp-paragraph>
          </div>
        </div>
      </sp-panel>
    </sp-card-list>
  </sp-wrapper>
</template>

<script>
  import MockForExample from '$sp/code/mixin/mock-for-example'

  export default {
    mixins: [MockForExample],
    data() {
      return {
        list: [],
        page: 0,
        limit: 15,
        actions: [
          {
            text: '查看',
            icon: 'el-icon-view'
          },
          {
            text: '编辑',
            icon: 'el-icon-edit'
          },
          {
            text: '删除',
            icon: 'el-icon-delete'
          }
        ]
      }
    },
    computed: {
      noMore() {
        return this.total === null
          ? false
          : this.page >= Math.ceil(this.total / this.limit)
      },
      disabled() {
        return this.loading || this.noMore
      }
    },
    methods: {
      loader(page, limit) {
        return this.fetchMockForExample({
          data: {
            page,
            limit
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/style/_vars.scss";

  .data-item {
    height: 100px;

    .el-image {
      width: 120px;
      height: 100px;
      float: left;
    }

    .sp-title {
      margin-top: 0;
    }

    .sp-paragraph {
      margin-bottom: 0;
    }

    .text {
      padding-left: 130px;
    }
  }

  .loading, .empty {
    padding: 14px;
    text-align: center;
  }

  .empty {
    border-top: 1px dotted $--color-divider;
    color: $--color-secondary-text;
  }
</style>
