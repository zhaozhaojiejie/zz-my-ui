<template>
  <div class="wrapper">
    <my-pro :fixed="setting.fixed"
            :logo="logo"
            :title="title"
            :mode="setting.layout"
            :menus="menus"
            :menu-props="{router: true, uniqueOpened: true}"
            v-bind="colorTheme"
            :collapsible="setting.collapsible"
            :rainbow="setting.rainbow"
            version="4.x"
            :breadcrumb="createBreadcrumb"
            :tab="setting.tab ? createTab : null"
            :document-title="createDocumentTitle">

      <!-- 头部工具按钮 -->
      <template v-slot:actions>
        <UserAction :dropdown-items="dropdown"
                    :username="userInfo.name"
                    :extra="userInfo.role"
                    @command="handleUserCommand"
                    :avatar="{theme: 'primary'}"></UserAction>
        <IconAction icon="el-icon-message-solid" :badge="12"></IconAction>
        <IconAction icon="el-icon-info" @click="handleInfo"></IconAction>
        <IconAction icon="el-icon-setting"></IconAction>
      </template>

      <!-- 加载子路由页面 -->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </my-pro>
  </div>
</template>

<script>
  import logo from '$ui/assets/logo.png'
  import {MyPro} from '$ui'
  import MockForExample from '$my/code/mixin/mock-for-example'

  const {IconAction, UserAction} = MyPro
  export default {
    mixins: [MockForExample],
    components: {
      MyPro,
      IconAction,
      UserAction
    },
    data() {
      return {
        userInfo: {
          name: 'Admin',
          role: '超级管理员'
        },
        setting: {
          skin: 'default',
          layout: 'sidebar',
          color: 'pro',
          fixed: true,
          collapsible: true,
          tab: false,
          breadcrumb: false,
          rainbow: true,
          invert: false
        },
        logo: logo,
        title: 'MyUI Pro',
        menus: [],
        dropdown: [
          {
            text: '个人信息',
            command: 'info'
          },
          {
            text: '修改密码',
            command: 'password'
          },
          {
            divided: true,
            text: '注销登录',
            command: 'logout'
          }
        ]
      }
    },
    computed: {
      colorTheme() {
        const {color, layout, skin} = this.setting
        const map = {
          simple: 'light',
          tech: 'dark',
          pro: 'black'
        }
        if (layout === 'sidebar') {
          return {
            sidebarTheme: map[color],
            navbarTheme: skin === 'dark' ? 'dark' : 'light'
          }
        }
        if (layout === 'navbar') {
          return {
            sidebarTheme: 'light',
            navbarTheme: map[color]
          }
        }

        if (layout === 'both') {
          return {
            navbarTheme: map[color],
            sidebarTheme: skin === 'dark' ? 'dark' : 'light'
          }
        }

        return {
          navbarTheme: 'light',
          sidebarTheme: 'light'
        }

      }
    },
    methods: {
      // 页面标题构建函数，可根据匹配的路由返回响应的标题名称
      createDocumentTitle(matched) {
        return matched.meta.title
          ? `${matched.meta.title} - MyWeb 4.x`
          : 'MyWeb 4.x'
      },
      handleUserCommand(cmd) {
        switch (cmd) {
          case 'info':
            this.$router.push('/account/center')
            break
          case 'password':
            this.$router.push('/account/settings')
            break
          case 'logout':
            this.logout().then(r => {
              this.$access.logout()
            })
            break
        }
      },
      createBreadcrumb() {
        if (!this.setting.breadcrumb) return null
        return this.$route.matched
          .filter(n => n.meta.title)
          .map(n => {
            return {
              label: n.meta.title,
              to: n.path || '/'
            }
          })
      },
      createTab(fullPath, matched) {
        if (!this.setting.tab) return null
        if (fullPath && matched) {
          const {icon, title, tab} = matched.meta
          if (title || tab) {
            return {
              label: tab || title,
              value: fullPath,
              path: matched.path,
              icon: icon,
              closable: fullPath !== '/dashboard/analysis'
            }
          }
          return null
        } else {
          // 缺省首页
          return {
            label: '分析页',
            value: '/dashboard/analysis',
            closable: false
          }
        }
      },
      handleInfo() {
        window.location.href = 'http://newgateway.gitee.io/my/'
      }
    },
    created() {
      this.getMenus().then(res => {
        this.menus = res
      })
    }
  }
</script>

