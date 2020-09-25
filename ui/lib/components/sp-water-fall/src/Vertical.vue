<template>
<div class="sp-v-water-fall" :style="{'height': maxHeight + 'px'}">
  <!-- 占位用div -->
  <div class="col-warp" 
      :style="{'margin-left': margin + 'px', 'margin-right': margin + 'px'}" 
      ref="colWarp" 
      v-for="i in currentColumn" :key="`col_${i}`">
  </div>
  <!-- 
    <div class="item-warp" v-for="(item, index) in dataList" :key="index"
    :style="setItemWarpStyle(item)"
  >
    <div class="content-warp" >
      <slot :scope="{...item, $index: index, $all: dataList}"></slot> 
    </div>
  </div>  
  -->
  <slot :scope="{data: data}"></slot>
</div>
</template>

<script>
import {debounce} from '$ui/utils/util'
import responsive, {responsiveArray} from '$ui/utils/responsive'
export default {
  mixins: [],
  components: {},
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    margin: {
      type: Number,
      default: 5
    },
    // 显示列数，支持响应式对象设置 {xxl,xl,lg,md,sm,xs}
    columns: {
      type: [Number, Object],
      default: 3,
      validator(val) {
        return typeof val === 'number' ? 24 % val === 0 : true
      }
    }
  },
  data() {
    return {
      currentColumn: 3,
      screens: {},
      colArr: [],
      dataList: []
    }
  },
  computed: {
    maxHeight() {
      if (!this.colArr.length) {
        return 0
      } else {
        const targetIndex = this._findMaxHeight(this.colArr)
        return this.colArr[targetIndex].height
      }
    }
  },
  watch: {
    columns: {
      immediate: true,
      handler() {
        this.setupResponsive()
        this.currentColumn = this.getResponsiveValue()
        
      }
    },
    screens() {
      this.currentColumn = this.getResponsiveValue()
    },
    data() {
      this.$nextTick(() => {
        this.setItemsPos()
      })
    },
    margin() {
      this.$nextTick(() => {
        this.setItemsPos()
      })
    } 
  },

  methods: {
    setupResponsive() {
      this.token && responsive.off(this.token)

      // 参数是对象类型，即开启响应式
      if (typeof this.columns !== 'object') return

      this.token = responsive.on(screens => {
        this.screens = screens
      })
    },
    // 获取当前响应式的列数
    getResponsiveValue() {
      const columns = this.columns
      const defaultValue = 3
      if (!columns) return defaultValue
      // 参数是对象类型，即开启响应式
      if (typeof columns === 'object') {
        for (let i = 0; i < responsiveArray.length; i++) {
          const breakpoint = responsiveArray[i]
          if (this.screens[breakpoint]) {
            return columns[breakpoint] || defaultValue
          }
        }
      }
      // 数字类型
      return columns
    },

    getColData() {
      this.colArr = this.$refs.colWarp.map((dom) => {
        return {
          width: dom.offsetWidth,
          height: 0,
          left: dom.offsetLeft
        }
      })
    },

    sortItems() {
      this.dataList = this.data.map((item, index) => {
        const targetIndex = this._findMinHeight(this.colArr)
        // console.log(targetIndex)
        const newTop = this.colArr[targetIndex].height
        const newWidth = this.colArr[targetIndex].width
        const newHeight = newWidth * item.height / item.width
        item.$width = newWidth
        item.$height = newHeight
        item.$top = newTop
        item.$left = this.colArr[targetIndex].left

        item.$index = index

        this.colArr[targetIndex].height += (newHeight + this.margin * 2)

        return item
      })
    },
    setItemWarpStyle(item) {
      return {
        width: item.$width + 'px',
        height: item.$height + 'px',
        left: item.$left + 'px',
        top: item.$top + 'px'
      }
    },  
    setItemsPos() {
      this.getColData()
      this.sortItems()
    },
      
    _findMinHeight(cols) {
      let minH = cols[0].height
      let minIndex = 0
      cols.forEach((col, index) => {
        if (col.height < minH) {
          minH = col.height
          minIndex = index
        }
      })
      return minIndex
    },
    _findMaxHeight(cols) {
      let maxH = cols[0].height
      let maxIndex = 0
      cols.forEach((col, index) => {
        if (col.height >= maxH) {
          maxH = col.height
          maxIndex = index
        }
      })
      return maxIndex
    }
  },
  created() { 
    // console.log('currentCol', this.currentColumn) 
  },
  mounted() { 
    this.setItemsPos()
    this.setItemPosProxy = debounce(this.setItemsPos, 300)
   
    window.addEventListener('resize', this.setItemPosProxy)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setItemPosProxy)
  }
}
</script>