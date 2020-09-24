<template>
  <div class="palette">
    <h3>{{title}}</h3>
    <p>{{summary}}</p>
    <div class="primary" v-if="primary">
      <my-float class="clipboard" :style="getStyle(primary)" title="点击可复制颜色码" :data-clipboard-text="primary">
        <my-float-item>${{name}}-primary</my-float-item>
        <my-float-item float="right">{{primary}}</my-float-item>
      </my-float>
    </div>
    <div class="levels">
      <my-float class="clipboard" :data-clipboard-text="color" title="点击可复制颜色码" v-for="(color,index) in colors"
                :key="index"
                :style="getStyle(color,index)">
        <my-float-item>{{getVarName(index)}}</my-float-item>
        <my-float-item float="right">{{color}}</my-float-item>
      </my-float>
    </div>
  </div>
</template>

<script>
  import {MyFloat, MyFloatItem} from '$ui'
  import Clipboard from 'clipboard'

  export default {
    name: 'Palette',
    components: {
      MyFloat,
      MyFloatItem
    },
    props: {
      name: String,
      title: String,
      summary: String,
      primary: String,
      colors: {
        type: Array,
        default() {
          return []
        }
      },
      reverse: Boolean
    },
    data() {
      return {
        clipboards: []
      }
    },
    methods: {
      getVarName(index) {
        return `$${this.name}-${index + 1}`
      },
      getStyle(color, index = 0) {
        return {
          background: color,
          color: index > 4 ? (this.reverse ? '#fff' : '#000') : (this.reverse ? '#000' : '#fff')
        }
      }
    },
    mounted() {
      const btns = this.$el.querySelectorAll('.clipboard')
      Array.from(btns).forEach(btn => {
        const clipboard = new Clipboard(btn)
        clipboard.on('success', e => {
          this.$message.success('复制成功！')
        })
        this.clipboards.push(clipboard)
      })
    },
    beforeDestroy() {
      this.clipboards.forEach(item => {
        item.destroy()
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../ui/lib/styles/common/var";

  .palette {
    padding: 20px 0;

    h3 {
      margin: 0;
      text-align: center;
    }

    p {
      color: #666;
      text-align: center;
    }
  }

  .my-float {
    cursor: pointer;
    transition: all 0.2s;
    font-size: $--font-size-small;
  }

  .my-float-item {
    opacity: 0.9;
  }

  .primary {
    margin-bottom: 1rem;

    .my-float {
      border-radius: 4px;
    }
  }

  .my-float {
    height: 40px;
    line-height: 40px;
    padding: 0 15px;

    &:hover {
      margin-right: -8px;
      border-radius: 0 4px 4px 0;
    }

  }

  .levels {

    .my-float:first-child {
      border-radius: 4px 4px 0 0;
    }

    .my-float:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
</style>
