---
title: 树结构列表
---
<template>
  <sp-wrapper title="树结构列表">
    <template v-slot:extra>对树结构数据进行维护管理</template>
    <el-row :gutter="14">
      <el-col :span="8" :xs="24">
        <sp-panel theme="border-left" shadow="never" title="组织机构">
          <el-tree ref="tree"
                   v-treeConnect
                   lazy
                   :load="loader"
                   node-key="id"
                   highlight-current
                   :expand-on-click-node="false"
                   :default-expanded-keys="expandedKeys"
                   :current-node-key="0"
                   @current-change="handleCurrentChange"></el-tree>
        </sp-panel>
      </el-col>
      <el-col :span="16" :xs="24">
        <sp-panel theme="border-left" shadow="never">
          <template v-slot:title>
            <sp-text type="secondary">当前节点：</sp-text>
            <el-tag size="small">{{currentTitle}}</el-tag>
          </template>

          <template v-slot:handle>
            <el-button size="mini" type="primary" icon="el-icon-plus">新增</el-button>
            <el-button size="mini" icon="el-icon-bottom-right">迁移</el-button>
            <el-button size="mini" icon="el-icon-delete">批量删除</el-button>
          </template>
          <sp-table v-loading.body="loading" border stripe size="medium" :columns="columns"
                    :data="tableData">
            <template v-slot:handle>
              <el-link type="primary">编辑</el-link>
              <el-divider direction="vertical"></el-divider>
              <el-link type="primary">删除</el-link>
            </template>
          </sp-table>
        </sp-panel>
      </el-col>
    </el-row>
  </sp-wrapper>
</template>

<script>
  import MockForExample from '$sp/code/mixin/mock-for-example'
  import treeConnect from '$ui/directives/tree-connect'

  export default {
    mixins: [MockForExample],
    directives: {treeConnect},
    data() {
      return {
        columns: [
          {
            type: 'selection'
          },
          {
            label: '名称',
            prop: 'label'
          },
          {
            label: '值',
            prop: 'value',
            showOverflowTooltip: true
          },
          {
            type: 'handle',
            prop: 'handle',
            label: '操作',
            width: '120px'
          }
        ],
        currentNode: null,
        expandedKeys: [0],
        loading: false
      }
    },
    computed: {
      tableData() {
        if (!this.currentNode) return []
        const childNodes = this.currentNode.childNodes
        return childNodes.map(child => child.data)
      },
      currentTitle() {
        if (!this.currentNode) return ''
        return this.currentNode.data.label
      }
    },
    methods: {
      loader(node, resolve) {
        if (node.data) {
          this.loading = true
          this.getTree({
            data: {
              parentId: node.data.id,
              count: 20
            }
          }).then(res => resolve(res))
            .finally(() => {
              this.loading = false
            })
        } else {
          resolve([{
            label: '根节点',
            id: 0,
            parentId: 'root',
            children: []
          }])
        }
      },
      handleCurrentChange(data, node) {
        this.expandedKeys = [data.id]
        this.currentNode = node
      },
      setDefaultCurrentNode() {
        const key = this.$refs.tree.getCurrentKey()
        this.currentNode = this.$refs.tree.getNode(key)
      }
    },
    mounted() {
      this.setDefaultCurrentNode()
    }
  }
</script>

<style lang="scss" scoped>
  .el-row, .el-col {
    height: 100%;
    min-height: calc(100vh - 200px);

    &.is-fit {
      min-height: 100%;

      .el-col {
        min-height: 100%;
      }
    }
  }

</style>
