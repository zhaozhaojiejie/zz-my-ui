<template>
  <sp-wrapper title="测试">
    <el-button type="primary" @click="open">简单弹窗</el-button>
    <sp-dialog
      :visible.sync="visible"
      target="body"
      title="标题文字"
      width="400px"
      height="200px"
    >
      这里是内容
    </sp-dialog>
  </sp-wrapper>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    open() {
      this.visible = true;
    }
  }
};
</script>

<style lang="scss" scoped></style>
