---
title: 搜索列表（文章）
---
<template>
  <sp-wrapper title="搜索列表">
    <sp-container>
      <sp-form :model="query"
               size="small"
               label-width="100px"
               :footer="null"
               inline
               @change="handleChange">
        <sp-tag-select label="所属类目："
                       name="tag"
                       width="100%"
                       :options="tags"
                       :props="{multiple:true, checkAll:true, collapsible:true}"></sp-tag-select>
        <sp-select label="作者："
                   name="owner"
                   width="calc(50% - 20px)"
                   :loader="optionLoader"
                   :key-map="{label:'name',value:'id'}"
                   :props="{multiple:true,  collapseTags:true}"></sp-select>
        <sp-range label="日期："
                  name="date"
                  mode="date"
                  width="calc(50% - 20px)"
                  :props="{valueFormat:'yyyy-MM-dd'}"></sp-range>
      </sp-form>
    </sp-container>

    <sp-container>
      <sp-list ref="list" :loader="loader" split :pagination="{align:'center'}">
        <template v-slot="{item}">
          <sp-title :level="4">
            <el-link type="primary">
              {{item.title}}
            </el-link>
          </sp-title>
          <sp-paragraph>
            <el-tag v-for="(tag,index) in item.tags"
                    :key="`${tag}-${index}`"
                    type="success"
                    size="small">{{tag}}
            </el-tag>
          </sp-paragraph>
          <sp-paragraph ellipsis :rows="2">{{item.info}}</sp-paragraph>
          <sp-description inline title="作者：" :gutter="0">{{item.name}}</sp-description>
          <sp-description inline title="发布时间：" :gutter="0">{{item.created}}</sp-description>
          <sp-paragraph class="actions">
            <el-link :underline="false"><i class="el-icon-star-off"></i>{{item.views}}</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link :underline="false"><i class="el-icon-chat-dot-square"></i>{{item.shares}}</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link :underline="false"><i class="el-icon-pie-chart"></i>{{item.comments}}</el-link>
          </sp-paragraph>

        </template>
      </sp-list>
    </sp-container>
  </sp-wrapper>
</template>

<script>
  import MockForExample from '$sp/code/mixin/mock-for-example'

  export default {
    mixins: [MockForExample],
    data() {
      return {
        tags: [],
        query: {},
        keyword: this.$route.query.keyword,
        list: []
      }
    },
    watch: {
      query() {
        this.$refs.list.refresh(1)
      },
      $route: {
        handler(val) {
          this.keyword = val.query.keyword
        }
      },
      keyword() {
        this.$refs.list.refresh(1)
      }
    },
    methods: {
      getTags() {
        const tags = []
        for (let i = 0; i < 20; i++) {
          tags.push(`类目${i + 1}`)
        }
        return tags
      },
      optionLoader() {
        return this.fetchMockForExample().then(res => {
          return res.list
        })
      },
      handleChange(query) {
        this.query = query
      },
      loader(page, limit) {
        return this.fetchMockForExample({
          data: {
            keyword: this.keyword,
            ...this.query,
            page,
            limit
          }
        })
      }
    },
    created() {
      this.tags = this.getTags()
    }
  }
</script>

<style lang="scss" scoped>
  .actions {
    font-size: 16px;
    text-align: right;

    .el-link {
      padding: 0 20px;

      i {
        margin-right: 6px;
      }
    }
  }
</style>
