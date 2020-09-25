<template>
  <div class="sp-table-column-filter">
    <el-popover
      placement="bottom"
      popper-class="sp-table-column-filter__popper"
      trigger="click">
      <i slot="reference" class="sp-table-column-filter__trigger el-icon-more"></i>
      <el-checkbox-group v-if="checkboxList.length" v-model="currentValue">
        <el-checkbox v-for="(col,index) in checkboxList"
                     :key="col.prop||index"
                     :disabled="col.display==='always'"
                     :label="col.prop">{{col.label}}
        </el-checkbox>
      </el-checkbox-group>
      <div v-else>没有可显示的列</div>
    </el-popover>
  </div>
</template>

<script>
  export default {
    props: {
      columns: {
        type: Array,
        default() {
          return []
        }
      },
      value: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentValue: this.value || []
      }
    },
    computed: {
      checkboxList() {
        return this.columns.filter(col => !!col.prop && !col.type)
      }
    },
    watch: {
      value: {
        immediate: true,
        handler(val) {
          this.currentValue = val
        }
      },
      currentValue(val) {
        this.$emit('input', val)
      }
    }
  }
</script>

