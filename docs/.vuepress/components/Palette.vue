<template>
  <div class="palette">
    <h3>{{title}}</h3>
    <p>{{summary}}</p>
    <div class="primary" v-if="primary">
      <sp-float class="clipboard" :style="getStyle(primary)" title="点击可复制颜色码" :data-clipboard-text="primary">
        <sp-float-item>${{name}}-primary</sp-float-item>
        <sp-float-item float="right">{{primary}}</sp-float-item>
      </sp-float>
    </div>
    <div class="levels">
      <sp-float class="clipboard" :data-clipboard-text="color" title="点击可复制颜色码" v-for="(color,index) in colors"
                :key="index"
                :style="getStyle(color,index)">
        <sp-float-item>{{getVarName(index)}}</sp-float-item>
        <sp-float-item float="right">{{color}}</sp-float-item>
      </sp-float>
    </div>
  </div>
</template>

<script>
  import {spFloat, spFloatItem} from '$ui'
  import Clipboard from 'clipboard'

  export default {
    name: 'Palette',
    components: {
      spFloat,
      spFloatItem
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

  .sp-float {
    cursor: pointer;
    transition: all 0.2s;
    font-size: $--font-size-small;
  }

  .sp-float-item {
    opacity: 0.9;
  }

  .primary {
    margin-bottom: 1rem;

    .sp-float {
      border-radius: 4px;
    }
  }

  .sp-float {
    height: 40px;
    line-height: 40px;
    padding: 0 15px;

    &:hover {
      margin-right: -8px;
      border-radius: 0 4px 4px 0;
    }

  }

  .levels {

    .sp-float:first-child {
      border-radius: 4px 4px 0 0;
    }

    .sp-float:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
</style>
