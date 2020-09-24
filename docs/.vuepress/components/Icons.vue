<template>
  <div class="icons">
    <my-header title="图标库" theme="border-left" size="large">
      <template v-slot:handle>
        <el-input v-model="keyword"
                  size="small"
                  placeholder="在此搜索图标"
                  prefix-icon="el-icon-search"
                  clearable></el-input>
      </template>
    </my-header>
    <div class="category" v-if="result.length">
      <h3>搜索结果</h3>
      <ul>
        <li v-for="(item, index) in result" :key="`${item.name}-${index}`">
          <my-icon :name="item.name" :svg="item.svg"></my-icon>
          <p>{{item.name}}</p>
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>

    <div class="category" v-for="(category, name) in icons" :id="`category_${name}`"
         v-show="!result.length">
      <h3>{{name}}</h3>
      <el-tabs value="全部">
        <el-tab-pane label="全部" name="全部">
          <ul>
            <li v-for="(item, index) in getAllByType(name)" :key="`${item.name}-${index}`">
              <my-icon :name="item.name" :svg="item.svg"></my-icon>
              <p>{{item.name}}</p>
              <p>{{item.title}}</p>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane v-for="(items, key) in category" :key="`${name}-${key}`" :label="key" :name="key">
          <ul>
            <li v-for="(item, index) in items" :key="`${item.name}-${index}`">
              <my-icon :name="item.name" :svg="item.svg"></my-icon>
              <p>{{item.name}}</p>
              <p>{{item.title}}</p>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>

    </div>


  </div>
</template>

<script>
  import {MyIcon} from '$ui'
  import icons from '../data/icons'
  import '$ui/icons/index'

  function toList(icons) {
    let items = []
    Object.values(icons).forEach(category => {
      Object.values(category).forEach(group => {
        items = items.concat(group)
      })
    })
    return items
  }

  export default {
    name: 'Icons',
    components: {
      MyIcon
    },
    data() {
      this.icons = icons
      this.list = toList(icons)
      return {
        keyword: '',
        result: []
      }
    },
    methods: {
      getAllByType(type) {
        const groups = icons[type]
        let items = []
        Object.values(groups).forEach(g => {
          items = items.concat(g)
        })
        return items
      }
    },
    watch: {
      keyword(val) {
        if (val) {
          this.result = this.list.filter(item => {
            return item.name.includes(val) || item.title.includes(val) || item.tags.includes(val)
          })
        } else {
          this.result = []
        }

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~$ui/styles/common/_var.scss";

  .category {
    padding: 0 0 0 20px;

    h3 {
      font-size: 16px;
    }
  }

  .el-input {
    margin: 15px 0;
    width: 400px;
  }

  .my-icon {
    font-size: 50px;
    padding: 15px 0 0 0;
  }

  ul, li {
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    width: 160px;
    text-align: center;
    height: 120px;
    overflow: hidden;
    cursor: pointer;

    &:hover {
      background: $--color-primary;
      color: $--color-primary-light-10;
      border-radius: $--border-radius-base;

      p {
        color: $--color-primary-light-8;
      }
    }
  }

  p {
    font-size: 12px;
    margin: 0;
    padding: 0;
    color: $--color-secondary-text;
  }
</style>
