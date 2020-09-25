<template>
  <div class="setup">
    <h1 class="setup__title">
      <slot name="title">
        薯片UI
      </slot>
    </h1>

    <h3 class="setup__description">
      <slot name="description">
        <div>为Web前端开发提供基于Vue项目的一站式解决方案。</div>
        <div class="setup__buttons">
          <!--<el-button round type="primary" icon="el-icon-view" @click="go('http://newgateway.gitee.io/sp-web/')">演示预览
          </el-button>-->
          <el-button round type="success" icon="el-icon-video-play" @click="go('/sp/guide/')">快速上手</el-button>
          <el-button round icon="el-icon-s-promotion" @click="go('https://gitee.com/newgateway/sp',true)">源码仓库
          </el-button>
          <sp-test></sp-test>
        </div>
      </slot>
    </h3>
  </div>
</template>

<script>

  let notify = null
  export default {
    name: 'setup',
    methods: {
      go(url, isOpen = false) {
        if (isOpen) {
          window.open(url)
        } else {
          location.href = url
        }
      }
    },
    mounted() {
      if (notify) {
        notify.close()
      }
      // notify = this.$notify({
      //   title: '版本更新',
      //   message: 'v4.0 正式版已发布',
      //   type: 'success',
      //   duration: 3000
      // })
    }
  }
</script>

<style lang="scss" scoped>

  .setup {
    margin: auto;
    padding-top: 2rem;
    line-height: 2rem;
    text-align: center;
    color: #fff;
    position: relative;
    height: 100%;

    &__title {
      margin: 4rem 0 0 0;
    }

    &__descrition {
      margin: 1rem 0 1rem 0;
      padding: 1rem 0 0 0;
      color: #fff;
    }

    &__buttons {
      padding: 3rem 0 0 0;

      .el-button {
        margin: 0 1rem 1rem 1rem;
        zoom: 1.2;
      }
    }

    h1, h3 {

    }

    img {
      width: 100%;
    }

    .copyright {
      color: #888;
      position: absolute;
      left: 0;
      bottom: 0;
      margin-left: -1rem;
      margin-bottom: -2rem;

      p {
        margin: 0;
      }
    }

    .ercode {
      text-align: left;

      > div {
        color: #1890ff;
        text-shadow: 1px 1px 1px #fff;
      }

      img {
        width: 100px;
      }
    }
  }

</style>

