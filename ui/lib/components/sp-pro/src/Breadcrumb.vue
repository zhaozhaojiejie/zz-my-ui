<template>
  <Breadcrumb v-if="data && data.length"
              class="sp-breadcrumb"
              :separator="separator"
              :separator-class="separatorClass">
    <BreadcrumbItem v-for="(item, index) in data"
                    :key="`BreadcrumbItem${index}`"
                    :to="item.to">
      <slot>
        <sp-icon v-if="item.icon" v-bind="getIconOptions(item.icon)"></sp-icon>
        {{item.label}}
      </slot>

    </BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
  import {Breadcrumb, BreadcrumbItem} from 'element-ui'
  import {spIcon} from '$ui'

  export default {
    name: 'spBreadcrumb',
    components: {
      Breadcrumb,
      BreadcrumbItem,
      spIcon
    },
    props: {
      // [{label, icon, to}]
      data: {
        type: Array
      },
      separator: String,
      separatorClass: String
    },
    methods: {
      getIconOptions(icon) {
        if (typeof icon === 'string') {
          return {
            name: icon
          }
        }
        return {
          ...icon
        }
      }
    }
  }
</script>
