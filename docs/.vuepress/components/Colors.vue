<template>
  <div class="colors">
    <el-row :gutter="20">
      <el-col v-for="item in palettes" :key="item.name" :span="8">
        <palette :name="item.name"
                 :title="item.title"
                 :summary="item.summary"
                 :colors="reverseColors(item.colors)"
                 :primary="item.primary"></palette>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import Palette from './Palette'

  const palette = require('@ant-design/colors')

  const Info = {
    red: {
      title: 'Dust Red / 薄暮',
      summary: '斗志、奔放'
    },
    volcano: {
      title: 'Volcano / 火山',
      summary: '醒目、澎湃'
    },
    orange: {
      title: 'Sunset Orange / 日暮',
      summary: '温暖、欢快'
    },
    gold: {
      title: 'Calendula Gold / 金盏花',
      summary: '活力、积极'
    },
    yellow: {
      title: 'Sunrise Yellow / 日出',
      summary: '出生、阳光'
    },
    lime: {
      title: 'Lime / 青柠',
      summary: '自然、生机'
    },
    green: {
      title: 'Polar Green / 极光绿',
      summary: '健康、创新'
    },
    cyan: {
      title: 'Cyan / 明青',
      summary: '希望、坚强'
    },
    blue: {
      title: 'Daybreak Blue / 拂晓蓝',
      summary: '包容、科技、普惠'
    },
    geekblue: {
      title: 'Geek Blue / 极客蓝',
      summary: '探索、钻研'
    },
    purple: {
      title: 'Golden Purple / 酱紫',
      summary: '优雅、浪漫'
    },
    magenta: {
      title: 'Magenta / 法式洋红',
      summary: '明快、感性'
    },
    grey: {
      title: 'Grey / 灰度',
      summary: '中性'
    }
  }

  export default {
    name: 'Colors',
    components: {
      Palette
    },
    data() {
      return {
        palettes: []
      }
    },
    methods: {
      reverseColors(colors) {
        return [...colors].reverse()
      }
    },
    created() {
      Object.keys(palette.presetPalettes).forEach(key => {
        const preset = palette.presetPalettes[key]
        this.palettes.push({
          ...(Info[key] || {}),
          name: key,
          colors: preset,
          primary: preset.primary
        })
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
