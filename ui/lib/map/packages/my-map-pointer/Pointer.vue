<template>
  <MyMapPlacement class="my-map-pointer" v-bind="$attrs">
    <div
      class="my-map-pointer__inner"
      :class="{'is-lock':lock}">
      <span>[ {{coordinate.join(', ')}} ]</span>
      <i class="el-icon-document-copy" ref="btn" title="复制"></i>
      <i class="el-icon-refresh-left" v-if="lock" title="解锁" @click="unlock"></i>
    </div>
  </MyMapPlacement>
</template>

<script>
  /**
   * 经纬度提取工具
   * @module $ui/map/my-map-pointer
   */
  import {MyMapPlacement} from '$ui/map'
  import Clipboard from 'clipboard'

  export default {
    name: 'MyMapPointer',
    inject: ['myMap'],
    components: {
      MyMapPlacement
    },
    /**
     * 参数属性， 继承 my-map-placement
     * @member props
     * @property {number} [precision=6] 精度，保留几位小数
     */
    props: {
      // 精度，保留几位小数
      precision: {
        type: Number,
        default: 6
      }
    },
    data() {
      return {
        coordinate: [0, 0],
        lock: false
      }
    },
    methods: {
      init(map, vm) {
        this.update({coordinate: vm.center})
        map.on('pointermove', this.move)
        map.on('click', this.pick)
      },
      update(e) {
        this.coordinate = e.coordinate.map(
          n => n.toFixed(this.precision)
        )
      },
      move(e) {
        if (this.lock) return
        this.update(e)
      },
      pick(e) {
        this.lock = true
        this.update(e)
      },
      copy() {
        /**
         * 复制时触发
         * @event copy
         * @param {number[]} coordinate 经纬度
         */
        this.$emit('copy', this.coordinate)

        this.$message.success('已复制到剪贴板')
      },
      unlock() {
        this.lock = false
      }
    },
    mounted() {
      if (this.myMap) {
        this.clipboard = new Clipboard(this.$refs.btn, {
          text: e => {
            return this.coordinate.join(', ')
          }
        })
        this.clipboard.on('success', this.copy)
        this.myMap.mapReady(this.init.bind(this))
      }
    },
    beforeDestroy() {
      this.clipboard && this.clipboard.destroy()
      if (this.myMap && this.myMap.map) {
        this.myMap.map.un('pointermove', this.move)
        this.myMap.map.un('click', this.pick)
      }
    }
  }
</script>

