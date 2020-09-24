# Animate.css 动效

## 代码示例

### 基础用法

:::demo

```html
<template>
  <div >
    <div class="action">
      <el-select placeholder="进场动画" v-model="enter">
        <el-option-group
            v-for="(group, key) in animates"
            :key="key"
            :label="key">
            <el-option
              v-for="item in group"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-option-group>
      </el-select>

      <el-select placeholder="离场动画" v-model="leave">
        <el-option-group
            v-for="(group, key) in animates"
            :key="key"
            :label="key">
            <el-option
              v-for="item in group"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-option-group>
        </el-select>
        <el-button type="primary" @click="action">执行过渡动画</el-button>
          enter: {{enter}} / leave: {{leave}}
    </div>
    <transition :enter-active-class="enterClass" :leave-active-class="leaveClass">
      <div class="box" v-show="show"></div>
    </transition>
  </div>
</template>
<style scoped lang="scss">
.box{
 width: 200px;
 height: 200px;
 background: #409eff
}
.action {
  padding: 20px;
 .el-select,.el-button {
    margin-right: 10px;
 }
}
</style>
<script>
  import 'animate.css'
  const animates = {
    'Attention Seekers': ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello'],
    'Bouncing Entrances': ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp'],
    'Bouncing Exits': ['bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp'],
    'Fading Entrances': ['fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig'],
    'Fading Exits': ['fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig'],
    'Flippers': ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY'],
    'Lightspeed': ['lightSpeedIn', 'lightSpeedOut'],
    'Rotating Entrances': ['rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight'],
    'Rotating Exits': ['rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight'],
    'Sliding Entrances': ['slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight'],
    'Sliding Exits': ['slideOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight'],
    'Zoom Entrances': ['zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp'],
    'Zoom Exits': ['zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp'],
    'Specials': ['hinge', 'jackInTheBox', 'rollIn', 'rollOut']
  }
  
  export default {
    data() {
      return {
        animates: animates,
        enter: '',
        leave: '',
        show: false,
        timer: null
      }
    },
    computed: {
      enterClass() {
        return `animate__animated animate__${this.enter}`
      },
      leaveClass() {
        return `animate__animated animate__${this.leave}`
      }
    },
    methods: {
      action() {
        clearTimeout(this.timer)
        this.show = true;
        this.timer = setTimeout(() => {
          this.show = false
        }, 2000)
      }
    },
    beforeDestroy() {
      clearTimeout(this.timer)
    }
  }
</script>

```

:::
