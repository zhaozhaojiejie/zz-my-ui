<template>
  <Breadcrumb v-if="data && data.length"
              class="my-breadcrumb"
              :separator="separator"
              :separator-class="separatorClass">
    <BreadcrumbItem v-for="(item, index) in data"
                    :key="`BreadcrumbItem${index}`"
                    :to="item.to">
      <slot>
        <my-icon v-if="item.icon" v-bind="getIconOptions(item.icon)"></my-icon>
        {{item.label}}
      </slot>

    </BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
  import {Breadcrumb, BreadcrumbItem} from 'element-ui'
  import {MyIcon} from '$ui'

  export default {
    name: 'MyBreadcrumb',
    components: {
      Breadcrumb,
      BreadcrumbItem,
      MyIcon
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
