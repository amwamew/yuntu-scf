<template>
  <div class="my-menu">
    <el-menu :default-active="$route.path"
      @select="hadSelect"
      :mode="mode"
      :unique-opened="true"
      :collapse="collapse">
      <template v-for="item in data">
        <el-submenu v-if="item.children && item.children.length"
          :index="item.path"
          :key="item.id">
          <template slot="title">
            <i class="icon-img"
              :class="item.icon"></i>
            {{item.label}}
          </template>
          <template v-for="child in item.children">
            <router-link class="router-link"
              :to="child.path"
              :key="child.path">
              <el-menu-item @click.native="onSelect(child)"
                :index="child.path"
                :key="child.id">
                {{child.label}}
              </el-menu-item>
            </router-link>
          </template>
        </el-submenu>
        <el-menu-item v-else
          @click.native="onSelect(item)"
          :key="item.id"
          :index="item.path">
          <router-link class="router-link"
            :to="item.path"
            exact
            :key="item.path">
            <i class="icon-img"
              :class="item.icon"></i>
            {{item.label}}
          </router-link>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    mode: {
      type: String,
      default: 'vertical'
    },
    collapse: {
      type: Boolean,
      default: false
    }
  },
  created() {
    console.log(this.$route)
  },
  mounted() {},
  data() {
    return {
      active: this.$route.path
    }
  },
  methods: {
    hadSelect(key, keyPath) {
      // console.log(key)
      // console.log(keyPath)
    },
    onSelect(item) {
      // console.log(item)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variable.styl'
.router
  display: inline-block
.router-link
  display: block
  overflow: hidden
.router-link-active
  // border-bottom: 2px solid #409eff
.is-active
  a
    color: $color-blue
    // color: #409EFF !important
</style>
