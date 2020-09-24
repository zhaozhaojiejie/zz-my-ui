<template>
  <div class="neutral-colors">
    <el-row :gutter="20">
      <el-col :span="12">
        <Palette class="dark" reverse title="深色背景" name="neutral-white" :colors="white"></Palette>
      </el-col>
      <el-col :span="12">
        <Palette title="浅色背景" name="neutral-black" :colors="black"></Palette>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Palette from './Palette'

  const palette = require('@ant-design/colors')

  function getNeutral(color, index) {
    const precents = [1, 0.85, 0.65, 0.45, 0.25, 0.15, 0.09, 0.04, 0.02, 0]
    const val = color === 'black' ? 0 : 255
    return `rgba(${val}, ${val}, ${val}, ${precents[index]})`
  }

  function createNeutralVars() {
    const neutralBlack = []
    const neutralWhite = []

    for (let i = 0; i < 10; i++) {
      neutralBlack.push(getNeutral('black', i))
      neutralWhite.push(getNeutral('white', i))
    }
    return {
      'black': neutralBlack,
      'white': neutralWhite
    }
  }

  export default {
    name: 'NeutralColors',
    components: {
      Palette
    },
    data() {
      return {
        ...createNeutralVars()
      }
    }
  }
</script>

<style lang="scss" scoped>

  .dark {

    /deep/ {
      .levels {
        background: #002766;
      }
    }
  }
</style>
