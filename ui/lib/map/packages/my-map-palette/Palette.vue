<template>
  <spMapPanel class="sp-map-palette" title="调色板" width="300px" draggable>
    <template v-slot:toolbar>
      <spClipboard :text="getText" action="copy" message success-tip="已导出到粘贴板">
        <el-button size="mini" type="primary">导出</el-button>
      </spClipboard>

      <el-button size="mini" @click="reset">重置</el-button>
    </template>
    <div class="sp-map-palette__item">
      <div class="sp-map-palette__title">色相</div>
      <el-slider :max="360" v-model="model['hue-rotate']"></el-slider>
    </div>
    <div class="sp-map-palette__item">
      <div class="sp-map-palette__title">亮度</div>
      <el-slider :max="2" :step="0.01" v-model="model.brightness"></el-slider>
    </div>
    <div class="sp-map-palette__item">
      <div class="sp-map-palette__title">对比度</div>
      <el-slider :max="2" :step="0.01" v-model="model.contrast"></el-slider>
    </div>
    <div class="sp-map-palette__item">
      <div class="sp-map-palette__title">饱和度</div>
      <el-slider :max="10" :step="0.01" :min="1" v-model="model.saturate"></el-slider>
    </div>
    <div class="sp-map-palette__item">
      <div class="sp-map-palette__title">透明度</div>
      <el-slider :max="1" :step="0.01" v-model="model.opacity"></el-slider>
    </div>
    <div class="sp-map-palette__item">
      <div class="sp-map-palette__title">灰度</div>
      <el-slider :max="1" :step="0.01" v-model="model.grayscale"></el-slider>
    </div>
    <div class="sp-map-palette__item">
      <div class="sp-map-palette__title">反相</div>
      <el-slider :max="1" :step="0.01" v-model="model.invert"></el-slider>
    </div>
    <div class="sp-map-palette__item">
      <div class="sp-map-palette__title">深褐色</div>
      <el-slider :max="1" :step="0.01" v-model="model.sepia"></el-slider>
    </div>
  </spMapPanel>
</template>

<script>
  /**
   * 瓦片调色板
   * @module $ui/map/sp-map-palette
   */
  import spMapPanel from '../sp-map-panel'
  import {spClipboard} from '$ui'

  const defaultModel = {
    // 亮度
    brightness: 1,
    // 对比度
    contrast: 1,
    // 灰度
    grayscale: 0,
    // 色相旋转
    'hue-rotate': 0,
    // 透明度
    opacity: 1,
    // 饱和度
    saturate: 1,
    // 将图像转换为深褐色
    sepia: 0,
    // 反相
    invert: 0
  }
  export default {
    name: 'spMapPalette',
    components: {
      spMapPanel,
      spClipboard
    },
    props: {
      value: Object
    },
    data() {
      return {
        model: {
          ...defaultModel,
          ...this.value
        }
      }
    },
    watch: {
      model: {
        deep: true,
        handler(val) {
          this.$emit('change', val)
        }
      }
    },
    methods: {
      reset() {
        this.model = {
          ...defaultModel
        }
      },
      getText() {
        return JSON.stringify(this.model)
      },
      output() {
        const text = JSON.stringify(this.model).replace(/"/g, '\'')
        alert(text)
      }
    }
  }
</script>

