<template>
  <spDetail v-bind="$attrs" border v-loading="loading">
    <spDetailItem v-for="(value,key) in data"
                  :key="key"
                  :label="key">{{value}}
    </spDetailItem>
  </spDetail>
</template>

<script>
  import {spDetail, spDetailItem} from '$ui'

  export default {
    components: {
      spDetail,
      spDetailItem
    },
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      },
      loading: Boolean
    }
  }
</script>
